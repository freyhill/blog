let fs = require('fs');
let bigWordReg = /(#{1,5})(\s{1,})(.*)/g
let blockReg = /(>{1})(\s{1,})(.*)/g
eleMap = {
    "#": 'h1',
    "##": 'h2',
    "###": 'h3',
    "####": 'h4',
    "#####": 'h5',
    ">": 'p',
    "*": 'li'
}

function markdownToHtml(markdown) {
    this.markdown = markdown;
    this.change = function() {
        this.format(bigWordReg);
    }
    this.change();
}

markdownToHtml.prototype.format= function (reg) {
    let matchs = this.markdown.match(reg);
    let html = '';
    if (matchs && matchs.length > 0) {
        for(let i = 0; i < matchs.length; i++) {
            html = this.markdown.replace(reg, (match, $1, $2, $3) => {
                return `<${eleMap[$1]}>${$3}<${eleMap[$1]}>`;
            });
        }
    }
    this.html = html;
}

fs.readFile('./read.md',(err,data) => {
    let markdown = data.toString();
    let newMarkdown = new markdownToHtml(markdown)
   console.log(newMarkdown.html);
})
