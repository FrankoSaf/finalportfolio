export const projects = [
  {
    name: 'Lazy Devs',
    links: [
      'https://github.com/FrankoSaf/codeauthgen',
      'https://lazydevs.onrender.com/',
    ],
    description:
      'MERN app created for beginner developers, so they can easily create login and signup form, and connect React to Express. User can with few clicks create MERN stack authentication boilerplates, which are downloadable and easy to understand',
    process:
      'App is created using Express, React and MongoDB. Authentication and authorization is created with PassportJS, so the user can login with Github and Google. In first version it is a MERN Stack app, but in the future I want to optimize app for more frameworks, databases and programming languages',
    technologies: [
      'React',
      'HTML',
      'CSS',
      'PassportJS',
      'Styled Components',
      'Express',
      'MongoDB',
    ],
  },
  {
    name: 'Foodridge',
    links: [
      'https://github.com/FrankoSaf/foodridge',
      'https://heroic-torrone-0d3037.netlify.app/',
    ],
    description:
      'Simple app that enables the user to find recipes based on ingredients. User enters ingredients that he has in fridge. If app finds a recipe that has exact ingredient, it will show it to the user. If not, it will show the user recipe and up to 3 ingredients that user need to buy',
    process:
      'App is built with Vite.js React template, it is based on Spoonacular API. App has 150 calls to API, in case it is not working, feel free to contact me, and I will give you another API. This is the first version.',
    technologies: [
      'React',
      'HTML',
      'CSS',
      'Styled Components',
      'Spoonacular API',
    ],
  },
  {
    name: 'Retro Portfolio',
    links: [
      'https://github.com/FrankoSaf/retroportfolio',
      'https://retroportfolio.onrender.com/',
    ],
    description: 'My previous portfolio, mainly created for desktop devices',
    process:
      "I created this portfolio to showcase my React and CSS skills, but due to specific design of it (Arcade game machine) I didn't want to use it as my portfolio. It has few functionalities, like joystick movement with keyboard arrows, that are not available in mobile version. In the near future, I want to add few retro games to it",
    technologies: ['React', 'HTML', 'CSS', 'SaSS'],
  },
];
