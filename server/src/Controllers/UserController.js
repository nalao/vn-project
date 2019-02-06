module.exports = {
    // get all user
    index(req, res){
        res.send("Get All User")
    },

    // create user
    create(req, res){
        res.send("create User")
    },

    // edit user, suspend, active
    put(req, res){
        res.send('ແກ້ໄຂຜູ້ໃຊ້')
    }, 

    // delete user
    remove(req, res){
        res.send('ລົບຜູ້ໃຊ້ງານ')
    },

    // get user by id
    show(req, res){
        res.send("get by id")
    }
}