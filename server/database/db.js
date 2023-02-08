import mongoose from "mongoose"


// debugger.js ko mongodb sae directly nahi connect kar payengae, enhae connect karnae ke liyae humae MONGODB ya MONGOES library use kani padegi ,moongoes ka pass extra feature hai ess liyae hum moongose use karengae


const Connection=async (username,password)=>{

    const URl=`mongodb://${username}:${password}@ac-w6dyye7-shard-00-00.cg3vif4.mongodb.net:27017,ac-w6dyye7-shard-00-01.cg3vif4.mongodb.net:27017,ac-w6dyye7-shard-00-02.cg3vif4.mongodb.net:27017/?ssl=true&replicaSet=atlas-13obb3-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        // moongoose kae andar connect function hota hai jiskae through hum apnae project ko MONGODB sae connect kartae hai
        // connect function two parameter leta hai, 1st one is URL,2nd one is an object
        //.connect() jo function hai wo ashronous function hai,jo promise ko return deta hai ess liyae hum await lagayengae 
        
        await mongoose.connect(URl,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Error while connecting with the database",error);
    }

}

export default Connection;