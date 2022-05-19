var express = require('express');

const router = express.Router();

const skills = [
  {
    id: 0,
    icon: 'url',
    names: ['DUMMY'],
    web: ['link1', 'link2'],
    stacks: ['frontend'],
    description: 'description text',
  },
  {
    id: 1,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F1.svg?alt=media&token=35799b72-fe80-44bc-a3fb-5816fa12b5da',
    names: ['HTML'],
    web: [
      'https://dev.w3.org/html5/html-author/',
      'https://developer.mozilla.org/en-US/docs/Web/HTML',
    ],
    stacks: ['frontend'],
    description:
      'HTML (HyperText Markup Language) is the code that is used to structure a web page and its content.',
  },
  {
    id: 2,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F2.svg?alt=media&token=9faede00-011e-4c0a-b474-3308856fc65a',
    names: ['CSS'],
    web: ['https://www.w3.org/Style/CSS/specs.en.html'],
    stacks: ['frontend'],
    description:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
  },
  {
    id: 3,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F3.svg?alt=media&token=833e8a59-30eb-499b-8de9-0ddc81c6bda2',
    names: ['JavaScript'],
    web: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
    stacks: 'frontend',
    description:
      'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
  },
  {
    id: 4,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F4.svg?alt=media&token=1614f884-6d32-47e0-a736-38b5176c7bde',
    names: ['Git'],
    web: ['https://git-scm.com/'],
    stacks: ['frontend', 'backend'],
    description:
      'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
  },
  {
    id: 5,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F5.svg?alt=media&token=a49da092-9ba7-494c-b622-0f174f7f0123',
    names: ['GitHub'],
    web: ['https://github.com/'],
    stacks: ['frontend', 'backend'],
    description:
      'GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.',
  },
  {
    id: 6,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F6.svg?alt=media&token=4f53c2f8-d6b3-4285-b960-b55121ee145c',
    names: ['GitLab'],
    web: ['https://about.gitlab.com/'],
    stacks: ['frontend', 'backend'],
    description:
      'GitLab Inc. is the open-core company that provides GitLab, the DevOps software that combines the ability to develop, secure, and operate software in a single application.',
  },
  {
    id: 7,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F7.svg?alt=media&token=e804ddae-442c-4946-9e5d-f456458ff0a2',
    names: ['BitBucket'],
    web: ['https://bitbucket.org/'],
    stacks: ['frontend', 'backend'],
    description:
      'Bitbucket is a Git-based source code repository hosting service owned by Atlassian.',
  },
  {
    id: 8,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F8.svg?alt=media&token=fc82fdf8-84e6-4933-ac1f-61166b27b1c9',
    names: ['npm'],
    web: ['https://www.npmjs.com/'],
    stacks: ['frontend', 'backend'],
    description:
      'npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.',
  },
  {
    id: 9,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F8.svg?alt=media&token=fc82fdf8-84e6-4933-ac1f-61166b27b1c9',
    names: ['yarn'],
    web: ['https://yarnpkg.com/'],
    stacks: ['frontend', 'backend'],
    description:
      'Yarn is a software packaging system developed in 2016 by Facebook for the Node.js JavaScript runtime environment. An alternative to the npm package manager.',
  },
];

router.get('/', (req, res) => res.send(skills));

module.exports = router;
