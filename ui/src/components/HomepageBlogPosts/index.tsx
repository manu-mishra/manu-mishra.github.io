import React from 'react';
import Link from '@docusaurus/Link';
import recentPosts from '@site/.docusaurus/recent-posts.json';
import styles from './styles.module.css';

export default function HomepageBlogPosts(): JSX.Element {
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
                    <Link to={post.metadata.permalink}>{post.metadata.title}</Link>
                  </h3>
                  <div className={styles.blogCardMeta}>
                    <time dateTime={post.metadata.date}>{post.metadata.formattedDate}</time>
                  </div>
                  <p className={styles.blogCardDescription}>
                    {post.metadata.description}
                  </p>
                  <div className={styles.blogCardTags}>
                    {post.metadata.tags.slice(0, 3).map((tag) => (
                      <span key={tag.label} className={styles.blogCardTag}>
                        {tag.label}
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
