import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import skillsRoutes from './routes/skills.js';
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect(err => {
      console.log('connected to db');
      const collection = client.db('test').collection('devices');
      // perform actions on the collection object
    });
  } finally {
    await client.close();
  }
}
run();

const app = express();
// import db from './db.json';

const PORT = 8080;

// const db = JSON.stringify(db.json);
// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/all-skills', skillsRoutes);

//ROUTES
// app.get('/v1/all-skills', (req, res) => res.send('db'));
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
