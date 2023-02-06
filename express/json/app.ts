import express, { json } from 'express'
import { lista2 } from './xande-pilares-arrumadinho'
import { random } from './xande-pilares-arrumadinho'

const app = express()
const port = 4000


app.get('/', (_req, _res) => {
   _res.send( lista2[random(0,9)] )

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

console.log(lista2)
