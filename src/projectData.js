export default { "ecommerce" : [
    {
      pageClass: "page two",
      title: 'y5 Ltd.',
      subtitle: 'Building APIs for industry',
      summary: {
        paragraphs: "I worked for this company, based in Hamilton, during the development of a series of headless \"micro-service style\" APIs for their largest customer who distributes motorcycle parts across NZ and AU. The role involved iterating on the main established APIs (e.g. for products) and implementing from scratch some of the smaller ones (e.g. for customers).\\r\\n\\r\\nAlthough we did not deploy a UI, leaving this upto the motorcycle company's in house developers, we worked closely with them to refine and implement features, while adapting a Demonstration UI to aid feature handover.\\r\\n\\r\\nThe interview for the position involved a take-home project in data visualisation, which can be demo-ed below.",
        imgPath: "motorbike.png"
      },
      langs: ['Node.js', 'JavaScript', 'CSS', 'Bash'], 
      libs: ['React', 'Docker', 'Caprover', 'Express', 'd3.js'],
      demoUrl: 'https://dreamy-jackson-a5fdb1.netlify.app/',
      articles: [
        { paragraphs: '● Analyzed and evaluated complex solutions to business problems. Liaised (sometimes remotely) with the team to co-ordinate the best response to the problem. \\r\\n\\r\\n  ● Estimated solution time, effort and other costs. \\r\\n\\r\\n  ● Implemented solutions using a micro-service architecture and agile methodology. \\r\\n\\r\\n   ● Developed test UI with React to display and document new features before deployment and handover to clients. \\r\\n\\r\\n   ● Wrote documentation and liaised with clients to ease deployment of features and integration with their own UI. \\r\\n\\r\\n   ● Responded remotely to client\'s queries, requests for changes and any technical issues with our services.\\r\\n\\r\\nSkills: UI Testing · Database Administration · PostgreSQL · Data Visualization · User Interface Design · Back-End Web Development · Full-Stack Development', imgPath: "caprover.png", imgCaption: "The backend was deployed using Docker and Open Source PaaS project, Caprover", imgAlt: "Caprover logo"},
      ],
    },
    {
      pageClass: "page three",
      title: 'Bespoke Shopify app',
      subtitle: 'Custom fulfillment/stock management',
      summary: {
        paragraphs: "Aunt Jenny is an e-commerce site specialising in products for weaving and spinning wool at home. I was briefed with planning and constructing a bespoke app to fit into the Admin dashboard of the existing store.\\r\\n\\r\\nMuch of the time was spent learning the Shopify auth processes, UI library and GraphQL API for fulfillment of orders. I was able to automate a certain amount of order processing and customer interaction, plus edit the storefront to update stock data on an automatic daily basis. I used PostgreSQL and server-side rendering in Next.js, captured data from the manufacturer via webhooks, and used it to enhance dashboard reporting for the client.",
        imgPath: "spinning-wheel.png"
      },
      libs: ['NextJS', 'Koa', 'React', 'Polaris', 'Sequelize'],
      langs: ['JavaScript', 'GraphQL', 'CSS', 'Liquid'],
      articles: [
        { paragraphs: "\"Nick is continuing to help automate the order processing and responds well to feedback and requests for new features. He is a great problem solver and I would recommend him...\" - Rewa Nolan, AuntJenny" , imgPath: "aunt-jenny.jpg", imgCaption: "The client, AuntJenny.com.au"},
      ],
      hasCaseStudy: false
    },
  ], 
  "elearning" : [
    {
      pageClass: "page two",
      title: 'Nukutawhiti',
      subtitle: 'The rediscovery of Te Puna i te Ao Marama',
      summary: {
        paragraphs: "This project is due to be deployed in the coming month. I am unable to release the details until the project is fully live... check back soon to take part in the story!",
        imgPath: "nuku.png"
      },
      langs: ['PHP', 'SQL'], 
      libs: ['Moodle', 'Postgres', 'H5P.org', 'Canva'],
    },
    {
      pageClass: "page three",
      title: 'Habit Triangles',
      subtitle: 'a visual, linear habit tracker',
      summary: {
        paragraphs: "This small app stemmed from a project in the Launch School back-end syllabus which focused on persistence with local storage and rendering with the ERB template language.\\r\\n\\r\\nThis was my first attempt at building a basic interface for the visualisation of personal habits using multi-level structures. I decided to use a hierarchy of triangles, attempting to make 3 levels that could stack on top of the other. I had some success but relied on monkey-patching of the SwiperJS API which quickly became unmanageable.",
        imgPath: "pyramid.png"
      },
      libs: ['jQuery Swiper', 'Bootstrap 4', 'FlatUI', 'Sinatra', 'ERB'],
      langs: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
      demoUrl: "https://habit-triangles.herokuapp.com/",
      codebaseUrl: "https://github.com/nick-stebbings/habit_triangles",
      blogUrl: "https://n-stebbings.medium.com/from-session-cookie-to-do-list-to-fractal-distributed-listmania-part-1-645911140e53",
      articles: [
        { paragraphs: "I drew inspiration from a Mathematics and fractal geometry. Check out this cool 3d version: https://www.reddit.com/r/woahdude/comments/hsu3f3/delightful_fractal_triangles/" , imgPath: "screens/happy-triangles.jpg", imgCaption: "My first attempt at visualising habits used a pyramid of triangles", imgAlt: "The app's habit visualisation interface"},
      ],
      hasCaseStudy: false
    }
  ],"web3" : [
    {
      pageClass: "page two",
      title: 'Habit/Fract (for Holochain)',
      subtitle: 'a social, fractal, atomic habit tracker',
      summary: {
        paragraphs: "Ever tried to follow a goal and had trouble trying to put it into action? Ok - that's a leading question! After trying out many linear habit trackers (including some very visually and narratively interesting apps) I found that there was nothing meeting my personal requirements. \\r\\n\\r\\nI am a person who thinks in big ideas and then recursively breaks down what needs to be done to achieve these ideas (sometimes epic in scope). While it is always the day-to-day actions that one must focus on, as a result of this top-down way of thinking it can be difficult to link daily actions to the bigger picture and make consistent progress.\\r\\n\\r\\nConversely, many people are great at breaking down and acting on small-magnitude behaviours (the list-writers!). Habit/Fract came about as a way of uniting the two modes of thinking in a way that provides visual cues and helps to build and break down habitual behaviour over time.",
        imgPath: "atom.png"
      },
      langs: ['Holochain', 'TypeScript', 'Rust', 'GraphQL'], 
      libs: ['React', 'Redis', 'Redux', 'Apollo', 'd3.js', 'Storybook'],
      codebaseUrl: "https://github.com/HabFract",
      designsUrl: "https://www.figma.com/file/m8CE7oXUuSw2BGkS7fdvBD/Habfract-Holochain-1.1-Design-System?node-id=214%3A2091&t=QOvj4igG3f1neSkk-1",
      articles: [
        { paragraphs: 'This working project will in time be the culmination of my fractally-visualised personal habit tracking application - a social experience that will allow us to learn from each other through mimicry.\\r\\n\\r\\nThe end goal for the UI is to have a \"never-ending\" fractal structure that can be added to at the top, or at the bottom, perhaps terminating at the bottom in an \"atomic habit\" - the smallest unit of habit, which could optionally be stored as a simple To-do list. The data and visuals can be stored on the user\'s private account (even available offline) and then, if the agent wishes, tokenised and shared for free/traded (when the visualisation of the behaviours is valuable, e.g. the running of a business).\\r\\n\\r\\nHolochain ensures encryption and full agent-centric sovereignty over data. ', imgPath: "holochain-logo.png", imgCaption: "Holochain is a distributed (p2p) data integrity framework", imgAlt: "Holochain logo"},
        { paragraphs: 'I learnt the Rust programming language to intermediate level in order to understand how to scaffold and develop a Holochain app (hApp). I learnt how to run a Holochain conductor (node) on my local host, then I started with a \'Profiles\' microservice provided by members of the Holochain open-dev community.\\r\\n\\r\\nI have recently been focusing on the UI/UX and have completed user stories/screens (see \'Designs\' link, above) that flesh out the core functionality of the minimum viable product. There is no Holochain native mobile application currently possible and so the challenge has been to make it feel native whist remaining a web app.\\r\\n\\r\\nDeveloping on Holochain is like trying to hit a moving target, since the technology has only just reached Beta stage. I look forward to implementing a full p2p deployment integrating the new designs in the next year.\\r\\n\\r\\nIf anybody wishes to get involved in this development of this hApp, get in touch via the contact form.', imgPath: "screens/user-profile.png", imgCaption: "A look at a possible New User screen. No password is needed as an agent is identified by the app via their public/private key pair", imgAlt: "New user screenshot"},
      ],
      hasCaseStudy: true
    },
    {
      pageClass: "page three",
      title: 'Habit/Fract (Web 2.0)',
      subtitle: 'a proof of concept for the ultimate habit tracker',
      summary: {
        paragraphs: "This project was an improvement of my Habit Triangles app to include hierarchical visualisation of the habits using the d3 JavaScript library (Data Driven Documents).\\r\\n\\r\\nThis was a much more ambitious project than the first. I moved to a multi-layered architecture: my first single-paged app. I also performed a full manual deployment to a Digital Ocean droplet, Dockerised both layers and used Github actions and DockerHub for continual deployment",
        imgPath: "sphere.png"
      },
      langs: ['Ruby', 'JavaScript', 'Sass', 'PostCSS'], 
      libs: ['d3.js', 'Tailwind CSS', 'Webpack 4', 'Mithril.js', 'React', 'Redux'],
      demoUrl: "https://habfract.online",
      codebaseUrl: "https://github.com/nick-stebbings/fractal-habits-SPA-tailwind-react-redux",
      designsUrl: "https://www.figma.com/file/bbLgug0bakLBh9xtbKwgon/HabitFract?node-id=0%3A1&t=x34BaWpkp7AtLn7o-1",
      blogUrl:
        'https://n-stebbings.medium.com/from-session-cookie-to-do-list-to-fractal-distributed-listmania-2da3e33728a?postPublishedType=repub',
      articles: [
        { paragraphs: "I spent some time working on integrating d3-hierarchy visualisations with a lightweight frontend framework called Mithril. Since Mithril is un-opiniated about global state management I tried to find my own solutions using functional streams of data. This prepared me well for learning Redux and understanding React state hooks, but was ultimately buggy and hard to maintain.\\r\\n\\r\\nI later completed a migration to React/Redux which solved most of the bugs. The demo link here is the migrated version, but without the landing page I originally deployed.", imgPath: "screens/habit-structure.png", imgCaption: "The primary habit visualisation is a tree structure", imgAlt: "The app's habit visualisation interface"},
        { paragraphs: "The API for the single-page-application was written in Ruby, using the Sinatra framework. I tried to separate concerns as much as possible to allow the use of different storage mediums via adapters in the ROM-rb ORM library. This was a complicated library to learn but it ultimately enabled me to populate the visualisations on the frontend from web-scraped data.\\r\\n\\r\\nI scraped data from eHow using Cheerio, formulated it in a YAML file, then used a Ruby Tree library to adapt it into a hierarchical JSON ternary tree. A similar process could be used to allow users to start from a set of common templates, derived from famous ways to organise one's habits (e.g. a template copying the \'7 Habits of Highly Effective People\'').", imgPath: "screens/habitfractv2.png", imgCaption: "The original landing screen", imgAlt: "Landing screen screenshot"}
      ],
      hasCaseStudy: false
    },
    {
      pageClass: "page four",
      title: 'Farmr',
      subtitle: 'a good price for good produce',
      summary: {
        paragraphs: "This is a concept for an hApp that is at the design and prototyping stage. Inspired by the work of the hREA project (the Holochain implementation of a bigger/older project called ValueFlows) I came up with this idea.\\r\\n\\r\\nWith traditional economic systems breaking down, and inflation rampant, there is a need for new economic ideas. The ValueFlows project has been trying for some time to introduce a new economic ontology/grammar that will allow human beings to recognise the true value/costs of every micro-economic transaction and trace the flow of value throughout the system. \\r\\n\\r\\nI intend to build on the great work of these projects by creating a simple app that allows consumers to find the best value produce meeting their supply-side standards (e.g. spray-free, organic, free-range).",
        imgPath: "screens/farmr-user-stories.png", 
        imgCaption: "Beginning of a user story for a food consumer", imgAlt: "User story flow-chart"
      },
      langs: ['Holochain', 'JavaScript', 'Rust'], 
      libs: ['Still', 'at', 'the', 'design', 'stage'],
      // codebaseUrl: "https://github.com/HabFract",
      designsUrl: "https://www.figma.com/file/rNEfZ6vOS1UfUW0byjZbUm/Farmer-Stories?t=smffdhIRJcbG1z3n-1",
      articles: [
        { paragraphs: 'I began by mapping out the core functionality from the two main user types: Producer and Consumer.\\r\\n\\r\\nUsing Figma design tools I created flow charts to investigate the potential paths for each new user and the hurdles to understanding and using this new economic grammar.\\r\\n\\r\\nOnce I better understood the potential paths for each new user I turned the user flows into mobile screens using the Flowbite Tailwind UI kit. This allowed me to flesh out the UI for both stories in one morning\'s work.\\r\\n\\r\\nIf anybody wishes to get involved in this development of this hApp, get in touch via the contact form.',
        imgPath: "screens/early-farmr.png", 
        imgCaption: "Above (large): user story planning with Figma. Above: early mobile screens were rapidly prototyped.", imgAlt: "Some mobile screens for Farmr showing a hero section and products list"},
      ],
    },
  ],
};