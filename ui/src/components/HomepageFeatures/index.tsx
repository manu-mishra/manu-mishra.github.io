import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Software Engineering',
    image: '/img/undraw_programming.svg',
    description: (
      <>
        Experienced in building scalable, maintainable software solutions
        using modern technologies and best practices.
      </>
    ),
  },
  {
    title: 'Cloud Architecture',
    image: '/img/undraw_cloud.svg',
    description: (
      <>
        Designing and implementing cloud-native applications with a focus
        on reliability, security, and performance.
      </>
    ),
  },
  {
    title: 'Technical Leadership',
    image: '/img/undraw_team.svg',
    description: (
      <>
        Leading development teams, mentoring engineers, and driving
        technical excellence across projects.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
