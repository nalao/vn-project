let express = require('express')
let bodyParser = require('body-parser')
const {sequelize} = require('./models')
let morgan = require('morgan')

const app = express()
app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require("./routes")(app)

let port = 3000

sequelize.sync({force: false}).then(() => {
    app.listen(port, () => {
        console.log('Sever running on ' + port )
    })
})

// app.listen(port, function(){
//     console.log('server running on ' + port);
// })