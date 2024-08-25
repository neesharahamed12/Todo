const mongoose = require("mongoose");

const conn =async(req, res) => {
try {
    

        // await mongoose.connect ("mongodb://localhost:27017/test").then(()=>{
        await mongoose.connect ("mongodb+srv://neesharansari12341:hPH820U81ZOTSsNG@test.vvemymo.mongodb.net/?retryWrites=true&w=majority&appName=test").then(()=>{
    
            console.log("connected")
        });

        
    
    } catch (error) {

    res.status(400).json({
        message:"Not connected",
    });
    
}
}
conn();