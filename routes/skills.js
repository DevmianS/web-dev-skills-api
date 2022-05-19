var express = require('express');

const router = express.Router();

const skills = [
  {
    id: 0,
    icon: '',
    name: 'DUMMY',
    web: 'google.com',
    stack: 'frontend',
    description: 'desc',
  },
  {
    id: 1,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F1.svg?alt=media&token=35799b72-fe80-44bc-a3fb-5816fa12b5da',
    name: 'HTML',
    web: 'google.com',
    stack: 'frontend',
    description: 'desc',
  },
  {
    id: 2,
    icon: 'https://web-dev-skills-api.herokuapp.com/all-skills/skillIcons/2.svg',
    name: 'CSS',
    web: 'google.com',
    stack: 'frontend',
    description: 'desc',
  },
  {
    id: 3,
    icon: 'https://web-dev-skills-api.herokuapp.com/all-skills/skillIcons/3.svg',
    name: 'JavaScript',
    web: 'google.com',
    stack: 'frontend',
    description: 'desc',
  },
];

router.get('/', (req, res) => res.send(skills));

module.exports = router;
