const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://dbcluster:bdXPRNf8oxfifFDy@dbcluster.amhbc.mongodb.net/devAdda');
};

module.exports = connectDB;
