import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// Docusaurus
import Translate, { translate } from '@docusaurus/Translate'

// Custom
import { Globe } from '@site/src/components/Globe';
import { SplineKeyboard } from '../components/SplineKeyboard';



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
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
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`AkaCoder404`}
      description="Description will go into a meta tag in <head />">
      <HomeBanner />
      {/* <HomepageHeader /> */}

      <main>
        {/* <IntroductionBanner /> */}
        <IntroductionBanner />
        <HomepageFeatures />

        {/* TODO: add interactive spline keyboard */}
        <SoftwareDevBanner />


        {/* TODO: shift globe to left and add some text about my self */}
        <AboutmeBanner />
      </main>
    </Layout>
  );
}

function HomeBanner() {
  return (
    <div className={styles.homeBanner}>
      🚧 This website is a work in progress 🚧
    </div>
  );
}

// 
function IntroductionBanner() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.introductionBanner}>
      <div className="logo">
        {/* <img src={useBaseUrl('img/relay-white.svg')} /> */}
      </div>

      <h1> <Translate>{'Hi, my name is'}</Translate> </h1>
      <h2> George Li </h2>
      <h3> <Translate>{'I am a software engineer.'}</Translate> </h3>
      <p>
        I’m a software engineer specializing in building (and occasionally designing) exceptional
        software experiences. Currently, I am a undergraduate student
        at{' '}
        <a href="https://www.tsinghua.edu.cn/" target="_blank" rel="noreferrer">
          Tsinghua University
        </a> studying computer science and technology.
      </p>
      <div className={styles.introButton}>
        <a
          className="button"
          href="https://www.github.com/AkaCoder404"
          target="_blank">
          Checkout my github!
        </a>

      </div>
    </div>
  );
}


function SoftwareDevBanner() {
  return (
    <div className={styles.softwareDevBanner}>
      <div className={styles.leftContent}>
        <h1> <Translate>{'I am a software engineer.'}</Translate> </h1>
        <p> Hint: Try typing 1234 ...</p>
        <p> Some things about me ... </p>
      </div>
      <div className={styles.rightContent}>
        <SplineKeyboard />
      </div>
    </div>
  );
}

function AboutmeBanner() {
  return (
    <div className={styles.aboutMeBanner}>
      <div className={styles.leftContent}>
        <Globe />
      </div>
      <div className={styles.rightContent}>
        <h1> <Translate>{'I studied at ...'}</Translate> </h1>
        <p> This globe shows where I've worked </p>
        <p> Perhaps I should add where http requests are coming from? </p>
      </div>
    </div>
  );
}