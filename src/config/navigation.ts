export interface NavigationItem {
  labelKey: string;
  id: string;
}

export const navigationItems: NavigationItem[] = [
  { labelKey: "home", id: "Accueil" },
  { labelKey: "about", id: "ÀPropos" },
  { labelKey: "features", id: "Pourquoinous?" },
  { labelKey: "functionality", id: "Fonctionnalités" },
  { labelKey: "pricing", id: "Tarification" },
  { labelKey: "contact", id: "Contact" },
];

/**
 * Navigate to a section by updating the URL hash and scrolling to the element
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