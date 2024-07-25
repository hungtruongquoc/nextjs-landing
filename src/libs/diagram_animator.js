import {addAnimationText} from "@/libs/d3_utils";
import _ from "lodash";

export class DiagramBoxHighlightAnimator {
    constructor(svgContainer, diagram) {
        this.svgContainer = svgContainer;
        this.diagram = diagram;
        this.animationTexts = new Map();
        this.runCounter = 0;
        this.specialIndex = 0;
        this.specialSequence = ["FastAPI", "Proxy", "FastAPI2"]; // Define the sequence here
    }

    async animateBorders(nodes, perElementWait) {
        const {highlightedColor, highlightedStrokeWidth, defaultStrokeWidth, defaultStrokeColor} = this.diagram;

        // Add animation texts
        const nodeTexts = this.diagram.getNodeHighlightTexts();
        Object.entries(nodeTexts).forEach(([nodeId, textLines]) => {
            this.animationTexts.set(nodeId, addAnimationText(this.svgContainer, this.diagram.nodes, nodeId, textLines));
        });

        const highlightedBoxes = this.svgContainer.selectAll('rect:not([data-background="true"])')

        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            const isSpecialNode = this.specialSequence.includes(node.id);
            const nodeToHighlight = this.specialSequence[this.specialIndex];

            let shouldHighlight;
            if (isSpecialNode) {
                shouldHighlight = node.id === nodeToHighlight;
            } else {
                shouldHighlight = !isSpecialNode;
            }

            this.updateNodeStyles(highlightedBoxes, shouldHighlight, node);

            for (const [id, element] of this.animationTexts) {
                if (node.id === id) {
                    element.style('visibility', shouldHighlight ? 'visible' : 'hidden');
                } else {
                    element.style('visibility', 'hidden');
                }
            }
            // Wait for the specified time before moving to the next node
            await new Promise(resolve => setTimeout(resolve, perElementWait));
        }

        // Reset to original state
        this.resetNodeStyles(highlightedBoxes);

        // Hide all animation texts
        for (const element of this.animationTexts.values()) {
            element.style('visibility', 'hidden');
        }
        this.runCounter++;
        this.specialIndex = (this.specialIndex + 1) % this.specialSequence.length
        console.log({
            runCounter: this.runCounter,
            specialIndex: this.specialIndex,
            specialNode: this.specialSequence[this.specialIndex]
        })
    }

    updateNodeStyles(highlightedBoxes, shouldHighlight, node) {
        const {highlightedColor, highlightedStrokeWidth, defaultStrokeWidth, defaultStrokeColor} = this.diagram;

        highlightedBoxes.attr('stroke', (box, j) => {
            return shouldHighlight && box.id === node.id ? highlightedColor : (box.color || defaultStrokeColor);
        }).attr('stroke-width', (d, j) => {
            return shouldHighlight && d.id === node.id ? highlightedStrokeWidth.toString() : defaultStrokeWidth.toString();
        });
    }

    resetNodeStyles(highlightedBoxes) {
        const {defaultStrokeWidth, defaultStrokeColor} = this.diagram;

        highlightedBoxes.attr('stroke', d => d.color || defaultStrokeColor)
            .attr('stroke-width', defaultStrokeWidth.toString());
    }

    startAnimation(perElementWait) {
        const animateWithWaitTime = _.partial(this.animateBorders.bind(this), this.diagram.nodes, perElementWait);

        // Start the animation immediately
        animateWithWaitTime();
        // Use setInterval to loop the animation
        this.intervalId = setInterval(() => {
            animateWithWaitTime();
        }, perElementWait * this.diagram.nodes.length + 500); // Adjust the interval as needed
    }

    cleanup() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
