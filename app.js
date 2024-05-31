const express = require('express');
const { insertData } = require('./dbOperations/addusers');
const { checkUser } = require('./Verifications/users.js')
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Welcome to Home page User`);
})

app.post('/signup', async (req,res) => {
    let result = await insertData(req.body)
    res.send(result.message);
})

app.post('/signin', async(req, res) => {
    let result = await checkUser(req.body);
    res.send(result.message);
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})