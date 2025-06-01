import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import '../../css/patterns.css';

interface ThemeOption {
  name: string;
  label: string;
  icon: string;
  primaryColor: string;
  description: string;
  pattern: string;
}

const themes: ThemeOption[] = [
  {
    name: 'sunday',
    label: 'Sunday (Ravivāra)',
    icon: '☀️',
    primaryColor: '#FF7F00', // Orange
    description: 'Ruled by the Sun (Sūrya), brings vitality and success',
    pattern: 'Interlaced Triangles (Shatkona)'
  },
  {
    name: 'monday',
    label: 'Monday (Somavāra)',
    icon: '🌙',
    primaryColor: '#FFFFFF', // White
    description: 'Ruled by the Moon (Soma/Chandra), symbolizes purity and calmness',
    pattern: 'Circles and Crescents'
  },
  {
    name: 'tuesday',
    label: 'Tuesday (Maṅgalavāra)',
    icon: '🔥',
    primaryColor: '#FF0000', // Red
    description: 'Governed by Mars (Maṅgala), represents fiery energy',
    pattern: 'Upward Triangle (Trikona)'
  },
  {
    name: 'wednesday',
    label: 'Wednesday (Budhavāra)',
    icon: '🌿',
    primaryColor: '#00A651', // Green
    description: 'Corresponds to Mercury (Budha), aligns with growth and intellect',
    pattern: 'Square Grid (mini-squares)'
  },
  {
    name: 'thursday',
    label: 'Thursday (Guruvar)',
    icon: '✨',
    primaryColor: '#FFDF00', // Yellow
    description: 'Under Jupiter (Bṛhaspati/Guru), represents wisdom and learning',
    pattern: 'Interlaced Triangles/Hexagon'
  },
  {
    name: 'friday',
    label: 'Friday (Shukravāra)',
    icon: '💙',
    primaryColor: '#87CEEB', // Light Blue
    description: 'Ruled by Venus (Śukra), symbolizes harmony and beauty',
    pattern: 'Circle/Bindu and Lotus Petals'
  },
  {
    name: 'saturday',
    label: 'Saturday (Śanivāra)',
    icon: '🌑',
    primaryColor: '#000080', // Dark Blue (using dark blue instead of black for better UI)
    description: 'Belongs to Saturn (Śani), represents discipline and structure',
    pattern: 'Solid Square Grid'
  }
];

export default function ThemeSelector(): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<string>('sunday');
  
  useEffect(() => {
    // Listen for the dailyThemeApplied event from Root component
    const handleDailyThemeApplied = () => {
      // Get the current theme from localStorage (which should have been set by Root)
      const currentThemeFromStorage = localStorage.getItem('colorTheme');
      if (currentThemeFromStorage) {
        console.log(`ThemeSelector: Detected theme change from Root component: ${currentThemeFromStorage}`);
        setCurrentTheme(currentThemeFromStorage);
      }
    };
    
    // Add event listener
    document.addEventListener('dailyThemeApplied', handleDailyThemeApplied);
    
    // Get the current theme from localStorage
    const savedTheme = localStorage.getItem('colorTheme');
    if (savedTheme) {
      console.log(`ThemeSelector: Initial theme from localStorage: ${savedTheme}`);
      setCurrentTheme(savedTheme);
    } else {
      // If no theme in localStorage, get today's theme
      const today = new Date().getDay();
      const dayThemeMap = {
        0: 'sunday', 1: 'monday', 2: 'tuesday', 3: 'wednesday', 
        4: 'thursday', 5: 'friday', 6: 'saturday'
      };
      const todayTheme = dayThemeMap[today];
      console.log(`ThemeSelector: No theme in localStorage, using today's theme: ${todayTheme}`);
      setCurrentTheme(todayTheme);
    }
    
    // Clean up event listener
    return () => {
      document.removeEventListener('dailyThemeApplied', handleDailyThemeApplied);
    };
  }, []);
  
  const applyTheme = (themeName: string) => {
    const theme = themes.find(t => t.name === themeName);
    if (!theme) return;
    
    const root = document.documentElement;
    
    // Apply theme colors based on current mode (light/dark)
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // Special handling for Monday (white) in light mode - use a light gray instead
    let primaryColor = theme.primaryColor;
    if (theme.name === 'monday' && !isDarkMode) {
      primaryColor = '#b8c6db'; // Light blue-gray for better visibility in light mode
    } else if (theme.name === 'monday' && isDarkMode) {
      primaryColor = '#d4e0ff'; // Light blue for dark mode
    }
    
    // Special handling for Saturday (dark blue/black) in dark mode - use a lighter shade
    if (theme.name === 'saturday' && isDarkMode) {
      primaryColor = '#3a3a8c'; // Lighter shade of dark blue for dark mode
    }
    
    // Set primary colors
    root.style.setProperty('--ifm-color-primary', primaryColor);
    
    // Generate and set derived colors
    const darkenPercent = (color: string, percent: number): string => {
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
    
    const lightenPercent = (color: string, percent: number): string => {
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
    
    // Apply the day-specific pattern
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
    
    // Create a custom event to notify other components about the theme change
    const event = new CustomEvent('themeChanged', { detail: { theme: themeName } });
    document.dispatchEvent(event);
    
    // Save theme preference
    localStorage.setItem('colorTheme', themeName);
    localStorage.setItem('userSelectedTheme', 'true'); // Mark as user selected
    setCurrentTheme(themeName);
    
    console.log(`ThemeSelector: User manually selected theme: ${themeName}`);
  };
  
  return (
    <div className={styles.themeSelector}>
      <h2 className={styles.themeTitle}>Select Theme Color</h2>
      <p className={styles.themeDescription}>
        Based on traditional Hindu weekday color associations and yantra patterns
      </p>
      <div className={styles.themeOptions}>
        {themes.map((theme) => (
          <button
            key={theme.name}
            className={`${styles.themeButton} ${currentTheme === theme.name ? styles.themeButtonActive : ''}`}
            onClick={() => applyTheme(theme.name)}
            style={{ '--theme-color': theme.primaryColor } as React.CSSProperties}
            aria-label={`Switch to ${theme.label} theme`}
            title={theme.label}
          >
            <span className={styles.themeIcon}>{theme.icon}</span>
            <span className={styles.themeName}>{theme.label}</span>
            <div className={styles.themeDetails}>
              <span className={styles.themeDescription}>{theme.description}</span>
              <span className={styles.themePattern}>Pattern: {theme.pattern}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
