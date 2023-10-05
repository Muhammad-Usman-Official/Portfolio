import {
  backend,
  freelancer,
  fiverr,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  psd,
  amazon,
  threejs,
  express,
  upwork,
  coinbase,
  mongoose,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack | Full Stack Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: reactjs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mongoose",
    icon: mongoose,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // TODO: Uncommment following when fully learnt the technology
  /* {
    name: "Three JS",
    icon: threejs,
  }, */
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "psd",
    icon: psd,
  },
];

const experiences = [
  {
    title: "MERN Stack | Full Stack Developer",
    company_name: "upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "Aug 2023 - present",
    points: [
      "Developing and maintaining web applications using MongoDb, ExpressJS, ReactJS, NodeJS, Tailwind CSS and other frontend related technologies.",
      "Creating Web Apps that are accessible, performant, visually appealing, and W3C validaed.",
      "Creating SEO freindly Websites.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Building user interfaces and ensuring good user experience.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "fiverr",
    icon: fiverr,
    iconBg: "#383E56",
    date: "Nov 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript, jQuery and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Web | React Developer",
    company_name: "fiverr",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "creating Web Apps that are accessible, performant, visually appealing, and W3C validaed.",
      "Building user interfaces and ensuring good user experience.",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Dec 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other frontend related technologies.",
      "Creating Web Apps that are accessible, performant, visually appealing, and W3C validaed.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Building user interfaces and ensuring good user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Amazon",
    description: `This amazon clone lets users to add products to the cart which is also known as basket in the website, users can interact with the products like they can remove the products on the checkout page and the total price of the added products on the payment page.
      Users can create their own account on this platform and then they can login to proceed with their shopping.`,
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link:
      "https://github.com/Muhammad-Usman-Official/Amazon-Clone.git",
    preview_code_link: "https://clone-challenge-651b0.web.app/",
  },
  {
    name: "CoinBase",
    description:
      "Coinbase is a web application which allows users to post blogs related to crypto currencies and see them. Users can see previous news articles and 10 crypto currency rates and 24H. Users can see how crypto coin performed in last 24 hours and the latest price of the individual coin as well.",
    tags: [
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: coinbase,
    source_code_link: "https://github.com/Muhammad-Usman-Official/CoinBase.git",
    preview_code_link: null,
  },
  // TODO: CREATE NEW PROJECTS AND ADD BELOW
];

export { services, technologies, experiences, testimonials, projects };
