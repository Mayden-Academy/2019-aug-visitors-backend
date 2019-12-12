const dbService = require('../Services/DbService');

let storeVisitorInfo = async (visitorObject) => {
    let db = await dbService();
    let col = db.collection('visitors');
    visitorObject.timestamp = new Date().getTime();
    let dbResponse = await col.insertOne(visitorObject);
    if (dbResponse.insertedCount === 1) {
        return true;
    }
    return false;
}

let getVisitors = async () => {
    let db = await dbService();
    let col = db.collection('visitors');
    let dbResponse = await col.find().toArray();
    return dbResponse;
}


module.exports.storeVisitorInfo = storeVisitorInfo;
module.exports.getVisitors = getVisitors;