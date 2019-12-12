const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbname = 'visitorsDB';

let connectToDB = async () => {
    const Client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    let db = await Client.connect();
    db = Client.db(dbname);
    return db;
};

module.exports = connectToDB;
