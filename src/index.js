const express = require("express")
const cors = require ('cors')
const dotenv = require('dotenv')
const app = express()
app.use(cors())
dotenv.config()
const nombre = process.env.NOMBRE || 'Anónimo'

app.get('/',(req,res)=>{
    res.status(200)({
    error:false,
    mensaje: 'Estás en la api de ' + nombre
    })
})
app.listen(process.env.PORT, ()=>{
    console.log("Servidor escuchando en el puerto " + process.env.PORT + ' del servidor de ' + nombre)
})
//env no se sube, por lo que las variables deben ser creadas en el propio servidor

