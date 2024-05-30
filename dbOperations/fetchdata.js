const connect = require('../config/db');

exports.getData = async () => {
    let data = await connect.mongoDbConnection();
    data = await data.find({}).toArray()
    return data
}

