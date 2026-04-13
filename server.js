const app = require('./src/app.js')
const connect = require('./src/db/db.js')
const PORT = process.env.PORT || 8080;

// app.get('/', (req, res) => {
//     res.json("server started")
// })

app.listen(PORT, console.log("server is running successfully"))
connect()