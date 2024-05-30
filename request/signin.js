const axios = require('axios');

async function signinUser(userData) {
    try {
        const response = await axios.post('http://localhost:3000/signin', userData);
        console.log('Response from server:', response.data);
    } catch (error) {
        console.error('Error signing up user:', error);
    }
}

// Example usage:
const userData = {
    email: "abcxyz@gmail.com",
    password: "password123"
};

signinUser(userData);
