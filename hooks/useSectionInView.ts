import { useEffect } from "react";

import { useActiveSectionContext } from ".";
import { CurrentViewName } from "@/lib/types";

import { useInView } from "react-intersection-observer";

export function useSectionInView(
  sectionName: CurrentViewName,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
