// components/D3Diagram.js
'use client'

import {useEffect, useMemo, useRef} from 'react';
import {Diagram, DiagramRenderer} from "@/libs/diagram_rendering";
import {DiagramBoxHighlightAnimator} from "@/libs/diagram_animator";

const diagramConfig = {
    Client1: {highlightedTexts: ['Sends requests'], label: 'Client', x: 50, y: 150},
    KongAPI: {
        highlightedTexts: ['Routes request', 'to services'],
        label: 'Caddy API Gateway',
        x: 300,
        y: 150,
        color: 'green'
    },
    FastAPI: {
        highlightedTexts: ['Processes requests', 'for FastAPI service'],
        label: 'FastAPI Service',
        x: 550,
        y: 250,
        color: 'maroon'
    },
    FastAPI2: {
        highlightedTexts: ['Processes requests', 'for FastAPI service'],
        label: 'FastAPI Service 2',
        x: 550,
        y: 50,
        color: 'maroon'
    },
    Proxy: {
        highlightedTexts: ['Processes requests', 'for Proxy service'],
        label: 'EB App in AWS',
        x: 550,
        y: 450,
        color: 'violet'
    },
    KongAPI2: {
        highlightedTexts: ['Routes responses', 'to client'],
        label: 'Caddy API Gateway',
        x: 800,
        y: 150,
        color: 'green'
    },
    Client2: {highlightedTexts: ['Receives responses'], label: 'Client', x: 1050, y: 150}
}

const links = [
    {source: 'Client1', target: 'KongAPI', type: 'Request Type 1'},
    {source: 'KongAPI', target: 'FastAPI', type: 'Forward to FastAPI Service'},
    {source: 'KongAPI', target: 'FastAPI2', type: 'Forward to FastAPI Service'},
    {source: 'FastAPI', target: 'KongAPI2', type: 'Response back from FastAPI Service'},
    {source: 'FastAPI2', target: 'KongAPI2', type: 'Response back from FastAPI Service'},
    {source: 'KongAPI2', target: 'Client2', type: 'Response from FastAPI Service'},
    {source: 'KongAPI', target: 'Proxy', type: 'Forward to Proxy Service'},
    {source: 'Proxy', target: 'KongAPI2', type: 'Response back from Proxy Service'},
    {source: 'KongAPI2', target: 'Client2', type: 'Response from Proxy Service'},
];

const ArchitectureChart = () => {
    const svgRef = useRef();
    const diagram = useMemo(() => new Diagram(diagramConfig, links), [diagramConfig]);

    useEffect(() => {
        const diagramRender = new DiagramRenderer(svgRef.current, diagram);
        diagramRender.render();
        const diagramAnimator = new DiagramBoxHighlightAnimator(diagramRender.svgElement, diagram);
        diagramAnimator.startAnimation(1500);
        return () => diagramAnimator.cleanup();
    }, [diagram]);

    return <svg ref={svgRef}></svg>;
};

export default ArchitectureChart;
