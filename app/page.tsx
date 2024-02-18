import { SectionDivider } from "@/components";

import {
  LandingPage,
  AboutPage,
  ProjectsPage,
  SkillsPage,
  ExperiencePage,
  ContactPage,
} from "@/views";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <LandingPage />
      <SectionDivider />
      <AboutPage />
      <ProjectsPage />
      <SkillsPage />
      <ExperiencePage />
      <ContactPage />
    </main>
  );
}
