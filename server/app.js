require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes/index')
const port = process.env.PORT || 3001
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)

app.listen(port,()=>{
  console.log(`Connected to port: ${port}`)
})