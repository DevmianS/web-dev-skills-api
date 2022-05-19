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
    stacks: ['frontend', 'backend'],
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
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F9.svg?alt=media&token=9392c50a-503f-453a-bed6-50c2af554954',
    names: ['yarn'],
    web: ['https://yarnpkg.com/'],
    stacks: ['frontend', 'backend'],
    description:
      'Yarn is a software packaging system developed in 2016 by Facebook for the Node.js JavaScript runtime environment. An alternative to the npm package manager.',
  },
  {
    id: 10,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F10.svg?alt=media&token=60e73ef9-21b6-483b-9814-73f523f14d90',
    names: ['BEM'],
    web: [
      'https://en.bem.info/methodology/css/',
      'http://getbem.com/introduction/',
    ],
    stacks: ['frontend'],
    description:
      'The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS.',
  },
  {
    id: 11,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F2.svg?alt=media&token=9faede00-011e-4c0a-b474-3308856fc65a',
    names: ['OOCSS'],
    web: ['https://dev.to/nouran96/oocss-methodology-92d'],
    stacks: ['frontend'],
    description:
      'Object-oriented CSS is a CSS methodology developed and promoted by Nicole Sullivan. The focus of OOCSS is the idea of treating page elements as objects, giving all these objects classes, treating objects’ classes as single entities in style sheets, and taking it from there.',
  },
  {
    id: 12,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F2.svg?alt=media&token=9faede00-011e-4c0a-b474-3308856fc65a',
    names: ['SMACSS'],
    web: ['http://smacss.com/'],
    stacks: ['frontend'],
    description:
      'SMACSS is a series of rules for categorizing CSS rulesets in order to make the CSS codebase more organized, clean, scalable, and modular.',
  },
  {
    id: 13,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F13.svg?alt=media&token=b6d7fd70-1d36-4a4c-a803-dae632cee1fe',
    names: ['Sass'],
    web: ['https://sass-lang.com/'],
    stacks: ['frontend'],
    description:
      'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. ',
  },
  {
    id: 14,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F14.svg?alt=media&token=9dd28a54-4aee-44b4-866f-fb5c96a52775',
    names: ['PostCSS'],
    web: ['https://postcss.org/'],
    stacks: ['frontend'],
    description:
      'PostCSS is a software development tool that uses JavaScript-based plugins to automate routine CSS operations. ',
  },
  {
    id: 15,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F15.svg?alt=media&token=0b165668-f5d1-48bf-9aff-d14fb1c7fa7c',
    names: ['LessCSS'],
    web: ['https://lesscss.org/'],
    stacks: ['frontend'],
    description:
      'Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and run on the client side or server side.',
  },
  {
    id: 16,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F8.svg?alt=media&token=fc82fdf8-84e6-4933-ac1f-61166b27b1c9',
    names: ['npm scripts'],
    web: ['https://docs.npmjs.com/cli/v8/using-npm/scripts'],
    stacks: ['frontend', 'backend'],
    description:
      'The "scripts" property of your package.json file supports a number of built-in scripts and their preset life cycle events as well as arbitrary scripts.',
  },
  {
    id: 17,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F17.svg?alt=media&token=b37fbac5-9cb5-4a97-874f-096f491bd4ee',
    names: ['Webpack'],
    web: ['https://webpack.js.org/'],
    stacks: ['frontend', 'backend'],
    description:
      'Webpack is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.',
  },
  {
    id: 18,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F18.svg?alt=media&token=ff58c0fc-a70b-44b8-ab7d-1c8e86d8dd0c',
    names: ['esbuild'],
    web: ['https://esbuild.github.io/'],
    stacks: ['frontend', 'backend'],
    description:
      'esbuild is a JavaScript bundler and minifier.  It packages up JavaScript and TypeScript code for distribution on the web.',
  },
  {
    id: 19,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F19.svg?alt=media&token=954107d9-05d8-4bf6-a50d-dc7712668dff',
    names: ['Rollup'],
    web: ['https://rollupjs.org/guide/en/'],
    stacks: ['frontend', 'backend'],
    description:
      'Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.',
  },
  {
    id: 20,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F20.svg?alt=media&token=0ab3fe5b-7b7f-4e83-89ba-ca73bb9815d3',
    names: ['Parcel'],
    web: ['https://parceljs.org/'],
    stacks: ['frontend', 'backend'],
    description:
      'Parcel combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.',
  },
  {
    id: 21,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F22.svg?alt=media&token=f9fbfc38-d1ff-4029-b1bc-ceaa5e7626a9',
    names: ['Vite'],
    web: ['https://vitejs.dev/'],
    stacks: ['frontend', 'backend'],
    description:
      'Pre-configured Rollup build with multi-page and library mode support. Universal Plugins. Rollup-superset plugin interface shared between dev and build.',
  },
  {
    id: 22,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F23.svg?alt=media&token=47cb1ff6-daeb-4846-90f4-47d5b50829c7',
    names: ['Styled Components'],
    web: ['https://styled-components.com/'],
    stacks: ['frontend'],
    description:
      'Styled Components lets you use actual CSS syntax inside your components. Styled Components is a variant on “CSS-in-JS”—which solves many of the problems with traditional CSS.',
  },
  {
    id: 23,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F2.svg?alt=media&token=9faede00-011e-4c0a-b474-3308856fc65a',
    names: ['CSS Modules'],
    web: ['https://github.com/css-modules/css-modules'],
    stacks: ['frontend'],
    description:
      'A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. ',
  },
  {
    id: 24,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F26.svg?alt=media&token=f1bef2b4-4b6a-42c8-bebd-919d96a98713',
    names: ['Styled JSX'],
    web: ['https://github.com/vercel/styled-jsx'],
    stacks: ['frontend'],
    description:
      'Full, scoped and component-friendly CSS support for JSX (rendered on the server or the client).',
  },
  {
    id: 25,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F25.png?alt=media&token=3452bd99-72ad-4276-874a-23df3e2a1abf',
    names: ['Emotion'],
    web: ['https://emotion.sh/docs/introduction'],
    stacks: ['frontend'],
    description:
      'Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.',
  },
  {
    id: 26,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F26.svg?alt=media&token=f1bef2b4-4b6a-42c8-bebd-919d96a98713',
    names: ['React'],
    web: ['https://reactjs.org/'],
    stacks: ['frontend'],
    description:
      'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
  },
  {
    id: 27,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F27.svg?alt=media&token=03839ee6-dbb5-415b-b47e-141b9e3d2c91',
    names: ['Redux'],
    web: ['https://redux.js.org/'],
    stacks: ['frontend'],
    description:
      'Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. ',
  },
  {
    id: 28,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F28.svg?alt=media&token=407d0ef0-fc06-432e-8e95-321703126ddc',
    names: ['MobX'],
    web: ['https://mobx.js.org/'],
    stacks: ['frontend'],
    description:
      'MobX is unopinionated and allows you to manage your application state outside of any UI framework. ',
  },
  {
    id: 29,
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F29.svg?alt=media&token=8f675e25-72d2-45e8-aa21-b7a65236e0f4',
    names: ['Recoil'],
    web: ['https://recoiljs.org/'],
    stacks: ['frontend'],
    description:
      'Recoil is a state management library for React, so you need to have React installed and running to use Recoil.',
  },
];

router.get('/', (req, res) => res.send(skills));

module.exports = router;
