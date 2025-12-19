const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/signin', (req, res) => {
    const signIn = `<form method ='post'>
    <label for="login">Insert login</label>
    <input type="text" name="login" placeholder="Insert login">
    <button type="submit">SEND</button>
    </form>`;

    res.send(signIn);
});

app.post("/signin", (req, res) => {
    // console.log(req.body);
    res.json(req.body);
})

app.get('/users', (req, res) => {
    const users = [
        {
            "username": "jean",
            "age": 25,
        },
        {
            "username": "julien",
            "age": 32,
        },
        {
            "username": "emmanuelle",
            "age": 61,
        }
    ];

    res.json(users);
});

app.get('/profile/:userName', (req, res) => {
    console.log(req);
    res.send(`<h1>Bonsoir ${req.params.userName}</h1>`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});