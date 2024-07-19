import * as d3 from "d3";

export class Diagram {
    constructor(config, links) {
        this.config = config;
        this.defaultStrokeWidth = 4;
        this.highlightedStrokeWidth = 8;
        this.defaultStrokeColor = 'black';
        this.highlightedColor = 'blue';
        this.links = links;
        this.nodes = this.convertToNodes();
    }

    convertToNodes() {
        return Object.entries(this.config).map(([id, config]) => ({
            id,
            x: config.x,
            y: config.y,
            label: config.label,
            color: config.color || this.defaultStrokeColor,
        }));
    }

    getNodeHighlightTexts() {
        return Object.entries(this.config).reduce((acc, [id, config]) => {
            if (config.highlightedTexts) {
                acc[id] = config.highlightedTexts;
            }
            return acc;
        }, {});
    }
}

export class DiagramRenderer {
    constructor(svgElement, diagram) {
        this.svg = d3.select(svgElement)
            .attr('viewBox', '0 0 1300 600')
            .attr('preserveAspectRatio', 'xMidYMid meet')
            .classed('svg-content-responsive', true);

        // Append a rectangle to the SVG element as a background
        this.svg.append('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', 'white')
            .attr('data-background', 'true') // Add a data attribute to identify the background
            .lower(); // Ensure the rectangle is at the bottom layer

        this.diagram = diagram;
        this.nodes = diagram.nodes.map(node => ({
            ...node,
            y: node.y + 100  // Adjust the y-coordinate to center the diagram vertically
        }));
        this.defaultStrokeColor = diagram.defaultStrokeColor;
        this.links = this.diagram.links;
    }

    drawNodes() {
        this.svg.selectAll('.node')
            .data(this.nodes)
            .enter()
            .append('rect')
            .attr('class', 'node')
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .attr('width', 200)
            .attr('height', 100)
            .attr('fill', 'white')
            .attr('stroke-width', 4)
            .attr('stroke', d => d.color || this.defaultStrokeColor);
    }

    drawLabels() {
        this.svg.selectAll('.label')
            .data(this.nodes)
            .enter()
            .append('text')
            .attr('class', 'label')
            .attr('x', d => d.x + 100)
            .attr('y', d => d.y + 55)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .text(d => d.label);
    }

    drawLinks() {
        const linkGroup = this.svg.selectAll('.link')
            .data(this.links)
            .enter()
            .append('g')
            .attr('class', 'link');

        linkGroup.append('line')
            .attr('x1', d => this.nodes.find(n => n.id === d.source).x + 200)
            .attr('y1', d => this.nodes.find(n => n.id === d.source).y + 50)
            .attr('x2', d => this.nodes.find(n => n.id === d.target).x - 10)
            .attr('y2', d => this.nodes.find(n => n.id === d.target).y + 50)
            .attr('stroke', 'black');

        linkGroup.append('polygon')
            .attr('points', d => {
                const targetNode = this.nodes.find(n => n.id === d.target);
                const lineEndX = targetNode.x;
                const lineEndY = targetNode.y + 50;
                return [
                    [lineEndX - 10, lineEndY - 5],
                    [lineEndX, lineEndY],
                    [lineEndX - 10, lineEndY + 5]
                ].join(' ');
            })
            .attr('fill', 'black');
    }

    get svgElement() {
        return this.svg;
    }

    render() {
        this.drawNodes();
        this.drawLabels();
        this.drawLinks();
    }
}
