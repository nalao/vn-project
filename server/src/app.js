let express = require('express')
let bodyParser = require('body-parser')
let morgan = require('morgan')

const app = express()
app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require("./routes")(app)

let port = 3000

app.listen(port, function(){
    console.log('server running on ' + port);
})