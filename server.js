const app = require('./src/app.js')
const connect = require('./src/db/db.js')
const PORT = process.env.PORT || 3000;


app.listen(PORT, console.log("server is running successfully"))
connect()