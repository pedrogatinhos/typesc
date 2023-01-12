import express from 'express'
import path from 'path'

const app = express()
const port = 4000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


app.get('/', (_req, _res) => {

   _res.sendFile(path.resolve(__dirname,'helloworld.html'))

})

app.get('/download', (_req, _res) => {
    _res.download(path.resolve(__dirname, 'archive.txt'))
 
 })

