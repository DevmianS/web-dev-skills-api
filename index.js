var express = require('express');
const PORT = process.env.PORT || 5000;
var cors = require('cors');
var bodyParser = require('body-parser');
var skillsRoutes = require('./routes/v1/skills.js');
var skillRoute = require('./routes/v1/skill.js');
// const docsSite = require('./docs.html');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/v1/skill', skillRoute);
app.use('/v1/skills', skillsRoutes);
//ROUTES

app.get('/', (req, res) => {
  res.send(
    'ENDPOINTS: <br>1.This endpoint will return array of web development skills objects, with name, icon, website url , stack  and short description.: "/v1/skills" <br>2.Replace {name} with skill name you need, for example javascript. "/v1/skill/{name}"<br>3.Gives you skill selected using id, which is number 1-112: "/v1/skills/{id}"'
  );
});

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
