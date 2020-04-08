import { mouse } from 'd3'
import { geoPath, geoMercator, select } from 'd3'

// importer les fichiers GeoJSON
import pub from '/data/pub.json'
import batiment from '/data/batiments.json'
import routes from '/data/routes.json'

// la taille de la carte
const WIDTH = 800
const HEIGHT = 500

// la projection
const projection = geoMercator()
  .fitExtent([[0, 0], [WIDTH, HEIGHT]], pub) // centrer la carte sur les bâtiments

// le constructeur d'attribut "d" pour les éléments <path>
const pathCreator = geoPath().projection(projection)

// le svg
const svg = select('#carte').append('svg')
  .attr('width', WIDTH)
  .attr('height', HEIGHT)

// un groupe pour les routes
const groupeRoutes = svg.append('g')

// un <path> par route
groupeRoutes.selectAll('path')
  .data(routes.features)
  .enter()
  .append('path')
  .attr('d', pathCreator)
  .attr('fill', 'none')
  .attr('stroke', 'lavender')
  .attr('stroke-width', 3)

// un groupe pour les batiments
const groupeBatiment = svg.append('g')

// un <path> par batiment
groupeBatiment.selectAll('path')
  .data(batiment.features)
  .enter()
  .append('path')
  .attr('d', pathCreator)
  .attr('fill', 'lavenderblush')
//   .attr('stroke', 'honeydew')

// un groupe pour les pub
const groupePub = svg.append('g')

/*
 * un <circle> par pub
 * 
 * Pour les points nous ne pouvons pas utiliser "pathCreator",
 * nous utilisons directement la projection sur les coordonnées
 * 
 * projection prends un point du système de coordonnées, [x, y]
 * et retourne un point sur le svg au même format
 * 
*/
const pubCircles = groupePub.selectAll('circle')
  .data(pub.features)
  .enter()
  .append('circle')
  .attr('cx', d => projection(d.geometry.coordinates)[0])
  .attr('cy', d => projection(d.geometry.coordinates)[1])
  .attr('r', 10)
  .attr('fill', 'hotpink')

  const pubDisplay = groupePub.append('text')
  .attr('font-size', 12)
  .attr('text-anchor', 'middle')

  pubCircles.on('mouseover', function(pub) {
    const [x, y] = mouse(this)
    pubDisplay.text(pub.properties.name)
      .attr('x', x)
      .attr('y', y - 20)
  
    select(this) // ici
      .attr('stroke', 'mediumvioletred')
  })

  pubCircles.on('mouseout', function() {
    pubDisplay.text('')
    select(this)
      .attr('stroke', 'none')
  })

  pubCircles.on('mousemove', function() {
    const [x, y] = mouse(this)
    pubDisplay
      .attr('x', x)
      .attr('y', y - 20)
  })

  