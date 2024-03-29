const express = require('express');
const app = express();
const collection = require("./mongo")
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req,res)=>{

});

app.post("/", async(req, res)=>{
    const{email,password}=req.body

    try{
        const check= await collection.findOne({email:email});
        if(check){
            res.json("exist");
        }
        else{
            res.json("notexist");
        }
    }
    catch(e){
        res.json("notexist");
        
    }
})


app.post("/signup", async(req,res)=>{
    const{username,email,password}=req.body;

    const data={
        username: username,
        email:email,
        password:password
    }
    try{
        const check= await collection.findOne({email:email});
        if(check){
            res.json("exist");
        }
        else{
            res.json("notexist");
            await collection.insertMany([data])
        }
        
    }
    catch(e){
        res.json("notexist");
        
    }
});

app.listen(8000, ()=>{
    console.log("port connected");
})