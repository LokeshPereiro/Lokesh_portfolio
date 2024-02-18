"use client";

import { SectionHeading } from "@/components";

import { useSectionInView } from "@/hooks";

import { motion } from "framer-motion";

export const AboutPage = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello to all, I'm Lokesh Pereiro and please welcome to my portfolio
        website. After graduating with a degree in{" "}
        <span className="font-medium">Business Administration</span>, I decided
        to pursue my passion for programming. I'm a passionate
        <span>fullstack-stack developer</span> with a year of self-taught
        experience in frontend technologies, complemented by a rigorous 7-month
        intensive master's course that significantly enhanced my software
        development skills.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a
        solution to a problem. My core stack is{" "}
        <span className="font-medium">React, Next.js, Node.js and MongoDB</span>
        . I am also familiar with TypeScript and Strapi CMS. I am always looking
        to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        tennis, hanging around with friends and I'm a passionate horse rider. As
        I was born at the foot of Mount Everest, I also love hiking and
        trekking.
        <span>
          {" "}
          I'm constantly expanding my skills set and exploring new challanges.
          My goal is to build career around the infinite possibilities that web
          technologies offer to improve people's lives.{" "}
          <span className="underline">
            Feel free to reach out for a chat, opportunities or simply to
            connect.
          </span>{" "}
          Let's write the next lines of codes togather!🤝
        </span>
      </p>
    </motion.section>
  );
};
