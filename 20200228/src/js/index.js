import * as d3 from 'd3'

const data = require('/data/data-tattoo.json')

const WIDTH = 1000
const HEIGHT = 500
// const container = DOM.svg(WIDTH, HEIGHT)



// const MARGIN = 5 // espace entre les bâtons
// const BAR_WIDTH = WIDTH / DATA.length // largeur des bâtons

// const svg = d3.select(container)


const body = d3.select('body')
     .attr('width', WIDTH)
     .attr('height', HEIGHT)

const ul = body.append('ul')
const li = ul.selectAll('li')
    .data(data)
    .enter()
    .append('li')
    .text(d => d.name)