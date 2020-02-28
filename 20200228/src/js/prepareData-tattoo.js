const fs = require('fs')
const fichier = fs.readFileSync('./data/nba-tattoos-data.csv', 'utf-8')

const result = fichier
    .split('\n')
    .map(ligne => ligne.split(','))
    .map(d => ({
        name: d[0],
        isTattooed: d[1].split('\r')[0]
    }))
    // .filter(d => d.isTattoed === 'yes')
    .filter(d => d.name.startsWith('Chris'))

console.log(
    JSON.stringify(result, null, 2)
)