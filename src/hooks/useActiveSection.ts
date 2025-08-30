import { useLocation } from "react-router-dom";
import { useMemo } from "react";

/**
 * Hook to get the active section from the URL hash (/#section-name)
 * @returns {string} active section name or 'home' if no hash
 */
export function useActiveSection() {
  const location = useLocation();     

  const activeSection = useMemo(() => {
    if (!location.hash) return "home";
    // remove the leading "#"
    return location.hash.replace("#", "");
  }, [location.hash]);

  return activeSection;
}