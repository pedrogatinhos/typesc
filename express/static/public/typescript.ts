import express from 'express'
import path from 'path'

const app = express()
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


app.use('/page', express.static(__dirname))

app.get('/page', (_req, _res) => {
    _res.send("hello world")
 
 })
