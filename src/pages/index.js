import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './../css/index.module.css';
import HomepageItems from '../components/Homepage/HomePage';
import HomepageHeader from '../components/Homepage/Header';



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
          <HomepageItems/>
      </main>
    </Layout>
  );
}
