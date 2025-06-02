import React from 'react';
import Link from '@docusaurus/Link';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HomepageBlogPosts(): JSX.Element {
  // Hardcoded recent blog posts for the homepage
  const recentPosts = [
    {
      id: 'threat-modeling',
      title: 'Threat Modeling for Autonomous AI',
      date: '2025-05-16',
      formattedDate: 'May 16, 2025',
      permalink: '/blog/threat-modeling-autonomous-ai',
      description: 'Learn about the OWASP threat modeling approach for autonomous AI systems and how to secure your AI agents.',
      tags: ['AI security', 'threat modeling', 'OWASP']
    },
    {
      id: 'data-governance',
      title: 'From Data Chaos to Data Confidence',
      date: '2025-05-02',
      formattedDate: 'May 2, 2025',
      permalink: '/blog/data-governance-playbook',
      description: 'A pragmatic playbook for implementing self-sustaining data governance in your organization.',
      tags: ['data governance', 'data strategy', 'organizational culture']
    },
    {
      id: 'digital-standstill',
      title: 'Tackling Digital Standstill Through the Theory of Constraints',
      date: '2024-08-23',
      formattedDate: 'August 23, 2024',
      permalink: '/blog/digital-standstill-theory-constraints',
      description: 'How to apply the Theory of Constraints to overcome technical debt and digital standstill.',
      tags: ['technical debt', 'theory of constraints', 'digital transformation']
    }
  ];

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <div className={styles.blogSectionHeader}>
          <h2 className={styles.blogSectionTitle}>Recent Blog Posts</h2>
          <Link to="/blog" className={styles.viewAllLink}>
            View All Posts
          </Link>
        </div>
        <div className="row">
          {recentPosts.map((post) => (
            <div key={post.id} className="col col--4">
              <div className={styles.blogCard}>
                <div className={styles.blogCardContent}>
                  <h3 className={styles.blogCardTitle}>
                    <Link to={post.permalink}>{post.title}</Link>
                  </h3>
                  <div className={styles.blogCardMeta}>
                    <time dateTime={post.date}>{post.formattedDate}</time>
                  </div>
                  <p className={styles.blogCardDescription}>
                    {post.description}
                  </p>
                  <div className={styles.blogCardTags}>
                    {post.tags.map((tag, index) => (
                      <span key={index} className={styles.blogCardTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
