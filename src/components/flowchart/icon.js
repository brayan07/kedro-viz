import { select } from 'd3-selection';

const paths = {
  // database icon
  data: [
    'M6 7.5C6 5.5 8.7 4 12 4c3.2 0 5.9 1.5 6 3.3V17c0 .2 0 .4-.2.6-1.1 1.6-3 2.3-5.8 2.3s-4.7-.7-5.8-2.3A1 1 0 016 17V7.5zm6 8c-1.6 0-3-.4-4-1v2.2c.7.8 2 1.2 4 1.2s3.3-.4 4-1.2v-2.2c-1 .6-2.4 1-4 1zm0-4.5c-1.5 0-3-.3-4-.9v1.6c.8 1.2 2 1.7 4 1.7s3.3-.5 4-1.7v-1.6c-1 .6-2.5.9-4 .9zm0-5c-1.3 0-2.4.3-3.2.8-.6.3-.8.6-.8.7s.2.4.8.7c.8.5 2 .8 3.2.8s2.4-.3 3.2-.8c.6-.3.8-.6.8-.7s-.2-.4-.8-.7c-.8-.5-2-.8-3.2-.8z'
  ],
  // function icon
  task: [
    'M19.46 4.3l.18.14-1.28 1.54c-2.06-1.71-3.52-1.1-4.55 2.52H16v2h-2.66c-.09.43-.17.89-.25 1.37l-.1.68c-1.2 8.23-4.11 11.46-8.41 8.34l-.19-.14 1.22-1.59c2.58 1.97 4.25.32 5.3-6.22l.1-.68.3-1.76H8v-2h3.78c1.48-5.36 4.12-7.04 7.68-4.2z'
  ],
  // sliders icon
  parameters: [
    'M8 14v1.5h13v2H8V19H6v-1.5H4v-2h2V14z',
    'M18.5 5v1.5H21v2h-2.5V10h-2V8.5H4v-2h12.5V5z'
  ]
};

/**
 * Generate cog/database icon.
 * Inline SVG is required to support image exports
 */
export default node => {
  const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  const svg = select(svgNode)
    .attr('class', 'node__icon')
    .attr('viewBox', '0 0 24 24');

  paths[node.type].forEach(path => {
    svg.append('path').attr('d', path);
  });

  return svgNode;
};
