import React from 'react';
import clsx from 'clsx';
import styles from './index.modules.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faMicrochip, faComments, faServer, faRocket, faBook } from '@fortawesome/free-solid-svg-icons';


const iconSizes='4x';
const iconColors='#6e948c';

const FeatureList = [
  {
    title: 'Data management',
    // Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    logo:  <FontAwesomeIcon icon={faDatabase} size={iconSizes} color={iconColors} />,
    description: (
      <>
      Access is provided to a fast I/O, secure and multitier 
      NFS server for the storage and analysis of large data (>TB).
      <br></br>
      <strong>Read more  <a href='/docs/MIMIR/datatransfer'> here </a></strong>
      </>
    ),
  },
  {
    title: 'Hardware',
    // Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    logo: <FontAwesomeIcon icon={faMicrochip} size={iconSizes} color={iconColors} />,
    description: (
      <>
       In total there are 6528 cores available, including 13 Nvidia A100 Tesla GPU cards. 
       It stands currently at 628 tera-flops.
       <br></br>
       <strong>Read more  <a href='/docs/hardware/hardwarespec'> here</a>.</strong>
      </>

    ),
  },
  {
    title: 'Usage',
    // Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    logo: <FontAwesomeIcon  icon={faServer} size={iconSizes} color={iconColors} />,
    description: (
      <>
      The HPC cluster is managed by a Linux operating system. 
      Bash shell scripting and interactive commands are used 
      to work on the cluster and with the SLURM queueing service.
      <br></br>
      <strong>Read more  <a href='/docs/elja/bash'> here</a>.</strong>
      </>
    ),
  },
  {
    title: 'Contact',
    // Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    logo: <FontAwesomeIcon icon={faComments} size={iconSizes} color={iconColors} />,
    description: (
      <>
        Contact us by writing a formal application to 
        <a><strong>help@hi.is</strong></a> and we will write 
        back to you as soon as possible.
        <br></br>
        <strong>Requirements for applying can be found <a href= '/docs/intro'>here</a></strong>
       </>
    ),
  },
  {
    title: 'Programs',
    // Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    logo: <FontAwesomeIcon icon={faRocket} size={iconSizes} color={iconColors} />,
    description: (
      <>
        A high variety of compilers, numerical libraries and software environments
        are provided and maintained.
        <br></br>
       <strong>Read more  <a href='/docs/compiling/easybuild'> here</a>.</strong>
      </>

    ),
  },
  {
    title: 'Learn on the system',
    // Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    logo: <FontAwesomeIcon icon={faBook} size={iconSizes} color={iconColors} />,
    description: (
      <>
       Learn more by reading through the documentation
       <br></br>
       <strong>starting<a href='/docs/intro'> here</a>.</strong>
      </>

    ),
  },
];

function Feature({logo, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
        {logo}
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
