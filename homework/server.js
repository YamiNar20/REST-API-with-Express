const express = require ('express')
const app = express()

//GREETING ROUTE****
//Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".
app.get('/greeting', (req, res) => {
    res.send('Hello, stranger');
});

//Give the greetingroute a param /:name
app.get('/greeting/:name', (req, res) =>{
const name  = req.params.name;
res.send(`Hello, ${name}`);

});

//TIP CALCULATOR ROUT***




















app.listen(3000, () => {
    console.log('Yes i am listening on port 3000');
});
