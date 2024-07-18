// components/D3Diagram.js
'use client'

import {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {addAnimationText} from "@/libs/d3_utils";
import _ from 'lodash';

const nodeTexts = {
    KongAPI: ['Routes request', 'to services'],
    FastAPI: ['Processes requests', 'for FastAPI service'],
    Proxy: ['Processes requests', 'for Proxy service'],
    Client1: ['Sends requests']
}

const highlightedColor = 'blue';

const ArchitectureChart = () => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', 1000)
            .attr('height', 400);

        const nodes = [
            {id: 'Client1', x: 50, y: 150, label: 'Client', color: 'black'},
            {id: 'KongAPI', x: 300, y: 150, label: 'Kong API Gateway', color: 'green'},
            {id: 'FastAPI', x: 550, y: 50, label: 'FastAPI Service', color: 'maroon'},
            {id: 'Proxy', x: 550, y: 250, label: 'Proxy Service', color: 'violet'},
            {id: 'Client2', x: 800, y: 150, label: 'Client', color: 'black'},
        ];

        const links = [
            {source: 'Client1', target: 'KongAPI', type: 'Request Type 1'},
            {source: 'KongAPI', target: 'FastAPI', type: 'Forward to FastAPI Service'},
            {source: 'FastAPI', target: 'Client2', type: 'Response from FastAPI Service'},
            {source: 'Client1', target: 'KongAPI', type: 'Request Type 2'},
            {source: 'KongAPI', target: 'Proxy', type: 'Forward to Proxy Service'},
            {source: 'Proxy', target: 'Client2', type: 'Response from Proxy Service'},
        ];

        // Draw nodes
        svg.selectAll('.node')
            .data(nodes)
            .enter()
            .append('rect')
            .attr('class', 'node')
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .attr('width', 200)
            .attr('height', 100)
            .attr('fill', 'white')
            .attr('stroke-width', 4)
            .attr('stroke', d => d.color || 'black');

        svg.selectAll('.label')
            .data(nodes)
            .enter()
            .append('text')
            .attr('class', 'label')
            .attr('x', d => d.x + 100)
            .attr('y', d => d.y + 55)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .text(d => d.label);

        // Draw links
        const linkGroup = svg.selectAll('.link')
            .data(links)
            .enter()
            .append('g')
            .attr('class', 'link');

        linkGroup.append('line')
            .attr('x1', d => nodes.find(n => n.id === d.source).x + 200)
            .attr('y1', d => nodes.find(n => n.id === d.source).y + 50)
            .attr('x2', d => nodes.find(n => n.id === d.target).x - 10)
            .attr('y2', d => nodes.find(n => n.id === d.target).y + 50)
            .attr('stroke', 'black');

        linkGroup.append('polygon')
            .attr('points', d => {
                const targetNode = nodes.find(n => n.id === d.target);
                const lineEndX = targetNode.x;
                const lineEndY = targetNode.y + 50;
                return [
                    [lineEndX - 10, lineEndY - 5],
                    [lineEndX, lineEndY],
                    [lineEndX - 10, lineEndY + 5]
                ].join(' ');
            })
            .attr('fill', 'black');

        // Add animation text
        // Add animation texts
        let animationTexts = new Map();
        Object.entries(nodeTexts).forEach(([nodeId, textLines]) => {
            animationTexts.set(nodeId, addAnimationText(svg, nodes, nodeId, textLines));
        })

        const waitingTimeInSec = 500;


        // Animate the borders
        const animateBorders = async (perElementWait) => {

            for (let i = 0; i < nodes.length; i++) {
                svg.selectAll('rect')
                    .attr('stroke', (d, j) => j === i ? highlightedColor : nodes[j].color)
                    .attr('stroke-width', (d, j) => j === i ? 4 : 2);

                for (const [id, element] of animationTexts) {
                    if (nodes[i].id === id) {
                        element.style('visibility', 'visible');
                    } else {
                        element.style('visibility', 'hidden');
                    }
                }
                // Wait .5 second. This determines the speed of the animation
                await new Promise(resolve => setTimeout(resolve, perElementWait));
            }

            // Reset to original state
            svg.selectAll('rect')
                .attr('stroke', d => d.color)
                .attr('stroke-width', 2);
        };

        // Create a partially applied version of animateBorders
        const animateWithWaitTime = _.partial(animateBorders, waitingTimeInSec);

        // Start the animation immediately
        animateWithWaitTime();

        // Use setInterval to loop the animation
        const intervalId = setInterval(() => {
            animateWithWaitTime();
        }, waitingTimeInSec * nodes.length); // Adjust the interval as needed

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);

    }, []);

    return <svg ref={svgRef}></svg>;
};

export default ArchitectureChart;
