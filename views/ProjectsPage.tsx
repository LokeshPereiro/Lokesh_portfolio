"use client";

import { Fragment } from "react";

import { ProjectItem, SectionHeading } from "@/components";

import { projectsData } from "@/lib/data";

import { useSectionInView } from "@/hooks";

export const ProjectsPage = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <ProjectItem {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};
