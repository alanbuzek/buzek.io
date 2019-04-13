const projectsData = [
  {
    name: 'Masterlingo',
    description:
      'A full-fledged vocabulary flashcard web app with translations in 49 languages, spaced repetition and much more!',
    link: 'https://masterlingoapp.com',
    img: 'masterlingo.png',
    codeLink: null,
    techStack: [
      'React',
      'Redux',
      'Node',
      'Express',
      'MongoDB',
      'SASS',
      'Google Cloud Translate',
      'Microsoft Translate API',
      'OAuth 2.0',
      'PassportJS'
    ],
    status: 'Launched on March 6, 2019'
  },
  {
    name: 'Masterlingo Extension',
    description: 'A chrome extension enabling to access all functionality of the original app in any page of the web.',
    link: 'https://chrome.google.com/webstore/detail/masterlingo-learn-languag/fbfmjjebfpcefapmipcbckbdpfnjhfmj',
    img: 'masterlingoExtension.png',
    codeLink: null,
    techStack: ['Javascript (ES6+)', 'SASS', 'Webpack', 'OAuth 2.0', 'Chrome API'],
    status: 'Launched Beta on April 2, 2019'
  },
  {
    name: 'Taipei Travel App',
    description:
      'A web app mash-up showcasing the city of Taipei. Upcoming events, restaurants and more through 3rd party API integration.',
    link: 'https://taipei.netlify.com',
    img: 'taipei.png',
    codeLink: 'https://github.com/Alanyss/TaipeiTravel',
    techStack: ['React', 'SASS', 'Google Maps API', 'Eventful.com API', 'Google Places API'],
    status: 'In progress'
  },
  {
    name: 'buzek.io',
    description: 'Personal web developer portofolio site.',
    link: 'http://buzek.io',
    img: 'buzekio.png',
    codeLink: 'https://github.com/Alanyss/buzek.io',
    techStack: ['Javascript (ES6+)', 'React', 'SASS'],
    status: 'Launched on April 11, 2019'
  }
];

export default projectsData;
