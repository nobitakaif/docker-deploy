import express from "express";
import { prismaClient } from "store/client"

const app = express()

app.use(express.json())

app.post("/user",async function(req,res){
    const { username, password } = req.body

   try{
        const response = await prismaClient.user.create({
            data:{
                username,
                password
            }
        })
        res.json({
            id:response.id
        })
   }catch(e){
        console.log(e)
        res.send("something happen wrong with db")
   }

})

app.listen(8000,()=>{
    console.log("server is running on port 8000")
})