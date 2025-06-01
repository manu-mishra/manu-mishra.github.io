import React, { useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// This component wraps the entire app and runs code on every page
export default function Root({children}) {
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return; // Skip on server-side rendering
    }
    
    // Function to apply the theme pattern
    const applyThemePattern = () => {
      // Get the saved theme from localStorage
      const savedTheme = localStorage.getItem('colorTheme') || 'sunday';
      console.log('Applying theme pattern:', savedTheme);
      
      // Remove all pattern classes from body
      document.body.classList.remove(
        'pattern-sunday', 
        'pattern-monday', 
        'pattern-tuesday', 
        'pattern-wednesday', 
        'pattern-thursday', 
        'pattern-friday', 
        'pattern-saturday'
      );
      
      // Add the saved pattern class to body
      document.body.classList.add(`pattern-${savedTheme}`);
      
      // Create or update the style element for direct CSS injection
      let styleElement = document.getElementById('dynamic-pattern-styles');
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'dynamic-pattern-styles';
        document.head.appendChild(styleElement);
      }
      
      // Define the pattern styles based on the current theme
      const getPatternStyle = (theme) => {
        switch(theme) {
          case 'sunday':
            return `
              .hero::before, header[class*="Header"]::before {
                background-image: 
                  repeating-linear-gradient(60deg, rgba(255, 127, 0, 0.1) 0px, rgba(255, 127, 0, 0.1) 1px, transparent 1px, transparent 15px),
                  repeating-linear-gradient(120deg, rgba(255, 127, 0, 0.1) 0px, rgba(255, 127, 0, 0.1) 1px, transparent 1px, transparent 15px),
                  repeating-linear-gradient(0deg, rgba(255, 127, 0, 0.05) 0px, rgba(255, 127, 0, 0.05) 1px, transparent 1px, transparent 15px) !important;
                background-size: 30px 30px !important;
              }
            `;
          case 'monday':
            return `
              .hero::before, header[class*="Header"]::before {
                background-image: 
                  radial-gradient(circle, rgba(184, 198, 219, 0.2) 1px, transparent 6px),
                  radial-gradient(circle, rgba(184, 198, 219, 0.15) 1px, transparent 4px) !important;
                background-size: 30px 30px, 20px 20px !important;
                background-position: 0 0, 15px 15px !important;
              }
            `;
          case 'tuesday':
            return `
              .hero::before, header[class*="Header"]::before {
                background-image: 
                  linear-gradient(45deg, rgba(255, 0, 0, 0.1) 25%, transparent 25%),
                  linear-gradient(135deg, rgba(255, 0, 0, 0.1) 25%, transparent 25%) !important;
                background-size: 20px 20px !important;
              }
            `;
          case 'wednesday':
            return `
              .hero::before, header[class*="Header"]::before {
                background-image: 
                  linear-gradient(0deg, rgba(0, 166, 81, 0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 166, 81, 0.05) 1px, transparent 1px) !important;
                background-size: 15px 15px !important;
              }
            `;
          case 'thursday':
            return `
              .hero::before, header[class*="Header"]::before {
                background-image: 
                  repeating-linear-gradient(30deg, rgba(255, 223, 0, 0.1) 0px, rgba(255, 223, 0, 0.1) 1px, transparent 1px, transparent 15px),
                  repeating-linear-gradient(150deg, rgba(255, 223, 0, 0.1) 0px, rgba(255, 223, 0, 0.1) 1px, transparent 1px, transparent 15px),
                  repeating-linear-gradient(90deg, rgba(255, 223, 0, 0.05) 0px, rgba(255, 223, 0, 0.05) 1px, transparent 1px, transparent 15px) !important;
                background-size: 25px 25px !important;
              }
            `;
          case 'friday':
            return `
              .hero::before, header[class*="Header"]::before {
                background-image: 
                  radial-gradient(circle, rgba(135, 206, 235, 0.15) 3px, transparent 3px),
                  radial-gradient(circle, rgba(135, 206, 235, 0.1) 1px, transparent 5px) !important;
                background-size: 30px 30px, 40px 40px !important;
                background-position: 0 0, 15px 15px !important;
              }
            `;
          case 'saturday':
            return `
              .hero::before, header[class*="Header"]::before {
                background-image: 
                  linear-gradient(0deg, transparent 24px, rgba(0, 0, 128, 0.1) 25px, rgba(0, 0, 128, 0.1) 26px, transparent 27px, transparent 49px),
                  linear-gradient(90deg, transparent 24px, rgba(0, 0, 128, 0.1) 25px, rgba(0, 0, 128, 0.1) 26px, transparent 27px, transparent 49px) !important;
                background-size: 50px 50px !important;
              }
            `;
          default:
            return '';
        }
      };
      
      // Inject the styles
      styleElement.textContent = getPatternStyle(savedTheme);
    };
    
    // Apply theme pattern on initial load
    applyThemePattern();
    
    // Apply after a delay to ensure all elements are loaded
    setTimeout(applyThemePattern, 100);
    setTimeout(applyThemePattern, 500);
    
    // Set up storage event listener to detect theme changes from other tabs/windows
    const handleStorageChange = (event) => {
      if (event.key === 'colorTheme') {
        applyThemePattern();
      }
    };
    
    // Listen for theme changes
    window.addEventListener('storage', handleStorageChange);
    document.addEventListener('themeChanged', applyThemePattern);
    
    // Listen for navigation events in Docusaurus
    const handleNavigation = () => {
      console.log('Navigation detected, reapplying pattern');
      setTimeout(applyThemePattern, 50);
      setTimeout(applyThemePattern, 200);
    };
    
    // Docusaurus navigation events
    document.addEventListener('docusaurus.navigated', handleNavigation);
    document.addEventListener('docusaurus.navigate.start', handleNavigation);
    document.addEventListener('docusaurus.navigate.end', handleNavigation);
    
    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('themeChanged', applyThemePattern);
      document.removeEventListener('docusaurus.navigated', handleNavigation);
      document.removeEventListener('docusaurus.navigate.start', handleNavigation);
      document.removeEventListener('docusaurus.navigate.end', handleNavigation);
    };
  }, []);

  return <>{children}</>;
}
