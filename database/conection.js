const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/mi_redsocial"
let connected = false

const connectWithRetry = async (rertyCount = 4) => {
    try {
        await mongoose.connect(url);
        console.log("Connection Successful");
    } catch (error) {
        console.error(error);

    if(rertyCount > 0){ 
        if (error instanceof mongoose.Error || error.status >= 500) {
            console.log('Connection error. Retrying in 5 seconds...');
            setTimeout(() => {
                console.log("Retrying connection...");
                connectWithRetry(rertyCount-1);
            }, 5000);
        } else {
            console.log('Client error. Exiting...');
            process.exit(1); 
        }
    }}
};
module.exports= {connectWithRetry}
