const mongoose = require("mongoose");

//Connect to MongoDB database
async function connectToDB (){
    try {
        await mongoose.connect(`mongodb+srv://${"leony"}:${"jiqLbi1QBgySdqxL"}@testcluster.dwoglot.mongodb.net/?retryWrites=true&w=majority`);
        console.log("Database connection successful!");
    } catch (error) {
        console.log("Database connection error: ", error);
    }
};
module.exports.connectToDB = connectToDB;

//Create table model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlenght : 8,
    }
});
const UserModel = mongoose.model("User", userSchema);
module.exports.UserModel = UserModel;