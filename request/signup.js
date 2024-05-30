const axios = require('axios');

async function signupUser(userData) {
    try {
        const response = await axios.post('http://localhost:3000/signup', userData);
        console.log('Response from server:', response.data);
    } catch (error) {
        console.error('Error signing up user:', error);
    }
}

// Example usage:
const userData = {
    first_name: "ABC",
    last_name: "XYZ",
    email: "abcxyz@gmail.com",
    password: "password123"
};

signupUser(userData);
