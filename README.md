# web-dev-skills-api

My Web developer skills API database, containing information about frontend and backend technologies used in web developement.

Example of what you can do with it:

![Example](https://i.imgur.com/QmbepNL.png)

Result example:

```
{
      "id": 3,
      "name": "javascript",
      "names": ["JavaScript"],
      "stacks": ["frontend", "backend"],
      "description": "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
      "icon": "https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F3.svg?alt=media&token=833e8a59-30eb-499b-8de9-0ddc81c6bda2",
      "web": ["https://developer.mozilla.org/en-US/docs/Web/JavaScript"]
},
```

Created to be used with portfolio-like sites but I can't stop You to use it elsewhere 😅

Contact me if you have any suggestions or if you want to help 😄

ENDPOINTS:
https://web-dev-skills-api.herokuapp.com/v1/skills - gives you object containing.

https://web-dev-skills-api.herokuapp.com/v1/skill/:name - gives you selected skill by name, replace :name with e.g. javacript.

https://web-dev-skills-api.herokuapp.com/v1/skills/:id - gives you selected skill by id, replace :id with number 1-113.
