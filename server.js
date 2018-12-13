const cheerio = require('cheerio'),
    fs = require('fs'),
    path = require('path');

const el = require('./element');
console.log(el.element)

var $ = cheerio.load(fs.readFileSync(path.join(__dirname, '/input.html')), {
    normalizeWhitespace: true,
    xmlMode: true
});

$(el.repetiting_element).each(function (i, elem) {
    let cs = cheerio.load(elem);
    data = cs(el.element).text();
    
    console.log(data);
});