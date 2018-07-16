// Import
const express = require('express');
const bodyParser = require('body-parser');

// Server
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'omalige@gmail.com' && password === 'aze') {
    res.send('Olivier');
  }
  else {
    res.status(400).end();
  }
});


// Start on :3000
app.listen(3000);
