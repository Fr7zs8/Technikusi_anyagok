import dotenv from "dotenv";
dotenv.config();

class DB_config{
    constructor(){
        return {host:process.env.Host, database:process.env.Database, user:process.env.User, password:process.env.Password}
    }
}

const config:any = {
    database: new DB_config()
}

export default config;