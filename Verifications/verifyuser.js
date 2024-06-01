const { getData } = require('../dbOperations/fetchdata');

const checkUser = async (credentials, res) => {
    try {
        const users = await getData();
        
        if (users.length < 1) {
            return res.status(404).json({ success: false, message: "No User Present. Please Sign Up First. 🚫✍️🆕" });
        }
        
        const { email, password } = credentials;
        for (const user of users) {
            if (user && user.password === password && user.email === email) {
                return res.status(200).json({ success: true, message: "Login Successful Welcome 🎉👋", user });
            }
        }
        
        return res.status(401).json({ success: false, message: "Invalid Username or Password ❌🔑🚫" });
    } catch (error) {
        console.log(`${new Date().toJSON()} - verifyuser - checkUser - got error while checking user : ${error}`);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const isUserPresent = async (credentials) => {
    try {
        const users = await getData();
        const { first_name } = credentials;
        for (const user of users) {
            if (user && user.first_name === first_name) {
                return { success: false, message: "User Already Present. You can log in! 🔒✅👤", user };
            }
        }
    } catch (error) {
        console.log(`${new Date().toJSON()} - verifyuser - isUserPresent - got error while checking user : ${error}`);
    }
}

module.exports = { checkUser, isUserPresent };
