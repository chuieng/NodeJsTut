const fs = require('fs')

const databuffer = fs.readFileSync('1-json.json')
const dataJson = databuffer.toString()
const data = JSON.parse(dataJson)
data.name= 'new name'


const data1 = JSON.stringify(data);
console.log(data1)

fs.writeFileSync('1-json.json',data1)