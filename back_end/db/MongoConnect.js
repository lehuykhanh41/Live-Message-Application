import mongoose from 'mongoose';

const mongoConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected successfully to MongoDB");
    } catch (error) {
        console.log (`ERROR: ${error} WHEN TRYING TO CONNECT TO MONGODB `)
    }
}

export default mongoConnect;