import React, { useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// This component wraps the entire app and runs code on every page
export default function Root({children}) {
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return; // Skip on server-side rendering
    }
    
    // Function to apply the theme based on the day of the week
    const applyDailyTheme = () => {
      // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
      const today = new Date().getDay();
      
      // Map day number to theme name
      const dayThemeMap = {
        0: 'sunday',    // Sunday
        1: 'monday',    // Monday
        2: 'tuesday',   // Tuesday
        3: 'wednesday', // Wednesday
        4: 'thursday',  // Thursday
        5: 'friday',    // Friday
        6: 'saturday'   // Saturday
      };
      
      // Get the theme for today
      const todayTheme = dayThemeMap[today];
      
      console.log(`Root component: Today is day ${today}, theme should be ${todayTheme}`);
      
      // Check if user has manually selected a theme
      const userSelectedTheme = localStorage.getItem('colorTheme');
      
      if (!userSelectedTheme) {
        console.log(`Root component: No user selected theme found, applying daily theme: ${todayTheme}`);
        
        // Save the theme to localStorage
        localStorage.removeItem('colorTheme'); // Clear any existing theme
        localStorage.setItem('colorTheme', todayTheme);
        
        // Apply the theme pattern
        applyThemePattern(todayTheme);
        
        // Apply the theme colors
        applyThemeColors(todayTheme);
        
        // Force a reload to ensure the theme is applied
        window.location.reload();
      } else {
        console.log(`Root component: User has manually selected theme: ${userSelectedTheme}`);
      }
    };
    
    // Function to apply theme patterns
    const applyThemePattern = (themeName) => {
      // Remove all pattern classes
      document.body.classList.remove(
        'pattern-sunday', 
        'pattern-monday', 
        'pattern-tuesday', 
        'pattern-wednesday', 
        'pattern-thursday', 
        'pattern-friday', 
        'pattern-saturday'
      );
      
      // Add the day-specific pattern class
      document.body.classList.add(`pattern-${themeName}`);
      console.log(`Root component: Applied pattern class pattern-${themeName}`);
    };
    
    // Function to apply theme colors
    const applyThemeColors = (themeName) => {
      const root = document.documentElement;
      const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
      
      // Theme color mapping
      const themeColors = {
        sunday: '#FF7F00',    // Orange
        monday: '#FFFFFF',    // White/Silver
        tuesday: '#FF0000',   // Red
        wednesday: '#00A651', // Green
        thursday: '#FFDF00',  // Yellow
        friday: '#87CEEB',    // Sky Blue
        saturday: '#000080'   // Navy Blue
      };
      
      // Get the primary color for the theme
      let primaryColor = themeColors[themeName];
      
      // Special handling for Monday (white) in light mode - use a light gray instead
      if (themeName === 'monday' && !isDarkMode) {
        primaryColor = '#b8c6db'; // Light blue-gray for better visibility in light mode
      } else if (themeName === 'monday' && isDarkMode) {
        primaryColor = '#d4e0ff'; // Light blue for dark mode
      }
      
      // Special handling for Saturday (dark blue/black) in dark mode - use a lighter shade
      if (themeName === 'saturday' && isDarkMode) {
        primaryColor = '#3a3a8c'; // Lighter shade of dark blue for dark mode
      }
      
      // Set primary colors
      root.style.setProperty('--ifm-color-primary', primaryColor);
      console.log(`Root component: Applied primary color ${primaryColor}`);
      
      // Generate and set derived colors
      const darkenPercent = (color, percent) => {
        // Skip for white (monday) and black (saturday)
        if (color === '#FFFFFF' || color === '#000000' || color === '#000080') {
          if (color === '#FFFFFF') return '#e6e6e6';
          if (color === '#000000') return '#1a1a1a';
          if (color === '#000080') return '#00005c';
        }
        
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        
        const darkenAmount = percent / 100;
        const dr = Math.floor(r * (1 - darkenAmount));
        const dg = Math.floor(g * (1 - darkenAmount));
        const db = Math.floor(b * (1 - darkenAmount));
        
        return `#${dr.toString(16).padStart(2, '0')}${dg.toString(16).padStart(2, '0')}${db.toString(16).padStart(2, '0')}`;
      };
      
      const lightenPercent = (color, percent) => {
        // Skip for white (monday) and black (saturday)
        if (color === '#FFFFFF' || color === '#000000' || color === '#000080') {
          if (color === '#FFFFFF') return '#ffffff';
          if (color === '#000000') return '#4d4d4d';
          if (color === '#000080') return '#0000b3';
        }
        
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        
        const lightenAmount = percent / 100;
        const lr = Math.min(255, Math.floor(r + (255 - r) * lightenAmount));
        const lg = Math.min(255, Math.floor(g + (255 - g) * lightenAmount));
        const lb = Math.min(255, Math.floor(b + (255 - b) * lightenAmount));
        
        return `#${lr.toString(16).padStart(2, '0')}${lg.toString(16).padStart(2, '0')}${lb.toString(16).padStart(2, '0')}`;
      };
      
      root.style.setProperty('--ifm-color-primary-dark', darkenPercent(primaryColor, 10));
      root.style.setProperty('--ifm-color-primary-darker', darkenPercent(primaryColor, 15));
      root.style.setProperty('--ifm-color-primary-darkest', darkenPercent(primaryColor, 25));
      root.style.setProperty('--ifm-color-primary-light', lightenPercent(primaryColor, 10));
      root.style.setProperty('--ifm-color-primary-lighter', lightenPercent(primaryColor, 15));
      root.style.setProperty('--ifm-color-primary-lightest', lightenPercent(primaryColor, 25));
    };
    
    // Check if this is a new day since the last visit
    const lastVisitDay = localStorage.getItem('lastVisitDay');
    const today = new Date().getDay().toString();
    
    if (lastVisitDay !== today) {
      console.log(`Root component: New day detected (last: ${lastVisitDay}, today: ${today})`);
      localStorage.setItem('lastVisitDay', today);
      
      // Only apply the daily theme if the user hasn't manually selected one
      if (!localStorage.getItem('userSelectedTheme')) {
        applyDailyTheme();
      }
    }
    
    // Check for theme changes at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeUntilMidnight = tomorrow - now;
    console.log(`Root component: Time until midnight: ${timeUntilMidnight}ms`);
    
    // Set a timeout to update the theme at midnight
    const midnightTimeout = setTimeout(() => {
      localStorage.removeItem('lastVisitDay'); // Reset the last visit day
      applyDailyTheme();
      
      // Set up a daily interval after the first midnight
      setInterval(() => {
        localStorage.removeItem('lastVisitDay');
        applyDailyTheme();
      }, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);
    
    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(midnightTimeout);
    };
  }, []);

  return <>{children}</>;
}
