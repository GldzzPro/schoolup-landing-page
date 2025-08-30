export interface NavigationItem {
  label: string;
  id: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "Accueil", id: "home" },
  { label: "À Propos", id: "about" },
  { label: "Pourquoi nous ?", id: "why" },
  { label: "Fonctionnalités", id: "features" },
  { label: "Tarification", id: "" },
  { label: "Contact", id: "contact" },
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