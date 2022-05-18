var express = require('express');

const router = express.Router();

const skills = [
  {
    id: 0,
    icon: '',
    name: 'DUMMY',
    web: 'google.com',
    stack: 'frontend',
  },
  {
    id: 1,
    icon: 'https://web-dev-skills-api.herokuapp.com/all-skills/skillIcons/1.svg',
    name: 'HTML',
    web: 'google.com',
    stack: 'frontend',
  },
  {
    id: 2,
    icon: 'https://web-dev-skills-api.herokuapp.com/all-skills/skillIcons/2.svg',
    name: 'CSS',
    web: 'google.com',
    stack: 'frontend',
  },
  {
    id: 3,
    icon: 'https://web-dev-skills-api.herokuapp.com/all-skills/skillIcons/3.svg',
    name: 'JavaScript',
    web: 'google.com',
    stack: 'frontend',
  },
];

router.get('/', (req, res) => res.send(skills));

module.exports = router;
