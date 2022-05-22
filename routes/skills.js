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
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fgit.svg?alt=media&token=6c9c3a4c-b2c7-4e88-9d5d-052e7d0ac030',
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
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fless.svg?alt=media&token=eebbae10-35bf-464e-ac6b-38303d4864b6',
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
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fbootstrap.svg?alt=media&token=050107d4-ab63-4eee-a222-24b98f1e378c',
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
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F48.svg?alt=media&token=e41d5fe4-6b23-46da-a911-11cad529eac6',
    web: ['https://jasmine.github.io/'],
  },
  {
    id: 49,
    names: ['TypeScript'],
    stacks: ['frontend', 'backend'],
    description:
      'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Ftypescript.svg?alt=media&token=d4c4a509-f6f4-4278-937d-428c9672a562',
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
  {
    id: 70,
    names: ['WebAssembly', 'Wasm'],
    stacks: ['frontend', 'backend'],
    description:
      'WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fwebassembly.svg?alt=media&token=f1447473-87ac-494d-8b90-6a0815d35db6',
    web: ['https://webassembly.org/'],
  },
  {
    id: 71,
    names: ['jQuery'],
    stacks: ['frontend'],
    description:
      'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fjquery.svg?alt=media&token=de9d389f-8475-4656-b7a1-f95a232ed95f',
    web: ['https://jquery.com/'],
  },
  {
    id: 72,
    names: ['Rust'],
    stacks: ['backend'],
    description:
      'Rust is a multi-paradigm, general-purpose programming language designed for performance and safety, especially safe concurrency.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Frust.svg?alt=media&token=6557fca1-129d-4a6a-a247-90ee97aa4237',
    web: ['https://www.rust-lang.org/'],
  },
  {
    id: 73,
    names: ['Go'],
    stacks: ['backend'],
    description:
      'Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fgo.svg?alt=media&token=da52d605-fedd-4a3c-b087-e8c03a005122',
    web: ['https://go.dev/'],
  },
  {
    id: 74,
    names: ['Java'],
    stacks: ['backend'],
    description:
      'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fjava.svg?alt=media&token=6e1658f8-c8ac-442b-932f-20873e8865df',
    web: ['https://www.java.com/'],
  },
  {
    id: 75,
    names: ['C#'],
    stacks: ['backend'],
    description:
      'C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fcsharp.svg?alt=media&token=85a0ee2c-7b50-4850-8565-8aedaaa6cebf',
    web: ['https://docs.microsoft.com/en-us/dotnet/csharp/'],
  },
  {
    id: 76,
    names: ['PHP'],
    stacks: ['backend'],
    description:
      'PHP is a general-purpose scripting language geared toward web development.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fphp.svg?alt=media&token=2f562912-08d2-4891-bee3-d662eca23de0',
    web: ['https://www.php.net/'],
  },
  {
    id: 77,
    names: ['Python'],
    stacks: ['backend'],
    description:
      'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fpython.svg?alt=media&token=227bfe3e-0567-4229-b5c0-45e5f5fad776',
    web: ['https://www.python.org/'],
  },
  {
    id: 78,
    names: ['Ruby'],
    stacks: ['backend'],
    description:
      'Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fruby.svg?alt=media&token=38576666-5f77-4767-9eca-1e307df25b13',
    web: ['https://www.ruby-lang.org/en/'],
  },
  {
    id: 79,
    names: ['PostgreSQL'],
    stacks: ['backend'],
    description:
      'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fpostgresql.svg?alt=media&token=9f537051-49e8-4365-9d56-1017cf076996',
    web: ['https://www.postgresql.org/'],
  },
  {
    id: 80,
    names: ['MySQL'],
    stacks: ['backend'],
    description:
      'MySQL is an open-source relational database management system.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fmysql.svg?alt=media&token=dcfeffc7-9d29-4b43-add1-26ab79ffd9a4',
    web: ['https://www.mysql.com/'],
  },
  {
    id: 81,
    names: ['MariaDB'],
    stacks: ['backend'],
    description:
      'MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system, intended to remain free and open-source software under the GNU General Public License.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fmariadb.svg?alt=media&token=51fdce76-ec03-4f5a-b8a3-23f2cf9bdf7f',
    web: ['https://mariadb.org/'],
  },
  {
    id: 82,
    names: ['Microsoft SQL Server', 'MS SQL'],
    stacks: ['backend'],
    description:
      'Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fmssql.svg?alt=media&token=2a60115e-f767-4b79-beec-cf0fb698bfc4',
    web: ['https://www.microsoft.com/en-ca/sql-server/'],
  },
  {
    id: 83,
    names: ['Oracle Database', 'Oracle DBMS'],
    stacks: ['backend'],
    description:
      'Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing, data warehousing and mixed database workloads.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Foracle.svg?alt=media&token=c38a3808-d8ff-4dfa-9955-0e96618c2f5a',
    web: ['https://www.oracle.com/database/'],
  },
  {
    id: 84,
    names: ['MongoDB'],
    stacks: ['backend'],
    description:
      'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fmongodb.svg?alt=media&token=cbf410fa-8899-43a6-9b8f-2d5ad08883cc',
    web: ['https://www.mongodb.com/'],
  },
  {
    id: 85,
    names: ['Apache Cassandra'],
    stacks: ['backend'],
    description:
      'Cassandra is a free and open-source, distributed, wide-column store, NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fcassandra.svg?alt=media&token=f54f9f56-a39a-49cd-9144-5a15b2417623',
    web: ['https://cassandra.apache.org/'],
  },
  {
    id: 86,
    names: ['InfluxDB'],
    stacks: ['backend'],
    description:
      'InfluxDB is an open-source time series database developed by the company InfluxData. It is written in the Go programming language for storage and retrieval of time series data in fields such as operations monitoring, application metrics, Internet of Things sensor data, and real-time analytics.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2FInfluxdb.svg?alt=media&token=56ae94dd-5396-43ff-a30c-48f9b9688f3c',
    web: ['https://www.influxdata.com/'],
  },
  {
    id: 87,
    names: ['Firebase'],
    stacks: ['backend'],
    description:
      'Firebase is a platform developed by Google for creating mobile and web applications.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Ffirebase.svg?alt=media&token=6e490cdf-7fa4-421e-bdfc-f6403cfe10f2',
    web: ['https://firebase.google.com/'],
  },
  {
    id: 88,
    names: ['Docker'],
    stacks: ['backend'],
    description:
      'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fdocker.svg?alt=media&token=0259994d-3de5-450c-b400-bacdf92a8a5c',
    web: ['https://docs.docker.com/'],
  },
  {
    id: 89,
    names: ['Nginx'],
    stacks: ['backend'],
    description:
      'Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fnginx.svg?alt=media&token=5b718204-caf2-4e4e-a56f-40c4e5fa59bb',
    web: ['https://nginx.org/'],
  },
  {
    id: 90,
    names: ['Apache HTTP Server'],
    stacks: ['backend'],
    description:
      'The Apache HTTP Server is a free and open-source cross-platform web server software, released under the terms of Apache License 2.0. Apache is developed and maintained by an open community of developers under the auspices of the Apache Software Foundation.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fapache.svg?alt=media&token=4b7aeb97-71fe-4019-8aec-3b7573e340f0',
    web: ['https://httpd.apache.org/'],
  },
  {
    id: 91,
    names: ['Caddy'],
    stacks: ['backend'],
    description:
      'The Caddy web server is an extensible, cross-platform, open-source web server written in Go. The name "Caddy" refers both to a helper for tedious tasks, and a way to organize multiple parts into a simplified system.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fcaddy.svg?alt=media&token=e5bf44b3-2fc2-434b-8270-4af7e82ee026',
    web: ['https://caddyserver.com/'],
  },
  {
    id: 92,
    names: ['Internet Information Services'],
    stacks: ['backend'],
    description:
      'Internet Information Services is an extensible web server software created by Microsoft for use with the Windows NT family. IIS supports HTTP, HTTP/2, HTTPS, FTP, FTPS, SMTP and NNTP. ',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fmsiis.png?alt=media&token=169b8c4e-8d0e-499f-b176-9da7c6bf7e94',
    web: ['https://www.iis.net/'],
  },
  {
    id: 93,
    names: ['WordPress'],
    stacks: ['frontend', 'backend'],
    description:
      'WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fwordpress.svg?alt=media&token=781a6c6b-1e65-4147-a617-d1bb341ca10c',
    web: ['https://wordpress.org/'],
  },
  {
    id: 94,
    names: ['Joomla'],
    stacks: ['frontend', 'backend'],
    description:
      'Joomla, also spelled Joomla! and sometimes abbreviated as J!, is a free and open-source content management system for publishing web content on websites. Web content applications include discussion forums, photo galleries, e-Commerce and user communities and numerous other web-based applications.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fjoomla.svg?alt=media&token=9e0a2ea6-7ffb-4d2e-a1bb-a71cf57dc76e',
    web: ['https://www.joomla.org/'],
  },
  {
    id: 95,
    names: ['PrestaShop'],
    stacks: ['frontend', 'backend'],
    description:
      'PrestaShop is a freemium, open source e-commerce platform. The software is published under the Open Software License. It is written in the PHP programming language with support for the MySQL database management system. It has a software dependency on the Symfony PHP framework.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fprestashop.svg?alt=media&token=2087886e-d214-4915-b7a7-64ba2fe15be9',
    web: ['https://www.prestashop.com/en'],
  },
  {
    id: 96,
    names: ['Drupal'],
    stacks: ['frontend', 'backend'],
    description:
      'Drupal is a free and open-source web content management system written in PHP and distributed under the GNU General Public License.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fdrupal.svg?alt=media&token=bf772631-609f-4b22-b60f-f481d89e0a71',
    web: ['https://www.drupal.org/'],
  },
  {
    id: 97,
    names: ['Stylus'],
    stacks: ['frontend'],
    description:
      'Stylus is a dynamic stylesheet preprocessor language that is compiled into Cascading Style Sheets (CSS).',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fstylus.svg?alt=media&token=74039d61-2d6a-46b8-9f7c-8e1b74b63441',
    web: ['https://stylus-lang.com/'],
  },
  {
    id: 98,
    names: ['Foundation'],
    stacks: ['frontend'],
    description:
      'Foundation is a free and open-source responsive front-end framework, providing a responsive grid and HTML and CSS UI components, templates, and code snippets, including typography, forms, buttons, navigation and other interface elements, as well as optional functionality provided by JavaScript extensions.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Ffoundation.svg?alt=media&token=054e2553-ee34-442f-b866-6b76632b93a0',
    web: ['https://get.foundation/'],
  },
  {
    id: 99,
    names: ['Ember.js'],
    stacks: ['frontend'],
    description:
      'Ember.js is an open-source JavaScript web framework, utilizing a component-service pattern. It allows developers to create scalable single-page web applications by incorporating common idioms, best practices, and patterns from other single-page-app ecosystem patterns into the framework.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Femberjs.svg?alt=media&token=0ca8dad3-4728-448f-9101-3706df37b77e',
    web: ['https://emberjs.com/'],
  },
  {
    id: 100,
    names: ['Karma'],
    stacks: ['frontend'],
    description:
      "The main goal for Karma is to bring a productive testing environment to developers. The environment being one where they don't have to set up loads of configurations, but rather a place where developers can just write the code and get instant feedback from their tests.",
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fkarma.svg?alt=media&token=effc9ae4-0c0f-469e-b403-e1ffbf5cdb26',
    web: ['https://karma-runner.github.io/latest/index.html'],
  },
  {
    id: 101,
    names: ['Gulp.js'],
    stacks: ['frontend'],
    description:
      'Gulp is an open-source JavaScript toolkit created by Eric Schoffstall used as a streaming build system in front-end web development.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fgulp.svg?alt=media&token=580137a4-7a9d-4767-b91f-587cef9e3116',
    web: ['https://gulpjs.com/'],
  },
  {
    id: 102,
    names: ['Grunt'],
    stacks: ['frontend'],
    description:
      'Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. It uses a command-line interface to run custom tasks defined in a file.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fgrunt.svg?alt=media&token=242579ed-a248-4c27-b7f3-709aa206de21',
    web: ['https://gruntjs.com/'],
  },
  {
    id: 103,
    names: ['Symfony'],
    stacks: ['backend'],
    description:
      'Symfony is a PHP web application framework and a set of reusable PHP components/libraries.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fsymfony2.svg?alt=media&token=150dfdef-e8c7-4dff-bb1b-104bca17deb1',
    web: ['https://symfony.com/'],
  },
  {
    id: 104,
    names: ['Laravel'],
    stacks: ['backend'],
    description:
      'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Flaravel.svg?alt=media&token=22dbc533-7921-4d3b-8185-ca96293a1bdd',
    web: ['https://laravel.com/'],
  },
  {
    id: 105,
    names: ['Spring'],
    stacks: ['backend'],
    description:
      "The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform.",
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fspring.svg?alt=media&token=67177657-3b6f-4343-94a6-35d8c5928dfa',
    web: ['https://spring.io/'],
  },
  {
    id: 106,
    names: ['Grails'],
    stacks: ['backend'],
    description:
      'Grails is an open source web application framework that uses the Apache Groovy programming language. It is intended to be a high-productivity framework by following the "coding by convention" paradigm, providing a stand-alone development environment and hiding much of the configuration detail from the developer.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fgrails.svg?alt=media&token=b8574c48-f53a-4c70-8ab6-41b76fbc18df',
    web: ['https://grails.org/'],
  },
  {
    id: 107,
    names: ['.NET Framework'],
    stacks: ['backend'],
    description:
      'The .NET Framework is a proprietary software framework developed by Microsoft that runs primarily on Microsoft Windows. It was the predominant implementation of the Common Language Infrastructure until being superseded by the cross-platform .NET project.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fnet.svg?alt=media&token=d3ed1089-f12a-495f-af3e-36ad4142436d',
    web: ['https://dotnet.microsoft.com/en-us/'],
  },
  {
    id: 108,
    names: ['Haskell'],
    stacks: ['backend'],
    description:
      'Haskell is a general-purpose, statically-typed, purely functional programming language with type inference and lazy evaluation. Designed for teaching, research and industrial applications, Haskell has pioneered a number of programming language features such as type classes, which enable type-safe operator overloading.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fhaskell.svg?alt=media&token=3cf863b9-54c3-4db9-9e89-33f2719e5db5',
    web: ['https://www.haskell.org/'],
  },
  {
    id: 109,
    names: ['Django'],
    stacks: ['backend'],
    description:
      'Django is a Python-based web framework, free and open-source, that follows the model–template–views architectural pattern.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fdjango.svg?alt=media&token=45fd777e-dfbb-43f8-bf58-5d77c5c9e84f',
    web: ['https://www.djangoproject.com/'],
  },
  {
    id: 110,
    names: ['Ruby on Rails'],
    stacks: ['backend'],
    description:
      'Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Frubyonrails.svg?alt=media&token=76ba8fac-6dcc-45c7-9a43-805def107b82',
    web: ['https://www.djangoproject.com/'],
  },
  {
    id: 111,
    names: ['Express.js'],
    stacks: ['backend'],
    description:
      'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fexpressjs.svg?alt=media&token=2d4aa396-a21f-4536-9951-bf80fed525e7',
    web: ['https://expressjs.com/'],
  },
  {
    id: 112,
    names: ['Socket.IO'],
    stacks: ['backend'],
    description:
      'Socket.IO is an event-driven JavaScript library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2Fsocketio.svg?alt=media&token=6bf9f86d-e298-4763-84b8-06987f12ee4e',
    web: ['https://socket.io/'],
  },
];

router.get('/', (req, res) => res.send(skills));

module.exports = router;
