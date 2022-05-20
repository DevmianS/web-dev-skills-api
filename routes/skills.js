var express = require('express');

const router = express.Router();

const skills = [
  {
    id: 0,
    names: ['DUMMY'],
    stacks: ['frontend'],
    description: 'description text',
    icon: 'url',
    web: ['link1', 'link2'],
  },
  {
    id: 1,
    names: ['HTML'],
    stacks: ['frontend'],
    description:
      'HTML (HyperText Markup Language) is the code that is used to structure a web page and its content.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F1.svg?alt=media&token=35799b72-fe80-44bc-a3fb-5816fa12b5da',
    web: [
      'https://dev.w3.org/html5/html-author/',
      'https://developer.mozilla.org/en-US/docs/Web/HTML',
    ],
  },
  {
    id: 2,
    names: ['CSS'],
    stacks: ['frontend'],
    description:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F2.svg?alt=media&token=9faede00-011e-4c0a-b474-3308856fc65a',
    web: ['https://www.w3.org/Style/CSS/specs.en.html'],
  },
  {
    id: 3,
    names: ['JavaScript'],
    stacks: ['frontend', 'backend'],
    description:
      'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F3.svg?alt=media&token=833e8a59-30eb-499b-8de9-0ddc81c6bda2',
    web: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
  },
  {
    id: 4,
    names: ['Git'],
    stacks: ['frontend', 'backend'],
    description:
      'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F4.svg?alt=media&token=1614f884-6d32-47e0-a736-38b5176c7bde',
    web: ['https://git-scm.com/'],
  },
  {
    id: 5,
    names: ['GitHub'],
    stacks: ['frontend', 'backend'],
    description:
      'GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F5.svg?alt=media&token=a49da092-9ba7-494c-b622-0f174f7f0123',
    web: ['https://github.com/'],
  },
  {
    id: 6,
    names: ['GitLab'],
    stacks: ['frontend', 'backend'],
    description:
      'GitLab Inc. is the open-core company that provides GitLab, the DevOps software that combines the ability to develop, secure, and operate software in a single application.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F6.svg?alt=media&token=4f53c2f8-d6b3-4285-b960-b55121ee145c',
    web: ['https://about.gitlab.com/'],
  },
  {
    id: 7,
    names: ['BitBucket'],
    stacks: ['frontend', 'backend'],
    description:
      'Bitbucket is a Git-based source code repository hosting service owned by Atlassian.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F7.svg?alt=media&token=e804ddae-442c-4946-9e5d-f456458ff0a2',
    web: ['https://bitbucket.org/'],
  },
  {
    id: 8,
    names: ['npm'],
    stacks: ['frontend', 'backend'],
    description:
      'npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F8.svg?alt=media&token=fc82fdf8-84e6-4933-ac1f-61166b27b1c9',
    web: ['https://www.npmjs.com/'],
  },
  {
    id: 9,
    names: ['yarn'],
    stacks: ['frontend', 'backend'],
    description:
      'Yarn is a software packaging system developed in 2016 by Facebook for the Node.js JavaScript runtime environment. An alternative to the npm package manager.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F9.svg?alt=media&token=9392c50a-503f-453a-bed6-50c2af554954',
    web: ['https://yarnpkg.com/'],
  },
  {
    id: 10,
    names: ['BEM'],
    stacks: ['frontend'],
    description:
      'The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F10.svg?alt=media&token=60e73ef9-21b6-483b-9814-73f523f14d90',
    web: [
      'https://en.bem.info/methodology/css/',
      'http://getbem.com/introduction/',
    ],
  },
  {
    id: 11,
    names: ['OOCSS'],
    stacks: ['frontend'],
    description:
      'Object-oriented CSS is a CSS methodology developed and promoted by Nicole Sullivan. The focus of OOCSS is the idea of treating page elements as objects, giving all these objects classes, treating objects’ classes as single entities in style sheets, and taking it from there.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F2.svg?alt=media&token=9faede00-011e-4c0a-b474-3308856fc65a',
    web: ['https://dev.to/nouran96/oocss-methodology-92d'],
  },
  {
    id: 12,
    names: ['SMACSS'],
    stacks: ['frontend'],
    description:
      'SMACSS is a series of rules for categorizing CSS rulesets in order to make the CSS codebase more organized, clean, scalable, and modular.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F2.svg?alt=media&token=9faede00-011e-4c0a-b474-3308856fc65a',
    web: ['http://smacss.com/'],
  },
  {
    id: 13,
    names: ['Sass'],
    stacks: ['frontend'],
    description:
      'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. ',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F13.svg?alt=media&token=b6d7fd70-1d36-4a4c-a803-dae632cee1fe',
    web: ['https://sass-lang.com/'],
  },
  {
    id: 14,
    names: ['PostCSS'],
    stacks: ['frontend'],
    description:
      'PostCSS is a software development tool that uses JavaScript-based plugins to automate routine CSS operations. ',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F14.svg?alt=media&token=9dd28a54-4aee-44b4-866f-fb5c96a52775',
    web: ['https://postcss.org/'],
  },
  {
    id: 15,
    names: ['LessCSS'],
    stacks: ['frontend'],
    description:
      'Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and run on the client side or server side.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F15.svg?alt=media&token=0b165668-f5d1-48bf-9aff-d14fb1c7fa7c',
    web: ['https://lesscss.org/'],
  },
  {
    id: 16,
    names: ['npm scripts'],
    stacks: ['frontend', 'backend'],
    description:
      'The "scripts" property of your package.json file supports a number of built-in scripts and their preset life cycle events as well as arbitrary scripts.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F8.svg?alt=media&token=fc82fdf8-84e6-4933-ac1f-61166b27b1c9',
    web: ['https://docs.npmjs.com/cli/v8/using-npm/scripts'],
  },
  {
    id: 17,
    names: ['Webpack'],
    stacks: ['frontend', 'backend'],
    description:
      'Webpack is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F17.svg?alt=media&token=b37fbac5-9cb5-4a97-874f-096f491bd4ee',
    web: ['https://webpack.js.org/'],
  },
  {
    id: 18,
    names: ['esbuild'],
    stacks: ['frontend', 'backend'],
    description:
      'esbuild is a JavaScript bundler and minifier.  It packages up JavaScript and TypeScript code for distribution on the web.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F18.svg?alt=media&token=ff58c0fc-a70b-44b8-ab7d-1c8e86d8dd0c',
    web: ['https://esbuild.github.io/'],
  },
  {
    id: 19,
    names: ['Rollup'],
    stacks: ['frontend', 'backend'],
    description:
      'Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F19.svg?alt=media&token=954107d9-05d8-4bf6-a50d-dc7712668dff',
    web: ['https://rollupjs.org/guide/en/'],
  },
  {
    id: 20,
    names: ['Parcel'],
    stacks: ['frontend', 'backend'],
    description:
      'Parcel combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F20.svg?alt=media&token=0ab3fe5b-7b7f-4e83-89ba-ca73bb9815d3',
    web: ['https://parceljs.org/'],
  },
  {
    id: 21,
    names: ['Vite'],
    stacks: ['frontend', 'backend'],
    description:
      'Pre-configured Rollup build with multi-page and library mode support. Universal Plugins. Rollup-superset plugin interface shared between dev and build.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F22.svg?alt=media&token=f9fbfc38-d1ff-4029-b1bc-ceaa5e7626a9',
    web: ['https://vitejs.dev/'],
  },
  {
    id: 22,
    names: ['Styled Components'],
    stacks: ['frontend'],
    description:
      'Styled Components lets you use actual CSS syntax inside your components. Styled Components is a variant on “CSS-in-JS”—which solves many of the problems with traditional CSS.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F23.svg?alt=media&token=47cb1ff6-daeb-4846-90f4-47d5b50829c7',
    web: ['https://styled-components.com/'],
  },
  {
    id: 23,
    names: ['CSS Modules'],
    stacks: ['frontend'],
    description:
      'A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. ',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F2.svg?alt=media&token=9faede00-011e-4c0a-b474-3308856fc65a',
    web: ['https://github.com/css-modules/css-modules'],
  },
  {
    id: 24,
    names: ['Styled JSX'],
    stacks: ['frontend'],
    description:
      'Full, scoped and component-friendly CSS support for JSX (rendered on the server or the client).',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F26.svg?alt=media&token=f1bef2b4-4b6a-42c8-bebd-919d96a98713',
    web: ['https://github.com/vercel/styled-jsx'],
  },
  {
    id: 25,
    names: ['Emotion'],
    stacks: ['frontend'],
    description:
      'Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F25.png?alt=media&token=3452bd99-72ad-4276-874a-23df3e2a1abf',
    web: ['https://emotion.sh/docs/introduction'],
  },
  {
    id: 26,
    names: ['React'],
    stacks: ['frontend'],
    description:
      'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F26.svg?alt=media&token=f1bef2b4-4b6a-42c8-bebd-919d96a98713',
    web: ['https://reactjs.org/'],
  },
  {
    id: 27,
    names: ['Redux'],
    stacks: ['frontend'],
    description:
      'Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. ',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F27.svg?alt=media&token=03839ee6-dbb5-415b-b47e-141b9e3d2c91',
    web: ['https://redux.js.org/'],
  },
  {
    id: 28,
    names: ['MobX'],
    stacks: ['frontend'],
    description:
      'MobX is unopinionated and allows you to manage your application state outside of any UI framework. ',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F28.svg?alt=media&token=407d0ef0-fc06-432e-8e95-321703126ddc',
    web: ['https://mobx.js.org/'],
  },
  {
    id: 29,
    names: ['Recoil'],
    stacks: ['frontend'],
    description:
      'Recoil is a state management library for React, so you need to have React installed and running to use Recoil.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F29.svg?alt=media&token=8f675e25-72d2-45e8-aa21-b7a65236e0f4',
    web: ['https://recoiljs.org/'],
  },
  {
    id: 30,
    names: ['Angular'],
    stacks: ['frontend'],
    description:
      'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F30.svg?alt=media&token=6ccf93ee-d12a-4f38-acb2-9cc45c11c062',
    web: ['https://angular.io/'],
  },
  {
    id: 31,
    names: ['RxJS'],
    stacks: ['frontend'],
    description:
      'RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F31.svg?alt=media&token=276aefdc-b512-4010-9bd8-1367f024d16a',
    web: ['https://rxjs.dev/'],
  },
  {
    id: 32,
    names: ['NgRx'],
    stacks: ['frontend'],
    description:
      'NgRx Store provides reactive state management for Angular apps inspired by Redux.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F32.svg?alt=media&token=6a3994ce-5eda-46c5-8be0-17ad11ec954f',
    web: ['https://ngrx.io/'],
  },
  {
    id: 33,
    names: ['Vue.js'],
    stacks: ['frontend'],
    description:
      'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F33.svg?alt=media&token=d4dbf17c-086c-46eb-b651-0b0643511bb3',
    web: ['https://vuejs.org/'],
  },
  {
    id: 34,
    names: ['VueX'],
    stacks: ['frontend'],
    description:
      'Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F33.svg?alt=media&token=d4dbf17c-086c-46eb-b651-0b0643511bb3',
    web: ['https://vuejs.org/'],
  },
  {
    id: 35,
    names: ['Bootstrap'],
    stacks: ['frontend'],
    description:
      'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F35.svg?alt=media&token=bb3955aa-e5da-4282-b12e-3f2749822819',
    web: ['https://getbootstrap.com/'],
  },
  {
    id: 36,
    names: ['Bulma'],
    stacks: ['frontend'],
    description:
      'Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F36.svg?alt=media&token=18d153ff-ed84-4d98-b774-e57abeb09b7d',
    web: ['https://bulma.io/'],
  },
  {
    id: 37,
    names: ['Tailwind CSS'],
    stacks: ['frontend'],
    description:
      'Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. ',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F37.svg?alt=media&token=32e9551f-3247-4dbc-8255-07ffb29c6dee',
    web: ['https://tailwindcss.com/'],
  },
  {
    id: 38,
    names: ['Chakra UI'],
    stacks: ['frontend'],
    description:
      'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F38.svg?alt=media&token=54037b03-6d1d-440e-8b56-0e05d2cfbec7',
    web: ['https://chakra-ui.com/'],
  },
  {
    id: 39,
    names: ['Material UI'],
    stacks: ['frontend'],
    description:
      'MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F39.svg?alt=media&token=82e03367-bd69-4086-a256-2d78c903d3c9',
    web: ['https://mui.com/'],
  },
  {
    id: 40,
    names: ['Radix UI'],
    stacks: ['frontend'],
    description:
      'Unstyled, accessible components for building high‑quality design systems and web apps in React.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F40.svg?alt=media&token=325602da-37bc-4c10-a8dd-557e0cbf0bf0',
    web: ['https://www.radix-ui.com/'],
  },
  {
    id: 41,
    names: ['Jest'],
    stacks: ['frontend'],
    description:
      'Jest is a JavaScript testing framework maintained by Meta, designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js and Svelte.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F41.svg?alt=media&token=4052c1ab-42ed-45a0-be4b-c214991559ac',
    web: ['https://jestjs.io/'],
  },
  {
    id: 42,
    names: ['React Testing Library'],
    stacks: ['frontend'],
    description:
      'React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F42.png?alt=media&token=8712b653-f6a7-4bd6-80c6-aa411a5b6bc5',
    web: ['https://testing-library.com/docs/react-testing-library/intro/'],
  },
  {
    id: 43,
    names: ['Cypress'],
    stacks: ['frontend'],
    description:
      'Cypress is the new standard in front-end testing that every developer and QA engineer needs. programmer.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F43.svg?alt=media&token=8bb30306-0bd4-41bd-a316-433f3af555f6',
    web: ['https://www.cypress.io/'],
  },
  {
    id: 44,
    names: ['Enzyme'],
    stacks: ['frontend'],
    description:
      "Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.",
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F26.svg?alt=media&token=f1bef2b4-4b6a-42c8-bebd-919d96a98713',
    web: ['https://enzymejs.github.io/enzyme/'],
  },
  {
    id: 45,
    names: ['Mocha'],
    stacks: ['frontend'],
    description:
      'Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F45.svg?alt=media&token=5fe4d3b6-accf-4311-b7c5-f5da0685487a',
    web: ['https://mochajs.org/'],
  },
  {
    id: 46,
    names: ['Chai'],
    stacks: ['frontend'],
    description:
      'Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F46.svg?alt=media&token=f1f67ed8-eb70-408a-8e03-52f6e0ee0886',
    web: ['https://www.chaijs.com/'],
  },
  {
    id: 47,
    names: ['Ava'],
    stacks: ['frontend', 'backend'],
    description:
      'AVA is a test runner for Node.js with a concise API, detailed error output, embrace of new language features and process isolation that lets you develop with confidence.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F47.svg?alt=media&token=d0f417b9-df3c-4c97-92e7-8a1b5e12e4f0',
    web: ['https://github.com/avajs/ava'],
  },
  {
    id: 48,
    names: ['Jasmine'],
    stacks: ['frontend'],
    description:
      'Jasmine is an open-source testing framework for JavaScript. It aims to run on any JavaScript-enabled platform, to not intrude on the application nor the IDE, and to have easy-to-read syntax.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F47.svg?alt=media&token=d0f417b9-df3c-4c97-92e7-8a1b5e12e4f0',
    web: ['https://jasmine.github.io/'],
  },
  {
    id: 49,
    names: ['TypeScript'],
    stacks: ['frontend', 'backend'],
    description:
      'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F48.svg?alt=media&token=e41d5fe4-6b23-46da-a911-11cad529eac6',
    web: ['https://www.typescriptlang.org/'],
  },
  {
    id: 50,
    names: ['Flow'],
    stacks: ['frontend'],
    description:
      'A JavaScript library providing multiple simultaneous, stable, fault-tolerant and resumable/restartable file uploads via the HTML5 File API.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F50.svg?alt=media&token=68c039a3-f0b1-4b73-bd57-db3097918132',
    web: ['https://flow.org/'],
  },
  {
    id: 51,
    names: ['Next.js'],
    stacks: ['frontend'],
    description:
      'Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F51.svg?alt=media&token=abe40cff-7c49-47fb-839b-628752de7902',
    web: ['https://nextjs.org/'],
  },
  {
    id: 52,
    names: ['After.js'],
    stacks: ['frontend'],
    description:
      'Next.js-like framework for server-rendered React apps built with React Router.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F52.png?alt=media&token=bbcb1469-00ba-442c-984b-84663ee7d696',
    web: ['https://github.com/jaredpalmer/after.js'],
  },
  {
    id: 53,
    names: ['Universal.js'],
    stacks: ['frontend'],
    description:
      'A universal Javascript starter kit inc. React, Redux, Redux Dev Tools, Universal Redux Router, CSS Modules, hot module reloading, Babel for ES2015+ and ESLint.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F30.svg?alt=media&token=6ccf93ee-d12a-4f38-acb2-9cc45c11c062',
    web: ['https://github.com/colinmeinke/universal-js'],
  },
  {
    id: 54,
    names: ['Nuxt.js'],
    stacks: ['frontend'],
    description:
      'Nuxt.js is a free and open source JavaScript library based on Vue.js, Node.js, Webpack and Babel.js. Nuxt is inspired by Next.js, which is a framework of similar purpose, based on React.js. ',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F54.svg?alt=media&token=eb0f77c1-6d5e-45a5-88bf-e1ba8879356f',
    web: ['https://nuxtjs.org/'],
  },
  {
    id: 55,
    names: ['GraphQL'],
    stacks: ['frontend'],
    description:
      'GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F55.svg?alt=media&token=024475ef-6fda-4af1-bc26-fb0c433f9782',
    web: ['https://graphql.org/'],
  },
  {
    id: 56,
    names: ['Apollo'],
    stacks: ['frontend'],
    description:
      'A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F56.svg?alt=media&token=6b30ecbf-c77b-4c68-ab1c-56a7e7604b3f',
    web: ['https://www.apollographql.com/'],
  },
  {
    id: 57,
    names: ['Relay Modern'],
    stacks: ['frontend'],
    description:
      'Relay is designed for high performance at any scale. Relay keeps management of data-fetching easy, whether your app has tens, hundreds, or thousands of components. And thanks to Relay’s incremental compiler, it keeps your iteration speed fast even as your app grows.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F57.svg?alt=media&token=3975b3ac-6dee-470e-ad8e-81ddc644fc61',
    web: ['https://relay.dev/'],
  },
  {
    id: 58,
    names: ['GatsbyJS'],
    stacks: ['frontend'],
    description:
      'Gatsby is the fast and flexible framework that makes building websites with any CMS, API, or database fun again.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F58.svg?alt=media&token=28cedc53-faef-4025-9ed2-a6746fdd0dba',
    web: ['https://www.gatsbyjs.com/'],
  },
  {
    id: 59,
    names: ['VuePress'],
    stacks: ['frontend'],
    description:
      'VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F59.png?alt=media&token=46f9cacd-d2e0-45e9-9b35-4aa3157b4a7e',
    web: ['https://vuepress.vuejs.org/'],
  },
  {
    id: 60,
    names: ['Jekyll'],
    stacks: ['frontend'],
    description:
      'Jekyll is a simple, blog-aware, static site generator perfect for personal, project, or organization sites.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F60.svg?alt=media&token=5552ad3d-82bd-4912-9bef-9239a70a20df',
    web: ['https://jekyllrb.com/'],
  },
  {
    id: 61,
    names: ['Hugo'],
    stacks: ['frontend'],
    description:
      'Hugo is one of the most popular open-source static site generators.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F61.svg?alt=media&token=d2360f18-effb-4a73-ab03-76c25e18f082',
    web: ['https://gohugo.io/'],
  },
  {
    id: 62,
    names: ['Gridsome'],
    stacks: ['frontend'],
    description:
      'Gridsome makes it easy for developers to build static generated websites & apps that are fast by default.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F62.svg?alt=media&token=a52e3f76-92c5-45ca-83fc-f69e7bdb4a58',
    web: ['https://gridsome.org/'],
  },
  {
    id: 63,
    names: ['Eleventy'],
    stacks: ['frontend'],
    description:
      'Eleventy was created to be a JavaScript alternative to Jekyll. It’s zero-config by default but has flexible configuration options. Eleventy works with your project’s existing directory structure.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F63.svg?alt=media&token=1ac8a652-5d8c-4b33-96aa-5be394e315c8',
    web: ['https://www.11ty.dev/'],
  },
  {
    id: 64,
    names: ['React Native'],
    stacks: ['frontend'],
    description:
      'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F26.svg?alt=media&token=f1bef2b4-4b6a-42c8-bebd-919d96a98713',
    web: ['https://reactnative.dev/'],
  },
  {
    id: 65,
    names: ['NativeScript'],
    stacks: ['frontend'],
    description:
      'NativeScript is an open-source framework to develop mobile apps on the Apple iOS and Android platforms.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F65.svg?alt=media&token=f4dce789-d331-467d-9dfb-b1efe7b8d2fd',
    web: ['https://nativescript.org/'],
  },
  {
    id: 66,
    names: ['Flutter'],
    stacks: ['frontend'],
    description:
      'Flutter is an open-source UI software development kit created by Google.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F66.svg?alt=media&token=6858e891-ec93-461f-9fe9-13df55320c37',
    web: ['https://flutter.dev/'],
  },
  {
    id: 67,
    names: ['Ionic'],
    stacks: ['frontend'],
    description:
      'An open source mobile toolkit for building high quality, cross-platform native and web app experiences.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F67.svg?alt=media&token=80c23e68-2287-4a67-97f8-83de5e680f10',
    web: ['https://ionicframework.com/'],
  },
  {
    id: 68,
    names: ['Electron'],
    stacks: ['frontend'],
    description:
      'Electron is a free and open-source software framework developed and maintained by GitHub. It allows for the development of desktop GUI applications using web technologies: it combines the Chromium rendering engine and the Node.js runtime.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F68.svg?alt=media&token=486852e8-9a55-4ffd-8b69-b1a03d0fdc3a',
    web: ['https://www.electronjs.org/'],
  },
  {
    id: 69,
    names: ['Proton Native'],
    stacks: ['frontend'],
    description:
      'Proton Native does the same to desktop that React Native did to mobile. Build cross-platform apps for the desktop, all while never leaving the React eco-system.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F69.svg?alt=media&token=04517525-3121-4118-a49e-da45da55da39',
    web: ['https://proton-native.js.org/#/'],
  },
];

router.get('/', (req, res) => res.send(skills));

module.exports = router;
