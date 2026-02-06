import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import PageHeader from '../components/PageHeader';
import StructuredData from '../components/StructuredData';
import styles from './about.module.css';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Manu Mishra - Distinguished Solutions Architect, Author & Researcher"
      description="Learn about Manu Mishra's 18+ years of experience in AI, machine learning, cloud architecture, and enterprise solutions. Technical author, researcher, and industry-leading solutions architect.">
      <Head>
        <meta name="keywords" content="Manu Mishra, About, Solutions Architect, AI Expert, Machine Learning, Cloud Architecture, Technical Author, Researcher, AWS" />
        <meta property="og:title" content="About Manu Mishra - Distinguished Solutions Architect, Author & Researcher" />
        <meta property="og:description" content="Learn about Manu Mishra's 18+ years of experience in AI, machine learning, cloud architecture, and enterprise solutions." />
        <meta property="og:image" content="https://manumishra.com/img/manu-mishra-professional-headshot.jpg" />
        <meta name="twitter:title" content="About Manu Mishra - Distinguished Solutions Architect, Author & Researcher" />
        <meta name="twitter:description" content="Learn about Manu Mishra's 18+ years of experience in AI, machine learning, cloud architecture, and enterprise solutions." />
        <meta name="twitter:image" content="https://manumishra.com/img/manu-mishra-professional-headshot.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "dateCreated": "2024-01-01T00:00:00-05:00",
          "dateModified": new Date().toISOString(),
          "mainEntity": {
            "@type": "Person",
            "name": "Manu Mishra",
            "alternateName": "Manu Mishra",
            "identifier": "manu-mishra",
            "interactionStatistic": [
              {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/WriteAction",
                "userInteractionCount": 18
              }
            ],
            "agentInteractionStatistic": {
              "@type": "InteractionCounter",
              "interactionType": "https://schema.org/WriteAction",
              "userInteractionCount": 18
            },
            "description": "Distinguished Solutions Architect and Applied Software Engineer with 18+ years of experience. (Pronounced: Manū Mishrā)",
            "image": {
              "@type": "ImageObject",
              "url": "https://manumishra.com/img/manu-mishra-professional-headshot.webp",
              "width": "928",
              "height": "1120",
              "caption": "Manu Mishra Professional Headshot"
            },
            "jobTitle": "Distinguished Solutions Architect",
            "sameAs": [
              "https://github.com/manu-mishra",
              "https://linkedin.com/in/manu-mishra"
            ],
            "knowsAbout": [
              "AWS Lambda", "Amazon Bedrock", "Amazon S3", "Kinesis", "Python", "Terraform", "Docker", "Serverless",
              "LLMs & GenAI", "Machine Learning", "Apache Iceberg", "Streaming Analytics", "Data Governance",
              "Lake Formation", "Azure", "C#", ".NET", "JavaScript", "TypeScript", "Angular", "Kubernetes",
              "Service Fabric", "SQL Server", "Cosmos DB", "Redis", "IoT", "API Design", "Microservices",
              "DevOps", "Infrastructure as Code", "EventBridge", "Cost Optimization"
            ]
          }
        }}
      />
      <PageHeader title="About Me" />
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.aboutContent}>
              <div className={styles.profileImageContainer}>
                <img src="/img/manu-mishra-professional-headshot.webp" alt="Manu Mishra - Solutions Architect & Applied Software Engineer" className={styles.profileImage} />
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
