import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

// //autoNavigate user from front page to docs/intro section of website 
// function autoNavigate(){
//   const section = "docs/intro";

//   document.body.style.visibility = "hidden"; //The front page is displayed in a split second before being navigated to intro/doc (we want to hide it)
//   window.location.href = section; //navigation
// }

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  // autoNavigate();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
