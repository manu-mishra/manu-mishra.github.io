import React from 'react';
import styles from './styles.module.css';

export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string[] | React.ReactNode;
  technologies?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className={styles.timelineContainer}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.timelineItem}
          id={`timeline-item-${index}`}
        >
          <div className={styles.timelineLeft}>
            <div className={styles.timelineDate}>{item.date}</div>
            <div className={styles.timelineCompany}>{item.company}</div>
          </div>
          <div className={styles.timelineRight}>
            <h3 className={styles.timelineTitle}>{item.title}</h3>
            <div className={styles.timelineDescription}>
              {Array.isArray(item.description) ? (
                <ul>
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                item.description
              )}
            </div>
            {item.technologies && (
              <div className={styles.timelineTags}>
                {item.technologies.map((tech, i) => (
                  <span key={i} className={styles.timelineTag}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
