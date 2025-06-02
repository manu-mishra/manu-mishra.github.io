import React, { useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// This component wraps the entire app and runs code on every page
export default function Root({children}) {
  useEffect(() => {
    // Only run on client-side
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    // Function to get the theme for the current day
    const getDayTheme = () => {
      const today = new Date().getDay();
      const dayThemeMap = {
        0: 'sunday',    // Sunday
        1: 'monday',    // Monday
        2: 'tuesday',   // Tuesday
        3: 'wednesday', // Wednesday
        4: 'thursday',  // Thursday
        5: 'friday',    // Friday
        6: 'saturday'   // Saturday
      };
      return dayThemeMap[today];
    };

    // Function to apply a theme
    const applyTheme = (themeName) => {
      // Apply theme class to body
      document.body.classList.remove(
        'pattern-sunday', 
        'pattern-monday', 
        'pattern-tuesday', 
        'pattern-wednesday', 
        'pattern-thursday', 
        'pattern-friday', 
        'pattern-saturday'
      );
      document.body.classList.add(`pattern-${themeName}`);
      
      // Apply theme colors
      const themeColors = {
        sunday: '#FF7F00',    // Orange
        monday: '#b8c6db',    // Light blue-gray (adjusted from white)
        tuesday: '#FF0000',   // Red
        wednesday: '#00A651', // Green
        thursday: '#FFDF00',  // Yellow
        friday: '#87CEEB',    // Sky Blue
        saturday: '#3a3a8c'   // Navy Blue (adjusted for visibility)
      };
      
      const root = document.documentElement;
      const primaryColor = themeColors[themeName];
      
      if (primaryColor) {
        root.style.setProperty('--ifm-color-primary', primaryColor);
        
        // Set derived colors (simplified for reliability)
        const darken = (hex, percent) => {
          const num = parseInt(hex.slice(1), 16);
          const amt = Math.round(2.55 * percent);
          const R = (num >> 16) - amt;
          const G = (num >> 8 & 0x00FF) - amt;
          const B = (num & 0x0000FF) - amt;
          return '#' + (0x1000000 + (R<0?0:R)*0x10000 + (G<0?0:G)*0x100 + (B<0?0:B)).toString(16).slice(1);
        };
        
        const lighten = (hex, percent) => {
          const num = parseInt(hex.slice(1), 16);
          const amt = Math.round(2.55 * percent);
          const R = Math.min(255, (num >> 16) + amt);
          const G = Math.min(255, (num >> 8 & 0x00FF) + amt);
          const B = Math.min(255, (num & 0x0000FF) + amt);
          return '#' + (0x1000000 + R*0x10000 + G*0x100 + B).toString(16).slice(1);
        };
        
        root.style.setProperty('--ifm-color-primary-dark', darken(primaryColor, 10));
        root.style.setProperty('--ifm-color-primary-darker', darken(primaryColor, 15));
        root.style.setProperty('--ifm-color-primary-darkest', darken(primaryColor, 25));
        root.style.setProperty('--ifm-color-primary-light', lighten(primaryColor, 10));
        root.style.setProperty('--ifm-color-primary-lighter', lighten(primaryColor, 15));
        root.style.setProperty('--ifm-color-primary-lightest', lighten(primaryColor, 25));
      }
    };

    // Check if we need to apply the daily theme
    const checkAndApplyDailyTheme = () => {
      const savedTheme = localStorage.getItem('colorTheme');
      const isUserSelected = localStorage.getItem('userSelectedTheme') === 'true';
      const lastVisitDay = localStorage.getItem('lastVisitDay');
      const today = new Date().getDay().toString();
      
      // Apply daily theme if:
      // 1. No theme is saved, or
      // 2. It's a new day and the user hasn't manually selected a theme
      if (!savedTheme || (!isUserSelected && lastVisitDay !== today)) {
        const dayTheme = getDayTheme();
        localStorage.setItem('colorTheme', dayTheme);
        localStorage.setItem('lastVisitDay', today);
        applyTheme(dayTheme);
      } else if (savedTheme) {
        // Otherwise apply the saved theme
        applyTheme(savedTheme);
      }
      
      // Always update the last visit day
      localStorage.setItem('lastVisitDay', today);
    };
    
    // Run immediately
    checkAndApplyDailyTheme();
    
    // Set up midnight theme change
    const setupMidnightChange = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const timeUntilMidnight = tomorrow - now;
      
      return setTimeout(() => {
        checkAndApplyDailyTheme();
        // Set up the next day's timeout
        const nextTimeout = setupMidnightChange();
        return () => clearTimeout(nextTimeout);
      }, timeUntilMidnight);
    };
    
    // Set up the first midnight timeout
    const midnightTimeout = setupMidnightChange();
    
    // Clean up
    return () => clearTimeout(midnightTimeout);
  }, []);

  return <>{children}</>;
}
