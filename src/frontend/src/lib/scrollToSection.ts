/**
 * Smoothly scrolls to a section by ID with offset for sticky header
 */
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;
  
  const headerOffset = 80; // Height of sticky header
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
