// npm init -y
// npm i express
const express = require('express');
const app = express(); 
let port = '3000';
let user = {};

app.use(express.json());
app.listen(port, function(){
    console.log(`server is listening on port ${port}`); 
});

app.get('/user', (req, res) => {
    res.send(user);
});

app.put('/user', (req, res) => {
    user = req.body;
    res.send('Data is received');
});

app.patch('/user', (req, res) => {
    let obj = req.body;
    for(key in obj){
        user.key = obj.key;
        //user[key] = obj[key];
    }
    res.json(user);
})


/*
app.get('/forgetPassword', (req, res) => {
    res.send('./index.html', {root:__dirname});
});

app.post('/forgetPassword', (req, res) => {
    let objFgt = req.body;
    for(let key of objFgt){
        user[key] = objFgt[key];
    }
    res.send(user);
});
*/