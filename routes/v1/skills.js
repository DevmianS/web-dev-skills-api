var express = require('express');

const router = express.Router();

const skillsDb = require('../../skills.json');

router.get('/', (req, res) => res.send(skillsDb));

router.get('/:id', (req, res) => {
  const id = +req.params.id;

  for (let skill of skillsDb.skills) {
    if (skill.id === id) {
      res.json(skill);
      return;
    }
  }
  if (id > skillsDb.skills.length) {
    res.status(404).send(`Last skill has ${skillsDb.skills.length} as ID`);
  } else res.status(404).send('Skill not found');
});

module.exports = router;
