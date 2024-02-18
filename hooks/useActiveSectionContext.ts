import { ActiveSectionContext } from "@/context";
import { useContext } from "react";

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};
