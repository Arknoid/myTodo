// Import
const express = require('express');
const bodyParser = require('body-parser');
// Json Web Token
const jwt = require('jsonwebtoken');
// middleware to verify token on the request header
const expressJwt = require('express-jwt');

const secret = 'qsdjS12ozehdoIJ123DJOZJLDSCqsdeffdg123ER56SDFZedhWXojqshduzaohduihqsDAqsdq';
// const secret = 'unpetittestdesecrettoutcon';
const port = 3000;

// Server
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
// Permet de restrindre l'acces au site (token) sauf pour :
app.use(expressJwt({ secret }).unless({ path: ['/login', '/signup'] }));
// Get
app.get('/tasks', (req, res) => {
  res.send(
    [
      {
        id: 1,
        label: 'farine',
        done: true,
        fav: false,
      },
      {
        id: 4,
        label: 'lait',
        done: false,
        fav: true,
      },
      {
        id: 6,
        label: 'sucre',
        done: false,
        fav: false,
      },
    ],
  );
});

// Login
const fakeUser = { email: 'omalige@gmail.com', password: 'aze' };
app.post('/login', (req, res) => {
  const { emailValue, passwordValue } = req.body;
  if (emailValue === fakeUser.email && passwordValue === fakeUser.password) {
    const myToken = jwt.sign({ iss: 'myTodo', user: fakeUser.email, role: 'user' }, secret);
    res.json(myToken);
  }
  else {
    res.status(400).end();
  }
});


// Start on :3000
app.listen(port);
