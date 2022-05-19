import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Set up and Use',
    Svg: require('@site/static/img/OneClick-macOS-Simple-KVM logo.svg').default,
    description: (
      <>
        You can install macOS on windows or linux.
      </>
    ),
  },
  {
    title: 'Run your needed apps',
    Svg: require('@site/static/img/safari.svg').default,
    description: (
      <>
        You can run XCode and Final Cut Pro
      </>
    ),
  },
  {
    title: 'Or just use as a main OS',
    Svg: require('@site/static/img/xcode.svg').default,
    description: (
      <>
        If you allot the VM all of your memory and CPUs, you can use it as your main machine.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
