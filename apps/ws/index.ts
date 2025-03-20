import { prismaClient } from "store/client"
Bun.serve({
    port:8080,
    fetch(req,server){
        if(server.upgrade(req)){
            return 
        }
        return new Response("please upgrade your server",{
            status:500
        })
    },
    websocket:{
        async message(ws:any,message:any){
            await prismaClient.user.create({
                data:{
                    username:Math.random().toString(),
                    password:Math.random().toString()
                }
            })
            ws.send("user is created")
        }   
    }
})