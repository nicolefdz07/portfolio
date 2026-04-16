import {

  css,
  git,
  html,
  javascript,
  reactjs,
  tailwind, 
  typescript,
  web,
  nextjs,
  ecommerce,
  streammax,
  spendwise,
devevents,
curatech
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
    title: "Front End Developer",
    icon: web,
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
    name: "git",
    icon: git,
  },
  {
    name: 'next js',
    icon: nextjs,
  }
  
];


const projects = [
  
  {
    name: "Spend Wise",
    description:
      "Single-page web application that enables users to manage personal budgets, record transactions, and visualize financial trends through real-time data synchronization and interactive charts, ensuring a seamless and responsive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "violet-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      
    ],

    image: spendwise,
    source_code_link: "https://github.com/nicolefdz07/spendwise",
    live_link: "https://sp3ndwise.netlify.app",
  },
  {
    name: "Stream Max",
    description:
      "Single-page web application that lets users browse, search, and organize movies and TV shows using the TMDB API, featuring dynamic routing, persistent favorites, and smooth animations for an engaging, responsive experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: streammax,
    source_code_link: "https://github.com/nicolefdz07/stream-max",
    live_link: "https://stream-max.netlify.app/",
  },
  {
    name: "Curatech",
    description:
      "CuraTech is an IoT medication system that integrates an ESP32-powered dispenser with a modern Next.js 16 dashboard. I led the frontend development, engineering a real-time interface for hardware module detection and medication scheduling, ensuring seamless synchronization between the physical device and a FastAPI backend.",
    tags: [
      {
        name: "NextJS",
        color: "violet-text-gradient",
      },
      {
        name: "Typescript",
        color: "yellow-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: curatech,
    source_code_link: "https://github.com/nicolefdz07/curatech-frontend",
    live_link: "https://curatech-six.vercel.app/",
  },
  {
    name: "Shop Hub",
    description:
      "Single-page e-commerce application built with React that allows users to browse, filter, and purchase products with real-time search, advanced category filters, and a seamless shopping cart experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/nicolefdz07/my-ecommerce",
    live_link: "https://ecommerce-nicole.netlify.app/",
  },
  {
    name: "Dev Events ",
    description:
        "A full-stack event platform for developers to discover and book tech events like hackathons, conferences, and meetups. Features dynamic event pages, smart booking system, and similar event recommendations based on tags.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: devevents,
    source_code_link: "https://github.com/nicolefdz07/dev-events-nextjs",
    live_link: "https://dev-events-nfdz.vercel.app/",
  },
];

export { projects, services, technologies,  };
