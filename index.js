// import 'dotenv/config';
// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import skillsRoutes from './routes/skills.js';
var express = require('express');
const PORT = process.env.PORT;
var cors = require('cors');
var bodyParser = require('body-parser');
var skillsRoutes = require('./routes/skills.js');
// Import the functions you need from the SDKs you need

// var admin = require('firebase-admin');

// var serviceAccount = require('path/to/serviceAccountKey.json');

// Initialize Firebase
// const Gapp = initializeApp(firebaseConfig);

// import { MongoClient, ServerApiVersion } from 'mongodb';

// const uri = process.env.DB_CONNECTION;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// async function run() {
//   try {
//     await client.connect(err => {
//       console.log('connected to db');
//       const collection = client.db('test').collection('devices');
//       // perform actions on the collection object
//     });
//   } finally {
//     await client.close();
//   }
// }
// run();

const app = express();
// import db from './db.json';

app.use(cors());
app.use(bodyParser.json());

app.get('/all-skills', skillsRoutes);

//ROUTES

// app.get('/', (req, res) => {
//   res.send('Add "/all-skills" to the url');
// });

app.listen(PORT || 5000, () =>
  console.log(`it's alive on http://localhost:${PORT}`)
);
