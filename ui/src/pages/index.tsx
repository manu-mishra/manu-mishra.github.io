import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  // Get the current theme from localStorage
  const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('colorTheme') || 'sunday' : 'sunday';
  
  return (
    <header className={clsx('hero', styles.heroBanner, `pattern-${savedTheme}-hero`)}>
      <div className="container">
        <div className={styles.visitingCard}>
          <div className={styles.visitingCardContent}>
            <div className={styles.visitingCardLeft}>
              <img 
                src="/img/logo.png" 
                alt="Manu Mishra" 
                className={styles.profileImage} 
              />
            </div>
            <div className={styles.visitingCardRight}>
              <h1 className={styles.title}>{siteConfig.title}</h1>
              <p className={styles.subtitle}>{siteConfig.tagline}</p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>mishra.manu@outlook.com</span>
                </div>
                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>linkedin.com/in/manu-mishra</span>
                </div>
                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <span>github.com/manu-mishra</span>
                </div>
                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Dallas, Texas</span>
                </div>
              </div>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--lg"
                  to="/experience">
                  View My Experience
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  to="/about">
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroBackground}>
        <div className={styles.heroBackgroundInner}>
          <div className={styles.heroBackgroundCircle1}></div>
          <div className={styles.heroBackgroundCircle2}></div>
          <div className={styles.heroBackgroundCircle3}></div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, icon, link}) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <Link to={link} className={styles.featureCardLink}>
        <div className={styles.featureCardContent}>
          <div className={styles.featureCardIcon}>{icon}</div>
          <h3 className={styles.featureCardTitle}>{title}</h3>
          <p className={styles.featureCardDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <FeatureCard
            title="Cloud Architecture"
            description="Designing scalable, resilient systems on AWS and Azure with mastery in cloud design patterns."
            icon="☁️"
            link="/experience"
          />
          <FeatureCard
            title="Technical Leadership"
            description="Leading teams across global locations and mentoring developers to deliver high-quality solutions."
            icon="🚀"
            link="/experience"
          />
          <FeatureCard
            title="API & Microservices"
            description="Implementing API-first approaches with domain-driven design for modern cloud services."
            icon="🔌"
            link="/experience"
          />
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const technologies = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '☁️' },
    { name: 'C#', icon: '💻' },
    { name: 'JavaScript', icon: '💻' },
    { name: 'TypeScript', icon: '💻' },
    { name: '.NET', icon: '💻' },
    { name: 'Angular', icon: '🔄' },
    { name: 'Kubernetes', icon: '🚢' },
    { name: 'Containers', icon: '📦' },
    { name: 'Microservices', icon: '🧩' },
    { name: 'SQL Server', icon: '🗄️' },
    { name: 'Cosmos DB', icon: '🗄️' },
  ];

  return (
    <section className={styles.techStackSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <div className={styles.techStackGrid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <span className={styles.techIcon}>{tech.icon}</span>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Manu Mishra - Solutions Architect & Applied Software Engineer">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <TechStack />
        <div className={styles.ctaSection}>
          <div className="container">
            <h2>Let's Connect</h2>
            <p>Interested in discussing cloud architecture, software design, or potential collaborations?</p>
            <div className={styles.ctaButtons}>
              <Link
                className="button button--lg button--primary"
                href="https://github.com/manu-mishra">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </Link>
              <Link
                className="button button--lg button--primary"
                href="https://linkedin.com/in/manu-mishra">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </Link>
              <Link
                className="button button--lg button--primary"
                href="mailto:mishra.manu@outlook.com">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
