// on copie-colle les données d'un tableau excel dans un fichier data.csv

const fs = require('fs')
const fichier = fs.readFileSync('./data/data_xlsToCsv.csv', 'utf-8')

const result = fichier
    .split(';')

    
    

console.log(
    JSON.stringify(result, null, 2)
)
