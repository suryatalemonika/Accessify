const express = require('express');
const { insertData } = require('./dbOperations/addusers');
const { checkUser } = require('./Verifications/users.js')
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Welcome to Home page User`);
})

app.post('/signup', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required: first_name, last_name, email, password.' });
    } else {
        return await insertData(req.body,res)
    }
})

app.post('/signin', async (req, res) => {
    await checkUser(req.body,res);
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})