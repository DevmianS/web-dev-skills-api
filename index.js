var express = require('express');
const PORT = process.env.PORT;
var cors = require('cors');
var bodyParser = require('body-parser');
var skillsRoutes = require('./routes/skills.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/v1/skills', skillsRoutes);

//ROUTES

app.get('/', (req, res) => {
  res.send('Add "/v1/skills" to the url');
});

app.listen(PORT || 5000, () =>
  console.log(`it's alive on http://localhost:${PORT}`)
);
