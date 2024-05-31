const connect = require('../config/db');
const { checkUser, isUserPresent } = require('../Verifications/users');
const { getData } = require('./fetchdata');
exports.insertData = async (datatoinsert) => {
    let result;
    let data = await connect.mongoDbConnection();
    const users = await getData();
    if (users.length > 0) {
        let user = await isUserPresent(datatoinsert);
        if (user.present) {
            result = user;
        } else {
            result = await data.insertOne(datatoinsert);
            if (result.acknowledged) {
                result = { message: "User Added" }
            }
        }
    } else {
        result = await data.insertOne(datatoinsert);
        if (result.acknowledged) {
            result = { message: "User Added" }
        }
    }
    return result;
}
