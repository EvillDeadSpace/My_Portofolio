import {
  mobile,
  backend,
  creator,
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  webdev,
  school,
  high,
  c,
  patike,
  game,
  vrijeme,

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "C++",
    icon: mobile,
  },
  {
    title: "Photo and Video Editor",
    icon: backend,
  },
  {
    title: "Fitness Enthusiast",
    icon: mobile,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "C++",
    icon: c,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Web",
    icon: webdev,
    iconBg: "#383E56",
    date: "March 2015-Present",
    points: [
      "As a web developer, I am responsible for creating and maintaining websites. My job involves working with various web technologies such as HTML, CSS, and JavaScript to build the frontend of the site, as well as utilizing server-side languages such as PHP and SQL to handle the backend functionality.",
      "I enjoy the challenge of solving complex problems and coming up with innovative solutions to enhance the user experience. My work often involves collaborating with other developers, designers, and project managers to ensure that the website meets the client's requirements and is delivered on time.",
      "Overall, being a web developer requires a combination of technical skills, creativity, and attention to detail. It's a rewarding career that allows me to continuously learn and grow while making a positive impact on the digital world.",
      
    ],
  },
  {
    title: "Graphic-Technician and Web-designer",
    company_name: "High School",
    icon: high,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Feb 2020",
    points: [
      "I completed a four-year program in high school as a graphic technician and web designer, which provided me with a solid foundation in both graphic design and web development. During my studies, I gained a thorough understanding of design principles, software programs, and coding languages, which allowed me to create visually stunning websites that are both user-friendly and functional.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Overall, my education and experience as a graphic technician and web designer have given me the skills and knowledge needed to succeed in this field. I continue to stay up-to-date with the latest trends and technologies to ensure that I am providing the best possible service to my clients.",
    ],
  },
  {
    title: "ReactJS",
    company_name: "ReactJS",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2020-Present",
    points: [
      "When I first started learning ReactJS, I was excited to dive into this popular JavaScript library and discover all that it had to offer. I knew that ReactJS was widely used in the web development industry and had many benefits, including increased performance and reusability of code.",
      "To begin my learning journey, I first took the time to research and understand the basics of JavaScript, as ReactJS is built on top of this language. Once I had a good understanding of JavaScript fundamentals, I then turned to online resources such as tutorials, documentation, and video courses to learn ReactJS.",
      "Overall, my experience learning ReactJS has been challenging, but rewarding. With time and practice, I have been able to master this powerful library and create dynamic, user-friendly web applications. I look forward to continuing to explore ReactJS and further advance my skills as a web developer.",
      
    ],
  },
  {
    title: "Faculty",
    company_name: "IPI Academy",
    icon: school,
    iconBg: "#E6DEDD",
    date: "Jan 202 - Present",
    points: [
      "As a student at IPI Academy in Tuzla, I am currently pursuing a degree in Computer Science and Information Technology. I chose this program because I am passionate about technology and interested in pursuing a career in the tech industry.",
      "During my studies, I have learned a wide range of skills and knowledge related to computer programming, software development, data analysis, and information security. I have also had the opportunity to work on various projects and assignments, which have allowed me to apply my learning in real-world situations.",
      "Overall, my experience as a student at IPI Academy has been challenging and rewarding. I feel confident that the skills and knowledge I have gained through this program will help me to succeed in my future career in the tech industry.",
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
    name: "Web for selling sneakers",
    description:
      "My website is built with ReactJS and serves as an online store for sneakers. It is one of my earliest React projects that I have completed",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebasse",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: patike,
    source_code_link: "https://github.com/EvillDeadSpace/Online-shop-for-sneakers",
    source_code_web: "https://site-tuba-shop.netlify.app/",
  },
  {
    name: "Guess Number Game",
    description:
      "A vanilla JavaScript project, a web application that allows users to guess a number between 1 and 20.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/EvillDeadSpace/GuessMyNumber",
    source_code_web: "https://guessnumber-amartubic.netlify.app",
  },
  {
    name: "Weather API",
    description:
      "A website that uses an API to check and showcase weather conditions. I built this project myself with the assistance of an API.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: vrijeme,
    source_code_link: "https://github.com/EvillDeadSpace/Weather-APP",
    source_code_web: "https://weather-amartubic.netlify.app/",
    
  },
];

export { services, technologies, experiences, testimonials, projects };
