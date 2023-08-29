import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.modules.css';


export default function HomepageHeader() {
    const {siteConfig, i18n } = useDocusaurusContext();
    let isIS = (i18n.currentLocale === "is"); 
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title",styles.title)}>{isIS ? siteConfig.customFields.titleICE : siteConfig.title}</h1>
          <p className={clsx("hero__subtitle", styles.underTitle)}>{isIS ? siteConfig.customFields.taglineICE : siteConfig.tagline}</p>

        </div>
        <a href="https://www.freepik.com/free-photo/website-hosting-concept-with-circuits_26412535.htm#query=server&position=9&from_view=search&track=sph" className={styles.IMGlicense}>Freepik</a>
      </header>
    );
  }
