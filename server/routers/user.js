const express = require('express')
const router = express.Router()
let conn = require('../src/conn')

/* RESTFUL Api for users management  */
// create user
router.post('/user', function(req, res){
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
router.put('/user/:userId', function(req, res){
    res.send('ແກ້ໄຂຜູ້ໃຊ້')
})

// delete user
router.delete('/user/:userId', function(req, res){
    res.send('ລົບຜູ້ໃຊ້ງານ')
})

// get user by id
router.get('/user/:userId', function(req, res){
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

router.get('/users', function(req, res){
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

module.exports = router