const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', (req,res) => {
    res.send(req.body.str.split('').reverse().join(''));
}).listen(Number(process.argv[2]));