const { getData } = require("../dbOperations/fetchdata");

async function checkUser(credentials) {
    let user = await getData(credentials.email)
    const { email, password } = credentials;   
    if(user.length==1){
        user = user[0]
        if (user && user.password === password) {
            return { success: true, message: "Login successful", user };
        } else {
            return { success: false, message: "Invalid username or password" };
        } 
    } 
    
}

module.exports = { checkUser };