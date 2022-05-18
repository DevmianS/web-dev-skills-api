const express = require('express');
const app = express();
const db = require('./db.json');

const PORT = 8080;

// const db = JSON.stringify(db.json);
// app.use(express.json());

//ROUTES
app.get('/v1/all-skills', (req, res) => {
  res.send(db);
});
app.get('/', (req, res) => {
  res.send('Add "/all-skills" to the url');
});

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8000;

// server.use(middlewares);
// server.use(router);
// server.listen(port);
