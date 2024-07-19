export const addAnimationText = (svg, nodes, nodeId, textLines) => {
    const textElement = svg.append('text')
        .attr('x', nodes.find(n => n.id === nodeId).x + 100)
        .attr('y', nodes.find(n => n.id === nodeId).y  + 50)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', 'blue')
        .style('visibility', 'hidden');

    textLines.forEach((line, index) => {
        textElement.append('tspan')
            .attr('x', nodes.find(n => n.id ===  nodeId).x + 100)
            .attr('dy', index === 0 ? '0em' : '1.2em')
            .text(line);
    });

    return textElement;
};
