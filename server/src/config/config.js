module.exports = {
    db: {
        database: process.env.DB_NAME || 'nvWebsiteDb',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './nvwebsite-db.sqlite'
        }
    }
}