export interface NavigationItem {
  labelKey: string;
  id: string;
}

export const navigationItems: NavigationItem[] = [
  { labelKey: "home", id: "home" },
  { labelKey: "about", id: "about" },
  { labelKey: "features", id: "why" },
  { labelKey: "functionality", id: "features" },
  { labelKey: "pricing", id: "" }, 
  { labelKey: "contact", id: "contact" },
];

/**
 * Navigate to a section by updating the URL hash and scrolling to the element
 * @deprecated Use useScrollContext().scrollToSection instead for better reliability
 * @param navigate - React Router navigate function
 * @param sectionId - The section ID to navigate to
 */
export const navigateToSection = (navigate: (to: string) => void, sectionId: string) => {
  const sectionHash = `#${sectionId}`;
  navigate(sectionHash);
  
  setTimeout(() => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};


 