


const express= require('express')
const axios= require('axios')

const app= express()
app.use(express.json())

const CUSTOMER_SERVICE='http://localhost:3003'

// customer routing

app.get('/customers',async(req,res)=>{
    const response= await axios.get(`${CUSTOMER_SERVICE}/customers`)
    res.json(response.data)
})
app.listen(3001,()=>{
    console.log('gateway started');
    
})