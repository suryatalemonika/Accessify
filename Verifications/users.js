const { getData } = require("../dbOperations/fetchdata");

async function checkUser(credentials) {
    const users = await getData();
    const { email, password } = credentials;
    console.log(email, password);
    for (const user of users) {
        if (user && user.password === password && user.email === email) {
            return { success: true, message: "Login successful", user };
        }
    }
    return { success: false, message: "Invalid username or password" };
}

const isUserPresent = async (credentials) => {
    const users = await getData();
    const { first_name } = credentials;
    for (const user of users) {
        if (user && user.first_name === first_name) {
            return { present: true, message: "User Already Present", user };
        }
    }
}

module.exports = { checkUser, isUserPresent };
