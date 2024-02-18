"use client";

import { useRef } from "react";
import Image from "next/image";

import { projectsData } from "@/lib/data";

import { motion, useScroll, useTransform } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

type ProjectProps = (typeof projectsData)[number];

export const ProjectItem = ({
  title,
  description,
  tags,
  imageUrl,
  demo,
  sourceCode,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div
      ref={ref}
      // style={{
      //   scale: scaleProgess,
      //   opacity: opacityProgess,
      // }
      // }
      className="group mb-3 sm:mb-8 last:mb-0 relative"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 mb-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="flex flex-wrap gap-2 sm:mt-auto pb-1">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.5rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex justify-around items-center p-1 text-[0.7rem]">
            <a href={demo} target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ scale: [1, 0.95] }}
                transition={{ duration: 0.25 }}
                className="flex flex-col justify-center items-center"
              >
                <AiFillEye className="w-[30px] h-[30px]" />
                <span className="italic">Demo</span>
              </motion.div>
            </a>
            <a href={sourceCode} target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ scale: [1, 0.95] }}
                transition={{ duration: 0.25 }}
                className="flex flex-col justify-center items-center"
              >
                <AiFillGithub className="w-[30px] h-[30px]" />
                <span className="italic">Source Code</span>
              </motion.div>
            </a>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="img-hover absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
        
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
        
            group-even:right-[initial] group-even:-left-40"
          />
        </div>
      </section>
    </div>
  );
};
