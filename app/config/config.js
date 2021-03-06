require("dotenv").config()

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.SQLPASSWORD,
    "database": "burgerlist_db",
    "host": "localhost",
    "port": 3306,
    "dialect": "mysql"
  },

  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  
  "production": {
    "username": "admin",
    "password": process.env.TRENT,
    "database": "CLAIRE_BURGERDB",
    "host": "musicdb-g2.cykqhanvgs0f.ap-southeast-2.rds.amazonaws.com",
    "dialect": "mysql"
  }
}