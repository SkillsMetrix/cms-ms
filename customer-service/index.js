
const express= require('express')

const app= express()

app.use(express.json())

const customers= [
    { id: 1, name: "charlie", address: "pune" },
    { id: 2, name: "Diana", address: "mumbai" },
  ]

  app.get('/customers',(req,res)=> res.json(customers))

app.listen(3003,()=> console.log('customer service on 3003'))