import express, { json } from 'express'
import { lista, R } from './xande-pilares-arrumadinho'



const app = express()
const port = 5000



app.get("/", (req, res) => {
   res.send(lista[R(0,9)]);
 });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


