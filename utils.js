var fs = require('fs');

const url = process.argv[2]
const arr = url.split('/')
var name = arr.pop()
if (!name) {
  name = arr.pop()
}

fs.writeFile('./src/' + name + '.js', '', (err) => {
  if (!err) {
    console.log('src/' + name + ' created')
  }
})
