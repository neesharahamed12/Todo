const mongoose = require("mongoose");

const conn =async(req, res) => {
try {
    

        await mongoose.connect ("mongodb://localhost:27017/test").then(()=>{
    
            console.log("connected")
        });

        
    
    } catch (error) {

    res.status(400).json({
        message:"Not connected",
    });
    
}
}
conn();