const mongoose = require('mongoose')

const connectDB = async () => {
    try {
    const conn = await mongoose.connect(
        'mongodb+srv://abdulmaajidhassan:5H8M7KAgxK42NmcX@cluster0.nxtla.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`MongoDB Connected`);
    } catch (error) {
    console.error (error);
    process.exit(1);
    }
};
module.exports = connectDB