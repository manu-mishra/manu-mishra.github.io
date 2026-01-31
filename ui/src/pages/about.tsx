import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import PageHeader from '../components/PageHeader';
import styles from './about.module.css';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Me"
      description="About Manu Mishra - Solutions Architect & Applied Software Engineer">
      <Head>
        <meta property="og:image" content="https://manumishra.com/img/manu-mishra-professional-headshot.jpg" />
        <meta name="twitter:image" content="https://manumishra.com/img/manu-mishra-professional-headshot.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PageHeader title="About Me" />
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.aboutContent}>
              <div className={styles.profileImageContainer}>
                <img src="/img/manu-mishra-professional-headshot.jpg" alt="Manu Mishra - Solutions Architect & Applied Software Engineer" className={styles.profileImage} />
                <div className={styles.profileContent}>
                  <h2>Hi, I'm Manu Mishra</h2>
                  <p>
                    I'm a Solutions Architect with 18 years of experience in information technology and software industry. 
                    I provide value in all areas of digital transformation and software delivery, understanding both business 
                    and technical aspects of developing and running software systems at web scale.
                  </p>
                </div>
              </div>
              
              <h3>My Expertise</h3>
              <ul>
                <li><strong>Cloud Architecture:</strong> Designing scalable, resilient systems on AWS and Azure with mastery in cloud design patterns</li>
                <li><strong>Software Engineering:</strong> Developing high-quality, maintainable code with modern best practices</li>
                <li><strong>Technical Leadership:</strong> Leading teams across global locations and mentoring developers</li>
                <li><strong>API & Microservices:</strong> Implementing API-first approaches with domain-driven design</li>
                <li><strong>DevOps & Infrastructure:</strong> Implementing CI/CD pipelines and infrastructure as code</li>
                <li><strong>Security:</strong> Threat modeling, defense in depth strategies, and identity management</li>
              </ul>
              
              <h3>Professional Philosophy</h3>
              <p>
                I believe in designing evolvable systems that align with business goals while maintaining technical excellence. 
                I'm passionate about continuous learning and staying up-to-date with the latest technologies and best practices. 
                I enjoy collaborating with cross-functional teams to deliver high-quality solutions that solve complex business problems.
              </p>
              
              <h3>Key Achievements</h3>
              <ul>
                <li>Reduced time to market by implementing SOP-based software delivery processes</li>
                <li>Exceeded uptime SLO targets by prioritizing resiliency for critical applications</li>
                <li>Reduced cloud spending by up to 70% through performance optimization</li>
                <li>Led technical delivery of SaaS versions of multimillion-dollar products</li>
                <li>Delivered large IoT projects in home automation and connected cars domains</li>
              </ul>
              
              <h3>Beyond Technology</h3>
              <p>
                I love sharing my experiences in cloud design patterns, system architecture, API-first approaches, 
                immutable infrastructure, and identity management for SaaS solutions. I'm passionate about fostering 
                psychological safety in teams and building lifelong relationships with peers and partners.
              </p>
              
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new projects, opportunities, or just chatting about technology. 
                Feel free to reach out to me on <a href="https://github.com/manu-mishra">GitHub</a> or 
                <a href="https://linkedin.com/in/manu-mishra"> LinkedIn</a>.
              </p>
              
              <div className={styles.skillsSection}>
                <h3>Technical Skills</h3>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>AWS Lambda</span>
                  <span className={styles.skillTag}>Amazon Bedrock</span>
                  <span className={styles.skillTag}>Amazon S3</span>
                  <span className={styles.skillTag}>Kinesis</span>
                  <span className={styles.skillTag}>Python</span>
                  <span className={styles.skillTag}>Terraform</span>
                  <span className={styles.skillTag}>Docker</span>
                  <span className={styles.skillTag}>Serverless</span>
                  <span className={styles.skillTag}>LLMs & GenAI</span>
                  <span className={styles.skillTag}>Machine Learning</span>
                  <span className={styles.skillTag}>Apache Iceberg</span>
                  <span className={styles.skillTag}>Streaming Analytics</span>
                  <span className={styles.skillTag}>Data Governance</span>
                  <span className={styles.skillTag}>Lake Formation</span>
                  <span className={styles.skillTag}>Azure</span>
                  <span className={styles.skillTag}>C#</span>
                  <span className={styles.skillTag}>.NET</span>
                  <span className={styles.skillTag}>JavaScript</span>
                  <span className={styles.skillTag}>TypeScript</span>
                  <span className={styles.skillTag}>Angular</span>
                  <span className={styles.skillTag}>Kubernetes</span>
                  <span className={styles.skillTag}>Service Fabric</span>
                  <span className={styles.skillTag}>SQL Server</span>
                  <span className={styles.skillTag}>Cosmos DB</span>
                  <span className={styles.skillTag}>Redis</span>
                  <span className={styles.skillTag}>IoT</span>
                  <span className={styles.skillTag}>API Design</span>
                  <span className={styles.skillTag}>Microservices</span>
                  <span className={styles.skillTag}>DevOps</span>
                  <span className={styles.skillTag}>Infrastructure as Code</span>
                  <span className={styles.skillTag}>EventBridge</span>
                  <span className={styles.skillTag}>Cost Optimization</span>
                </div>
              </div>
              
              <div className={styles.certificationsSection}>
                <h3>Certifications</h3>
                <ul>
                  <li>AWS Certified AI Practitioner</li>
                  <li>AWS Certified DevOps Engineer - Professional</li>
                  <li>AWS Certified Machine Learning Engineer - Associate</li>
                  <li>AWS Certified SysOps Administrator - Associate</li>
                  <li>AWS Certified Machine Learning - Specialty</li>
                  <li>AWS Certified Data Analytics - Specialty</li>
                  <li>AWS Certified Solutions Architect - Professional</li>
                  <li>AWS Certified Developer - Associate</li>
                  <li>AWS Certified Cloud Practitioner</li>
                  <li>AWS Certified Solutions Architect - Associate</li>
                  <li>Microsoft Certified Solution Expert (MCSE)</li>
                  <li>Azure Solution Architect (70-532, 70-533, 70-534)</li>
                  <li>Azure Big Data and Data Platform (70-473, 70-475)</li>
                  <li>Xamarin Certified Mobile Developer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
