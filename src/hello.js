const data  = require('../dataBase/data.json')

function hello() {
    console.log(`hello ${data.name}, you are ${data.age} years old`)
}
hello()