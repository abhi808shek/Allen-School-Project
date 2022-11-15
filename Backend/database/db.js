

const mongoose = require('mongoose');

const dataBaseConnection = async() => {
    try {
      // const URI = process.env.MONGO_URL;
      await mongoose.connect("mongodb+srv://vanya_verma:vanu@cluster0.xixixpd.mongodb.net/?retryWrites=true&w=majority")
      console.log("DataBase Connected Successfullyy....");
  
    }
    catch (error) {
      console.log(error.message);
    }
  }
  dataBaseConnection();
