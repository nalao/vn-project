const UserContrller = require("./Controllers/UserController")

module.exports = (app) => {
    /* RESTFUL Api for users management  */
    // create user
    app.post('/user', UserContrller.create)

    // edit user, suspend, active
    app.put('/user/:userId', UserContrller.put)

    // delete user
    app.delete('/user/:userId', UserContrller.remove)

    // get user by id
    app.get('/user/:userId', UserContrller.show)

    // get all user
    app.get('/users', UserContrller.index)

}