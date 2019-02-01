let express = require('express')
let bodyParser = require('body-parser')
let morgan = require('morgan')
let conn = require('./conn')

const app = express()
app.use(morgan('combined'))

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
    const fName = req.body.fname
    const lName = req.body.lname
    const queryString = "INSERT INTO users(fname, lname) VALUES(?, ?)"
    conn.query(queryString, [fName, lName], function(err, results, fields){
        if(err){
            console.log(err)
            return
        }
        console.log("inserted a new user with id: " + results.insertId)
        res.end()
    })
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
    const userId = req.params.userId
    const queryString = 'SELECT * FROM users WHERE id = ?'
    conn.query(queryString, [userId], function(err, rows, fields){
        if(err) {
            console.log(err)
            return
        }
        res.json(rows)
    })
})

app.get('/users', function(req, res){
    const queryString = 'SELECT * FROM users'
    conn.query(queryString, function(err, rows, fields){
        if(err) {
            console.log(err)
            res.end()
            return
        }
        res.json(rows)
    })
})


let port = 3000

app.listen(port, function(){
    console.log('server running on ' + port);
})