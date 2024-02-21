import React from "react";
import { movie, mentor, githubusers } from "@/public";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const navLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "WEBU Marketing Graduated",
    location: "Madrid, Spain",
    description:
      "Worked on large-scale projects from scratch, i.e. from brainstorming ideas for advertising campaigns to final delivery to production. In-depth study of Sprite in the Nordic countries to compare the brand with its current competitors. In addition, marketing assistant and market researcher for Coca-Cola brands susch as Coke Energy and Honest Tea.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2020 - May 2021",
  },
  {
    title: "Fullstack software developer",
    location: "Barcelona, Spain",
    description:
      "Although it is often confused with traditional formation, it was actually working experience. Developed cutting-edge and modern SPA projects in a real company environment using agile methodologies. The technology stack we used was MERN: Mongodb, Express, React and Node.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - Feb 2023",
  },
  {
    title: "Freelancer",
    location: "Remote",
    description:
      "I am currently offering my services on Fiverr where I develop UI using HTML, CSS, JavaScript and Reactjs to convert the design into a code within 5 days. In addition, I also work in client individual projects on a freelance basis. I provide frontend service using react with typescript after the 1to1 meeting.",
    icon: React.createElement(FaReact),
    date: "May 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "lpMovies",
    description:
      "Movie application developed with Reactjs & Redux toolkit. Fetching data from The Movie Data Base to render the whole app. Features: Searching, Filtering among movies and TV shows.",
    tags: ["React", "Redux Toolkit", "SASS", "Vite"],
    imageUrl: movie,
    demo: "https://movie-app-redux-tmdb.vercel.app/",
    sourceCode: "https://github.com/LokeshPereiro/MovieApp_Redux_TMDB",
  },
  {
    title: "Frontend Mentor Challange",
    description:
      "Testing my React skills where I have to pull data from the Rest Countries Api. Features: Filter, Search & Dark mode",
    tags: ["React", "Redux", "styled-components"],
    imageUrl: mentor,
    demo: "https://lokdraft-rest-countriesapp.netlify.app/",
    sourceCode:
      "https://github.com/LokeshPereiro/Frontend-Mentor-REST-Countries-Challange",
  },
  {
    title: "GithubUsers_",
    description:
      "Find your favourite code mentor, peers, friends...And get benefits from graphical stats. Features: Authentication, React Fusion Charts.",
    tags: ["React", "Auth0", "Vite", "Styled Components"],
    imageUrl: githubusers,
    demo: "https://lok-github-user.netlify.app/",
    sourceCode: "https://github.com/LokeshPereiro/GithubUsers_",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "Styled Components",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Github",
  "Tailwind",
  "Strapi",
  "Stripe",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
