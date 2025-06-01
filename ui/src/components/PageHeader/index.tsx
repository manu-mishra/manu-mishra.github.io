import React, { ReactNode, useEffect, useState } from 'react';
import styles from './styles.module.css';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, description, children }: PageHeaderProps): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<string>('sunday');
  
  useEffect(() => {
    // Get the current theme from localStorage
    const savedTheme = localStorage.getItem('colorTheme') || 'sunday';
    setCurrentTheme(savedTheme);
    
    // Listen for theme changes
    const handleThemeChange = () => {
      const updatedTheme = localStorage.getItem('colorTheme') || 'sunday';
      setCurrentTheme(updatedTheme);
    };
    
    // Add event listeners
    window.addEventListener('storage', handleThemeChange);
    document.addEventListener('themeChanged', handleThemeChange);
    
    return () => {
      // Clean up event listeners
      window.removeEventListener('storage', handleThemeChange);
      document.removeEventListener('themeChanged', handleThemeChange);
    };
  }, []);
  
  // Generate the pattern style based on the current theme
  const getPatternStyle = () => {
    switch(currentTheme) {
      case 'sunday':
        return {
          backgroundImage: `
            repeating-linear-gradient(60deg, rgba(255, 127, 0, 0.1) 0px, rgba(255, 127, 0, 0.1) 1px, transparent 1px, transparent 15px),
            repeating-linear-gradient(120deg, rgba(255, 127, 0, 0.1) 0px, rgba(255, 127, 0, 0.1) 1px, transparent 1px, transparent 15px),
            repeating-linear-gradient(0deg, rgba(255, 127, 0, 0.05) 0px, rgba(255, 127, 0, 0.05) 1px, transparent 1px, transparent 15px)
          `,
          backgroundSize: '30px 30px'
        };
      case 'monday':
        return {
          backgroundImage: `
            radial-gradient(circle, rgba(184, 198, 219, 0.2) 1px, transparent 6px),
            radial-gradient(circle, rgba(184, 198, 219, 0.15) 1px, transparent 4px)
          `,
          backgroundSize: '30px 30px, 20px 20px',
          backgroundPosition: '0 0, 15px 15px'
        };
      case 'tuesday':
        return {
          backgroundImage: `
            linear-gradient(45deg, rgba(255, 0, 0, 0.1) 25%, transparent 25%),
            linear-gradient(135deg, rgba(255, 0, 0, 0.1) 25%, transparent 25%)
          `,
          backgroundSize: '20px 20px'
        };
      case 'wednesday':
        return {
          backgroundImage: `
            linear-gradient(0deg, rgba(0, 166, 81, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 166, 81, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '15px 15px'
        };
      case 'thursday':
        return {
          backgroundImage: `
            repeating-linear-gradient(30deg, rgba(255, 223, 0, 0.1) 0px, rgba(255, 223, 0, 0.1) 1px, transparent 1px, transparent 15px),
            repeating-linear-gradient(150deg, rgba(255, 223, 0, 0.1) 0px, rgba(255, 223, 0, 0.1) 1px, transparent 1px, transparent 15px),
            repeating-linear-gradient(90deg, rgba(255, 223, 0, 0.05) 0px, rgba(255, 223, 0, 0.05) 1px, transparent 1px, transparent 15px)
          `,
          backgroundSize: '25px 25px'
        };
      case 'friday':
        return {
          backgroundImage: `
            radial-gradient(circle, rgba(135, 206, 235, 0.15) 3px, transparent 3px),
            radial-gradient(circle, rgba(135, 206, 235, 0.1) 1px, transparent 5px)
          `,
          backgroundSize: '30px 30px, 40px 40px',
          backgroundPosition: '0 0, 15px 15px'
        };
      case 'saturday':
        return {
          backgroundImage: `
            linear-gradient(0deg, transparent 24px, rgba(0, 0, 128, 0.1) 25px, rgba(0, 0, 128, 0.1) 26px, transparent 27px, transparent 49px),
            linear-gradient(90deg, transparent 24px, rgba(0, 0, 128, 0.1) 25px, rgba(0, 0, 128, 0.1) 26px, transparent 27px, transparent 49px)
          `,
          backgroundSize: '50px 50px'
        };
      default:
        return {};
    }
  };

  return (
    <header className={styles.pageHeader}>
      <div 
        className={styles.pageHeaderBackground}
        style={getPatternStyle()}
      ></div>
      <div className="container">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  );
}
