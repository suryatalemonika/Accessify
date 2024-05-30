const express = require('express');
const { getData } = require('./dbOperations/fetchdata');
const { insertData } = require('./dbOperations/addusers');
const {checkUser} = require('./Verifications/users.js')
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Welcome to Home page User`);
})

app.get('/getusers', async (req, res) => {
    let result = await getData()
    console.log(`------------------------------------list of books ----------------------------------`)
    console.log(result);
    res.send(result);
})
app.post('/signup', async (req,res) => {
    console.log(req.body)
    let result = insertData(req.body)
    console.log(`------------------------------------added user in database ----------------------------------`)
    res.send(await result);
})

app.post('/signin', async(req, res) => {
    console.log(`------------------------------------list of userscd ----------------------------------`)
    let result = await checkUser(req.body);
    console.log(result)
    res.send(result.message);
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})