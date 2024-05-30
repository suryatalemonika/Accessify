const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);
let database = 'loginlogout';
const collectionName = 'users'

exports.mongoDbConnection = async () => {
    let connected = await client.connect();
    let db = connected.db(database)
    let result = db.collection(collectionName);
    return result;
}

