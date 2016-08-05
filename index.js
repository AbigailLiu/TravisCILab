const express = require('express');

const PORT = 49003;

const app = express();

app.get('/', function(reg, res){
    res.send('Hello world!');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
