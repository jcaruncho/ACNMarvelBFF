const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(`mongodb:${process.env.DB}/heroes`);
        console.log("DB Online")
    } catch (error) {
        console.warn(error)
        throw new Error("DB Error")
    }
}

module.exports = { dbConnection }