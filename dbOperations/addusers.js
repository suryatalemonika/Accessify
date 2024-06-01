const connect = require('../config/db');
const { isUserPresent } = require('../Verifications/users');
const { getData } = require('./fetchdata');
exports.insertData = async (datatoinsert,res) => {
    let result;
    let data = await connect.mongoDbConnection();
    const users = await getData();
    if (users.length > 0) {
        let user = await isUserPresent(datatoinsert);
        if (!user.success) {
            result = res.status(409).json(user);
        } else {
            result = await data.insertOne(datatoinsert);
            if (result.acknowledged) {
                result.message = { message: "Sign up Successful! 🎉👤✅" }
                result = res.status(200).json(result);
            }
        }
    } else {
        result = await data.insertOne(datatoinsert);
        if (result.acknowledged) {
            result.message = { message: "Sign up Successful! 🎉👤✅" }
            result = res.status(200).json(result);
        }
    }
    return result
}
