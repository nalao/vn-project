let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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

let port = 8080

app.listen(port, function(){
    console.log('server running on ' + port);
})