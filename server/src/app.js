let express = require('express')
let bodyParser = require('body-parser')
let morgan = require('morgan')
let router = require('../routers/user')

const app = express()
app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(router)

app.get('/status', function(req, res){
    res.send('hello nodejs server')
})

app.get('/hello/:person', function(req, res){
    console.log('hello - ' + req.params.person)
    res.send('sey hello with ' + req.params.person)
})

app.post('/hello', function(req, res){
    res.send('Ok you post - ' + req.body.name)
})


let port = 3000

app.listen(port, function(){
    console.log('server running on ' + port);
})