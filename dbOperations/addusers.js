const connect = require('../config/db');

exports.insertData = async (datatoinsert) => {
    let data = await connect.mongoDbConnection();
    let result = await data.insertOne(datatoinsert);
    console.log(result);
    return result;
}

