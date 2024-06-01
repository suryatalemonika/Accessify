const connect = require('../config/db');
const { isUserPresent } = require('../Verifications/verifyuser');
const { getData } = require('./fetchdata');
exports.insertData = async (datatoinsert, res) => {
    try {
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
    } catch (error) {
        console.log(`${new Date().toJSON()} - addusers - insertData - got error while inserting user : ${error}`)
    }

}
