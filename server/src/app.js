let express = require('express')
const app = express()

app.get('/status', function(req, res){
    res.send('hello nodejs server')
})

let port = 8080

app.listen(port, function(){
    console.log('server running on ' + port);
})