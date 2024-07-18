import {addAnimationText} from "@/libs/d3_utils";
import _ from "lodash";

export class DiagramBoxHighlightAnimator {
    constructor(svgContainer, diagram) {
        this.svgContainer = svgContainer;
        this.diagram = diagram;
        this.animationTexts = new Map();
    }

    async animateBorders(nodes, perElementWait) {
        const {highlightedColor, highlightedStrokeWidth, defaultStrokeWidth, defaultStrokeColor} = this.diagram;

        // Add animation texts
        const nodeTexts = this.diagram.getNodeHighlightTexts();
        Object.entries(nodeTexts).forEach(([nodeId, textLines]) => {
            this.animationTexts.set(nodeId, addAnimationText(this.svgContainer, this.diagram.nodes, nodeId, textLines));
        });

        for (let i = 0; i < nodes.length; i++) {
            this.svgContainer.selectAll('rect')
                .attr('stroke', (box, j) => j === i ? highlightedColor : (box.color || defaultStrokeColor))
                .attr('stroke-width', (d, j) => j === i ? highlightedStrokeWidth.toString() : defaultStrokeWidth.toString());

            for (const [id, element] of this.animationTexts) {
                if (nodes[i].id === id) {
                    element.style('visibility', 'visible');
                } else {
                    element.style('visibility', 'hidden');
                }
            }
            // Wait for the specified time before moving to the next node
            await new Promise(resolve => setTimeout(resolve, perElementWait));
        }

        // Reset to original state
        this.svgContainer.selectAll('rect')
            .attr('stroke', d => d.color || defaultStrokeColor)
            .attr('stroke-width', defaultStrokeWidth.toString());

        // Hide all animation texts
        for (const element of this.animationTexts.values()) {
            element.style('visibility', 'hidden');
        }
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
