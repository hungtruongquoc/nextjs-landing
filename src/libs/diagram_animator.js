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

    async animateBorders(nodes, perElementWait){
        // Add animation texts
        const nodeTexts = this.diagram.getNodeHighlightTexts();
        Object.entries(nodeTexts).forEach(([nodeId, textLines]) => {
            this.animationTexts.set(nodeId, addAnimationText(this.svgContainer, this.diagram.nodes, nodeId, textLines));
        });

        const highlightedBoxes = this.svgContainer.selectAll('rect:not([data-background="true"])')

        // Filter the nodes to be highlighted
        const filteredNodes = nodes.filter(node => {
            const isSpecialNode = this.specialSequence.includes(node.id);
            const nodeToHighlight = this.specialSequence[this.specialIndex];
            return isSpecialNode ? node.id === nodeToHighlight : true;
        });

        for (let i = 0; i < filteredNodes.length; i++) {
            const node = filteredNodes[i];

            this.updateNodeStyles(highlightedBoxes, true, node);

            for (const [id, element] of this.animationTexts) {
                element.style('visibility', (node.id === id) ? 'visible' : 'hidden');
            }
            // Wait for the specified time before moving to the next node
            await new Promise(resolve => setTimeout(resolve, perElementWait));

            // Reset the node styles after the wait
            this.updateNodeStyles(highlightedBoxes, false, node);
            for (const element of this.animationTexts.values()) {
                element.style('visibility', 'hidden');
            }
        }

        // Reset to original state
        this.resetNodeStyles(highlightedBoxes);

        // Hide all animation texts
        for (const element of this.animationTexts.values()) {
            element.style('visibility', 'hidden');
        }
        this.runCounter++;
        this.specialIndex = (this.specialIndex + 1) % this.specialSequence.length
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
