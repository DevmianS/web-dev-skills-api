var express = require('express');
const router = express.Router();
const skillsDb = require('../../skills.json');

router.get('/:name', (req, res) => {
  const name = req.params.name.toLowerCase();

  for (let skill of skillsDb.skills) {
    // skill.icon = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.name}/${skill.name}-original.svg`;
    if (skill.name.toLowerCase() === name) {
      res.json(skill);
      return;
    }
  }

  res.status(404).send('Skill not found');
});

module.exports = router;
