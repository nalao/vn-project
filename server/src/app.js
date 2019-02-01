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

/* RESTFUL Api for users management  */
// create user
app.post('/user', function(req, res){
    res.send('ສ້າງຜູ້ໃຊ້')
})

// edit user, suspend, active
app.put('/user/:userId', function(req, res){
    res.send('ແກ້ໄຂຜູ້ໃຊ້')
})

// delete user
app.delete('/user/:userId', function(req, res){
    res.send('ລົບຜູ້ໃຊ້ງານ')
})

// get user by id
app.get('/user/:userId', function(req, res){
    res.send('ເບິ່ງຂໍ້ມູນຜູ້ໃຊ້ງານ')
})

app.get('/users', function(req, res){
    res.send('ເບິ່ງຂໍ້ມູນຜູ້ໃຊ້ທັງໝົດ')
})


let port = 8080

app.listen(port, function(){
    console.log('server running on ' + port);
})