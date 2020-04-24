const cheerio = require('cheerio')
const fs = require('fs')

const page = fs.readFileSync('page.html', 'utf-8')

const $ = cheerio.load(page)

const row = $('.col-md-9 > div:nth-child(2)')
const captions = $('div.caption', row)

let result = []

captions.each((index, caption) => {
    result.push({
        nom: $('h4:nth-child(2) > a', caption).attr('title'),
        prix: $('h4:nth-child(1)', caption).text()
      })
})

console.log(
    JSON.stringify(
      result,
      null,
      2
    )
)