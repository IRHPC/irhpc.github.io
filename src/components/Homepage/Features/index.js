import React from 'react';
import clsx from 'clsx';
import styles from './index.modules.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faMicrochip, faComments, faServer, faRocket, faBook } from '@fortawesome/free-solid-svg-icons';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useEffect, useMemo } from 'react';


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
       In total there are 6528 cores available, including 21 Nvidia A100 Tesla GPU cards. 
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
        Contact us by writing a formal application to<br/>
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


const FeatureListIS = [
  {
    title: 'Gagnastjórnun',
    // Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    logo:  <FontAwesomeIcon icon={faDatabase} size={iconSizes} color={iconColors} />,
    description: (
      <>
       Aðgangur er veittur að hröðu I/O, öruggu og margskipuðu
       NFS þjónn fyrir geymslu og greiningu stórra gagna (>TB).
       <br></br>
       <strong>Lestu meira <a href='/docs/MIMIR/datatransfer'> hér </a></strong>
      </>
    ),
  },
  {
    title: 'Vélbúnaður',
    // Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    logo: <FontAwesomeIcon icon={faMicrochip} size={iconSizes} color={iconColors} />,
    description: (
      <>
        Alls eru 6528 kjarna í boði, þar á meðal 21 Nvidia A100 Tesla GPU kort.
        Það stendur í 628 tera-flops.
        <br></br>
        <strong>Lestu meira <a href='/docs/hardware/hardwarespec'> hér</a>.</strong>
      </>

    ),
  },
  {
    title: 'Notkun',
    // Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    logo: <FontAwesomeIcon  icon={faServer} size={iconSizes} color={iconColors} />,
    description: (
      <>
      HPC-þyrpingunni er stjórnað af Linux stýrikerfi
      Bash skelja skriptur og gagnvirkar skipanir eru notaðar
      til að vinna á þyrpingunni með SLURM biðrað þjónustu.
      <br></br>
      <strong>Lestu meira  <a href='/docs/elja/bash'> hér</a>.</strong>
      </>
    ),
  },
  {
    title: 'Hafa samband',
    // Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    logo: <FontAwesomeIcon icon={faComments} size={iconSizes} color={iconColors} />,
    description: (
      <>
        Hafðu samband við okkur með því að skrifa formlega umsókn til<br/>
         <a><strong>help@hi.is</strong></a> og við svörum
         þér eins fljótt og auðið er.
         <br></br>
         <strong>Kröfur til að sækja um er að finna <a href= '/docs/intro'>hér</a></strong>
       </>
    ),
  },
  {
    title: 'Hugbúnaður',
    // Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    logo: <FontAwesomeIcon icon={faRocket} size={iconSizes} color={iconColors} />,
    description: (
      <>
        Mikið úrval af þýðendum, tölulegum stöfnum og hugbúnaðarumhverfum
        eru í boði og er viðhaldið.
        <br></br>
       <strong>Lest meira  <a href='/docs/compiling/easybuild'> hér</a>.</strong>
      </>

    ),
  },
  {
    title: 'Lærðu á kerfið',
    // Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    logo: <FontAwesomeIcon icon={faBook} size={iconSizes} color={iconColors} />,
    description: (
      <>
      Lærðu meira um kerfið með því að lesa leiðbeiningarnar
       <br></br>
       <strong>þær byrja<a href='/docs/intro'> hér</a>.</strong>
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

  const { i18n } = useDocusaurusContext();

  let useList = FeatureList;


  useMemo(() => {

    if (i18n.currentLocale === "is"){
      useList = FeatureListIS;
    } 
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">

          {
          useList?.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))
          }

        </div>
      </div>
    </section>
  );
}
