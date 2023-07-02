import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const {DEV_DB_URL,TEST_DB_URL,DEPLOY_DB_URL} = process.env;
let dbUrl;
 
switch(process.env.NODE_ENV){
    case 'development':
        dbUrl=DEV_DB_URL;
        break;
    case 'production':
        dbUrl=DEPLOY_DB_URL;
        break;
    case 'test':
        dbUrl=TEST_DB_URL;

        break;
    default:
        throw new Error('Invalid environment');
}


const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DEV_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Database connected successfully')
    } catch (error) {
        console.log(error.message)
    }
}

export default dbConnect