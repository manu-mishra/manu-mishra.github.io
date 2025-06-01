import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--2 col--offset-5" style={{marginBottom: '1rem'}}>
            <img src="/img/logo.png" alt="Manu Mishra" className="avatar avatar--xl" style={{borderRadius: '50%'}} />
          </div>
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Read My Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Manu Mishra's personal blog">
      <HomepageHeader />
      <main>
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h2">Welcome to my blog</Heading>
              <p>
                I write about technology, software development, and other topics that interest me.
                Feel free to explore my blog posts and connect with me on GitHub or LinkedIn.
              </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--lg margin-right--md"
                  to="/blog">
                  View All Posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
