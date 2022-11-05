const { request, response } = require("express")

const rootMessage= (req=request, res=response) => {
    const{texto1, texto2} = req.query
 //  if (!texto1 || !texto2) {
 //   res.status(400).json({
 //       msg: ´No se ha enviado los parametros necesario´
 //  })
 //  }
 //   console.log(texto) 
 if(!texto1){
    res.status(400).json({msg:"Falta el parametro 'texto1'"})
 }
 if(!texto2){
    res.status(400).json({msg:"Falta el parametro 'texto2'"})
    }
    res.status(200).json({msg: texto1 + '' + texto2})
}
const hiMessage = (req=request, res=response) =>{
    //console.log(req.params)
    const {name} = req.params
   res.json({msg:'Hola Mundo'+ name})
   // res.status(405).json({msg:'Hola mundo'})
}
const byeMessage = (req=request, res=response) =>{
    res.status(406).json({msg:'Adios mundo'})
}
const postMessage = (req=request,res=response) => {
    res.status(407).json({msg:'Mensaje POST'})
}
const putMessage = (req=request,res=response) => {
    res.status(408).json({msg:'Mensaje PUT'})
}
const deleteMessage = (req,res) => {
    res.status(409).json({msg:'Mensaje DELETE'})
}

module.exports={rootMessage,hiMessage,byeMessage,postMessage,putMessage,deleteMessage}