import React from 'react';
import Layout from '@theme/Layout';
import Timeline, { TimelineItem } from '../components/Timeline';
import styles from './experience.module.css';

const experienceItems: TimelineItem[] = [
  {
    date: 'September 2022 - Present',
    title: 'Senior Solutions Architect',
    company: 'Amazon Web Services (AWS)',
    description: [
      'Provide architectural solutions to Digital Native Business customers generating around 100 million in annual recurring revenue.',
      'Work closely with customers to ensure their technology infrastructure aligns with business goals.',
      'Design scalable and reliable cloud solutions to support customer operations.',
      'Implement best practices following AWS Well-Architected Framework.',
      'Advise on cloud migration strategies, cost optimization, and security best practices.'
    ],
    technologies: ['AWS Services', 'Cloud Architecture', 'Well-Architected Framework', 'Solution Design', 'Cost Optimization']
  },
  {
    date: 'November 2019 - September 2022',
    title: 'Lead Product Architect',
    company: 'Wolters Kluwer, Tax and Accounting',
    description: [
      'Led technical delivery of the first SaaS version of a multimillion-dollar revenue generation desktop product.',
      'Led a team of Product Architects across Platform Services and Global Audit verticals.',
      'Spearheaded modernization of legacy applications and infrastructure with container adoption.',
      'Managed technical debt and realigned applications towards API-first initiatives.',
      'Led data-driven Audit initiatives with data lake expansion.'
    ],
    technologies: ['Azure', 'Containers', 'API Design', 'Microservices', 'Data Lakes', 'SaaS Architecture']
  },
  {
    date: 'August 2017 - November 2019',
    title: 'Technical Consultant',
    company: 'ComTec Information Systems',
    description: [
      'Served as Tech Lead for Wolters Kluwer, leading an agile team of 6 people.',
      'Ensured production readiness of new global Audit software with high scalability.',
      'Implemented zero-downtime deployment strategy with Service Fabric clusters.',
      'Achieved 50x performance improvement and reduced cloud spending by ~70%.',
      'Enhanced security through defense in depth, distributed identity flows, and MFA.'
    ],
    technologies: ['Azure', 'Service Fabric', 'Cosmos DB', 'VSTS', 'Infrastructure as Code', 'DevOps']
  },
  {
    date: 'May 2013 - July 2017',
    title: 'Technical Consultant / Development Lead',
    company: 'Microsoft Corporation',
    description: [
      'Delivered large IoT projects in home automation and connected cars domains as Tech Lead.',
      'Led TATA Motors connected cars project and Glen Dimplex connected homes project.',
      'Specialized in Azure PaaS services and modern Windows apps.',
      'Conducted in-person technical enablement sessions across Asia Pacific region.',
      'Recognized as key talent and received multiple awards.'
    ],
    technologies: ['Azure IoT Hub', 'Event Hubs', 'Stream Analytics', 'Service Fabric', 'Microservices', 'Xamarin Forms']
  },
  {
    date: 'September 2011 - May 2013',
    title: 'Senior Software Engineer',
    company: 'Bank of America',
    description: [
      'Worked on COMMIT suite of Tier-1 applications used by 18 different lines of business.',
      'Developed enhancements and fixed defects in existing applications.',
      'Made existing systems 100% compliant with bank policies.',
      'Planned and performed disaster recovery exercises.'
    ],
    technologies: ['ASP.NET', 'JavaScript', 'SQL Server', 'Windows Services', 'Enterprise Bus', 'Java']
  },
  {
    date: 'April 2010 - September 2011',
    title: 'Software Engineer',
    company: 'Verizon Data Services',
    description: [
      'Developed tools used by field engineers in Verizon Telecommunication.',
      'Created Windows services for automation of Data Feed Management.',
      'Developed Feed management UI for analyzing historical trends.'
    ],
    technologies: ['C#', 'WPF', 'Windows Services', 'ASP.NET', 'Silverlight', 'JavaScript']
  },
  {
    date: 'June 2008 - April 2010',
    title: 'Software Engineer',
    company: 'Shivam Medisoft Services',
    description: [
      'Developed Neo Soft hospital management system used by 300+ hospitals in India.',
      'Built web-based CRM system for customer issue tracking and market analysis.',
      'Created applications interfacing with medical DICOM machines.'
    ],
    technologies: ['ASP.NET', 'C#', 'AJAX', 'JavaScript', 'MS-SQL', 'WPF']
  }
];

export default function Experience(): JSX.Element {
  return (
    <Layout
      title="Professional Experience"
      description="Manu Mishra's professional experience and career timeline">
      <header className={styles.experienceHeader}>
        <div className="container">
          <h1>Professional Experience</h1>
          <p>My journey through the tech industry</p>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <Timeline items={experienceItems} />
      </main>
    </Layout>
  );
}
