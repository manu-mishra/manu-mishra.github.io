import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string[];
  technologies?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({items}: TimelineProps): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>('');

  // Generate IDs for each timeline item based on company name
  const getItemId = (company: string): string => {
    return company.toLowerCase().replace(/\s+/g, '-');
  };

  // Check which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => getItemId(item.company));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  return (
    <div className="row">
      <div className="col col--3">
        <div className={styles.timelineNav}>
          <h4>Navigation</h4>
          <ul className={styles.navList}>
            {items.map((item) => {
              const id = getItemId(item.company);
              return (
                <li key={id} className={styles.navItem}>
                  <a 
                    href={`#${id}`} 
                    className={clsx(
                      styles.navLink,
                      activeSection === id && styles.navLinkActive
                    )}
                  >
                    {item.company}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col col--9">
        <div className={styles.timelineContainer}>
          {items.map((item, idx) => {
            const id = getItemId(item.company);
            return (
              <div 
                key={idx} 
                id={id}
                className={styles.timelineItem}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.date}>{item.date}</div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <h4 className={styles.company}>{item.company}</h4>
                  {item.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  {item.technologies && (
                    <div className={styles.technologies}>
                      <strong>Technologies:</strong>
                      <div className={styles.techTags}>
                        {item.technologies.map((tech, i) => (
                          <span key={i} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
