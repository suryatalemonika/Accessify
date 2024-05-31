const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);
let database = 'loginlogout';
const collectionName = 'users'

exports.mongoDbConnection = async () => {
    let mongodbinstance = await client.connect();
    let mongodbdatabase = mongodbinstance.db(database)
    let result = mongodbdatabase.collection(collectionName);
    return result;
}

