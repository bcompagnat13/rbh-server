const express = require('express');
const fs = require('fs');




const app = express();
const port = 8000;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (request, resp) => {
    resp.send('<h1>Hello from Express!</h1>')
});

app.get('/hello', (request, resp) => {
    resp.send('<h1>Hello Express World!</h1>')
});

app.get('/data', (request, resp) => {

    console.log('Request received : data');
    let specials;
    fs.readFile('./data/specials.json', 'utf8', function (err, data) {
        if (err) throw err;
        //console.log(data);
        plates = JSON.parse(data);
        console.log(plates);
        resp.send(plates)
    });
});


app.listen(port, (err) => {
    console.log(`server listening on ${port}`)
});