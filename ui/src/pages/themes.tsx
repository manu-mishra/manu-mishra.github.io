import React from 'react';
import Layout from '@theme/Layout';
import ThemeSelector from '../components/ThemeSelector';
import PageHeader from '../components/PageHeader';
import styles from './themes.module.css';

export default function Themes(): JSX.Element {
  return (
    <Layout
      title="Theme Customization"
      description="Customize the theme of Manu Mishra's portfolio website">
      <PageHeader 
        title="Theme Customization"
        description="Select a color theme for the website"
      />
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <ThemeSelector />
            
            <div className={styles.themePreview}>
              <h2>Theme Preview</h2>
              
              <div className={styles.previewSection}>
                <h3>Typography</h3>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <p>This is a paragraph of text that demonstrates how the theme affects regular text content. The primary color is used for links <a href="#">like this one</a>.</p>
              </div>
              
              <div className={styles.previewSection}>
                <h3>Buttons</h3>
                <div className={styles.buttonGroup}>
                  <button className="button button--primary">Primary Button</button>
                  <button className="button button--secondary">Secondary Button</button>
                  <button className="button button--outline button--primary">Outline Button</button>
                </div>
              </div>
              
              <div className={styles.previewSection}>
                <h3>Cards</h3>
                <div className={styles.cardGroup}>
                  <div className={styles.previewCard}>
                    <h4>Card Title</h4>
                    <p>This is a sample card that shows how the theme affects card components.</p>
                  </div>
                  <div className={styles.previewCard}>
                    <h4>Interactive Card</h4>
                    <p>Hover over this card to see how the theme affects hover states.</p>
                  </div>
                  <div className={styles.previewCard}>
                    <h4>Card with Button</h4>
                    <p>Cards often contain interactive elements like buttons.</p>
                    <button className="button button--primary button--sm">Learn More</button>
                  </div>
                </div>
              </div>
              
              <div className={styles.previewSection}>
                <h3>Accent Elements</h3>
                <div className={styles.accentGroup}>
                  <div className={styles.accentItem}>
                    <div className={styles.accentCircle}></div>
                    <span>Primary</span>
                  </div>
                  <div className={styles.accentItem}>
                    <div className={styles.accentCircleDark}></div>
                    <span>Primary Dark</span>
                  </div>
                  <div className={styles.accentItem}>
                    <div className={styles.accentCircleLight}></div>
                    <span>Primary Light</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.themeInfo}>
              <h3>About Theme Customization</h3>
              <p>
                This page allows you to customize the color theme of the website. Your selection will be saved in your browser
                and applied across all pages. You can switch between themes at any time by returning to this page.
              </p>
              <p>
                The theme selector changes the primary color of the website, which affects buttons, links, accents, and other UI elements.
                The dark/light mode toggle in the navbar is independent of the color theme selection.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
