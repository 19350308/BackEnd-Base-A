const { request, response } = require("express")

const rootMessage= (req=request, res=response) => {
    res.json({msg:'Hola buen dia'})
}
const hiMessage = (req=request, res=response) =>{
    res.json({msg:'Hola mundo'})
}
const byeMessage = (req=request, res=response) =>{
    res.json({msg:'Adios mundo'})
}

const postMessage = (req=request,res=response) => {
    res.json({msg:'Mensaje POST'})
}
const putMessage = (req=request,res=response) => {
    res.json({msg:'Mensaje PUT'})
}
const deleteMessage = (req,res) => {
    res.json({msg:'Mensaje DELETE'})
}

module.exports={rootMessage,hiMessage,byeMessage,postMessage,putMessage,deleteMessage}