const express = require('express');
const { getData } = require('./dbOperations/fetchdata');
const { insertData } = require('./dbOperations/addusers');

const app = express();
const port = 3000;
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
    console.log(`------------------------------------added books in database ----------------------------------`)
    res.send(await result);
})

app.post('/signout', (req, res) => {
    res.send(`you are signout`);
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})