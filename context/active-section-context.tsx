"use client";

import { useState, createContext } from "react";

import type { CurrentViewName } from "@/lib/types";

//Wrapper Provider prop Validation
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

//Status validation
type ActiveSectionContextType = {
  activeSection: CurrentViewName;
  setActiveSection: React.Dispatch<React.SetStateAction<CurrentViewName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

//** Create Context **//
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

//** export Context Provider into Higher-Order comp **//
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<CurrentViewName>("Home");
  //Client navigation within navbar - nav feature to slide between links
  //Need to keep track of this to disable the observer temporarily when user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
