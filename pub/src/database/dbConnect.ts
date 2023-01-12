import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

mongoose.connect(`mongodb+srv://${user}:${password}@${database}pubdb.pvxuz3y.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log ("MongoDB Atlas Connected"))
.catch((error) => console.log(error));

let db = mongoose.connection;

export default db;