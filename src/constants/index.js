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
  bootstrap,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: reactjs,
  },
  // TODO: ADD FOLLOWING WHEN COMPLETE
  /* {
        title: "Backend Developer",
        icon: backend,
    }, */
  /*  {
    title: "Content Creator",
    icon: creator,
  }, */
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
  // CURRENTLY LEARNING REDUX TODO: ADD WHEN COMPLETE LEARNING REDUX
  /* {
    name: "Redux Toolkit",
    icon: redux,
  }, */
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
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
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
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
    date: "Dec 2022 - Present",
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
    description:
      "Web-based Online Store Amazon clone which has the capability to add, remove items from the bakset(cart) and sign up, sign in, checkout in real time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link:
      "https://github.com/Muhammad-Usman-Official/Amazon-Clone.git",
    preview_code_link: "https://clone-challenge-651b0.web.app/",
  },
  // TODO: CREATE NEW PROJECTS AND ADD BELOW
];

export { services, technologies, experiences, testimonials, projects };
