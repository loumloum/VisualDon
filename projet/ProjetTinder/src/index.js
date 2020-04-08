import * as d3 from 'd3'

import data from '/data/usage1.json'

const MATCHES = data.map(d => d.matches)
const DATE = data.map(d => d.date)

const nbMatches = MATCHES.reduce((a, b) => a + b, 0);

const WIDTH = 1000
const HEIGHT = 500
const MARGIN = 5

const MARGIN_LEFT = 50
const MARGIN_BOTTOM = 50
const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / nbMatches

const svg = d3.select('body')
  .append('svg')
  .attr('width', WIDTH)
  .attr('height', HEIGHT)

const yScale = d3.scaleLinear()
  .domain([0, nbMatches])
  .range([HEIGHT - MARGIN_BOTTOM, 0])

const batons = svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT}, 0)`)

// batons.selectAll('rect')
//   .data(MATCHES)
//   .enter()
//   .append('rect')
//   .attr('x', (d, i) => i * BAR_WIDTH)
//   .attr('width', BAR_WIDTH - MARGIN)
//   .attr('y', d => yScale(MATCHES))
//   .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(MATCHES))
//   .attr('fill', 'steelblue')

// batons.selectAll('text')
//   .data(DATA)
//   .enter()
//   .append('text')
//   .text(DATE)
//   .attr('x', (d, i) => i * BAR_WIDTH + BAR_WIDTH / 2)
//   .attr('y', HEIGHT - MARGIN_BOTTOM / 2)
//   .attr('text-anchor', 'middle')

// const axisY = d3.axisLeft().scale(yScale)
//   .tickFormat(d => `${d / 1000}k`)
//   .ticks(5)

// svg.append('g')
//   .attr('transform', `translate(${MARGIN_LEFT - 3})`)
//   .call(axisY)