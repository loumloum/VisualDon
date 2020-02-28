const fs = require('fs')
const fichier = fs.readFileSync('./data/data.csv', 'utf-8')

const result = fichier
    .split('\n')
    .map(ligne => ligne.split(';'))
    .map(d => ({
        canton: d[2], // index 2 = canton
        parti: d[5],
        elus: Number(d[12]) // pour pas que ce soit une chaîne de caractère
    }))
    .filter(d => d.canton === 'Vaud')
    .filter(d => d.elus > 0) // que les partis qui ont été élus
    .map(({ parti, elus }) => ({ parti, elus})) //décomposer les objets

console.log(
    JSON.stringify(result, null, 2)
)


/*
indexes
2 cantons
5 partis
12 élus
*/