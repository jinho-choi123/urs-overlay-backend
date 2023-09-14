import { configDotenv } from "dotenv";

const NODE_ENV = process.env.NODE_ENV || 'development';

// Load .env file
const env = () => {
    if(process.env.NODE_ENV === 'production') {
        configDotenv({path: 'config/.env.production'})
    } else {
        configDotenv({path: 'config/.env.development'})
    }
}

export default env;