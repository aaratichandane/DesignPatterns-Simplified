class Database{
    constructor(){
        if(Database.instance){
            return Database.instance;
        }
        this.connection = "Connected to DB";
        Database.instance = this;
    }

    getConnection(){
        return this.connection;
    }
}

module.exports = new Database();