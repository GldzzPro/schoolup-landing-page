import React, { createContext, useContext, useRef, RefObject } from "react";
import { useNavigate } from "react-router-dom";
import { navigationItems } from "../config/navigation";

interface SectionRefs {
  [key: string]: RefObject<HTMLElement>;
}

interface ScrollContextType {
  sectionRefs: SectionRefs;
  scrollToSection: (sectionId: string) => void;
  registerSection: (sectionId: string, ref: RefObject<HTMLElement>) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const sectionRefs = useRef<SectionRefs>({});

  // Initialize refs for all navigation items
  React.useEffect(() => {
    navigationItems.forEach((item) => {
      if (item.id && !sectionRefs.current[item.id]) {
        sectionRefs.current[item.id] = React.createRef<HTMLElement>();
      }
    });
  }, []);

  const registerSection = (sectionId: string, ref: RefObject<HTMLElement>) => {
    sectionRefs.current[sectionId] = ref;
  };

  const scrollToSection = (sectionId: string) => {
    // Update URL hash first
    const sectionHash = `#${sectionId}`;
    navigate(sectionHash);
    // Special case for home section - scroll to top of page

    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    // Use ref for precise scrolling
    const sectionRef = sectionRefs.current[sectionId];
    if (sectionRef?.current) {
      // Use requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      });
    } else {
      // Fallback to getElementById if ref is not available
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 100);
    }
  };

  const value: ScrollContextType = {
    sectionRefs: sectionRefs.current,
    scrollToSection,
    registerSection,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};
