import mongoose from "mongoose"

const Connection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@cluster0.cng8dyk.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log("Database Connected");
    }catch(error){
        console.log(`Error while connecting ${error}`);
    }
}


export default Connection;