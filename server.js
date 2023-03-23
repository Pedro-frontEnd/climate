require('dotenv').config()

const express = require('express')
const openweather = require('./openweather')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.static("public"))

app.get("/stats", (req, res) => {
  openweather.getData()
  res.send("data")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

