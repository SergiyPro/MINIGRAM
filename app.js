const express = require('express')

const app = express()
const PORT = 2000
app.listen(PORT,() => {
console.log(`port started in port ${PORT}`)
})