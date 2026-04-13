const app = require('./src/app.js')
const connect = require('./src/db/db.js')


app.listen(3000, console.log("server is running successfully"))
connect()