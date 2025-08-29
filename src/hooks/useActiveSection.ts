import { useLocation } from "react-router-dom";
import { useMemo } from "react";

/**
 * Hook to get the active section from the URL hash (/#section-name)
 * @returns {string | null} active section name or null if no hash
 */
export function useActiveSection() {
  const location = useLocation();

  const activeSection = useMemo(() => {
    if (!location.hash) return null;
    // remove the leading "#"
    return location.hash.replace("#", "");
  }, [location.hash]);

  return activeSection;
}