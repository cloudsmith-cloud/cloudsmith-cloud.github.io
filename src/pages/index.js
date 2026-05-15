import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const features = [
  {
    icon: '⚒️',
    title: 'Full Lifecycle Platform',
    description:
      'Plan, deploy, operate, update, and troubleshoot Azure Local and Hyper-V environments from one place — not a collection of scripts, spreadsheets, and tribal knowledge.',
  },
  {
    icon: '🤖',
    title: 'AI-Assisted Operations',
    description:
      'Intelligent log analysis, pattern matching against known issues, and guided troubleshooting workflows. AI enhances your team — your engineers still make the calls.',
  },
  {
    icon: '🏢',
    title: 'MSP-Ready Multi-Tenancy',
    description:
      'Manage multiple customers and sites from a single control plane. Built for managed service providers from day one, not bolted on after the fact.',
  },
  {
    icon: '🔌',
    title: 'Agentless by Default',
    description:
      'PowerShell remoting, WinRM, and REST APIs. No sprawl of agents to manage or maintain. Secure remote execution with no inbound firewall rules required.',
  },
  {
    icon: '💾',
    title: 'Hardware Aware',
    description:
      'Dell Redfish API integration for firmware inventory, health monitoring, and out-of-band operations. Lenovo XCC and HPE iLO support planned.',
  },
  {
    icon: '🌐',
    title: 'Open Source',
    description:
      'Designed for the community from day one. Self-host it, extend it, contribute to it. No proprietary lock-in. No vendor licensing. No surprises.',
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} — ${siteConfig.tagline}`}
      description="A modern, open-source cloud platform management solution for Azure Local and Hyper-V environments."
    >
      <main className={styles.main}>

        {/* ─── Hero ─── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>Open Source — Coming Soon</span>
            <h1 className={styles.heroTitle}>CloudSmith</h1>
            <p className={styles.heroTagline}>Forge your private cloud.</p>
            <p className={styles.heroDescription}>
              A modern, open-source cloud platform management solution purpose-built for
              organizations deploying and operating{' '}
              <strong>Microsoft Azure Local</strong> and{' '}
              <strong>Hyper-V cluster</strong> environments. Not a bloated, expensive CMP.
              Not a narrow point tool. A full-lifecycle platform with a modular, extensible
              backbone.
            </p>
            <div className={styles.heroCta}>
              <Link
                className={styles.ctaButton}
                to="https://github.com/cloudsmith-cloud"
              >
                Follow on GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Features ─── */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionLabel}>What CloudSmith does</div>
          <div className={styles.featuresGrid}>
            {features.map(({ icon, title, description }) => (
              <div key={title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{icon}</div>
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureDescription}>{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Attribution ─── */}
        <section className={styles.attributionSection}>
          <p>
            CloudSmith is being built by{' '}
            <a
              href="https://hybridsolutions.cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hybrid Cloud Solutions
            </a>{' '}
            and will be released as open source.
          </p>
          <p>
            Follow the build at{' '}
            <a
              href="https://thisismydemo.cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              thisismydemo.cloud
            </a>
            .
          </p>
        </section>

      </main>
    </Layout>
  );
}
