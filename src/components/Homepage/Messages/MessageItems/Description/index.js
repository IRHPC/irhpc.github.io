import React from 'react';
import styles from './index.modules.css';
import comment from "./data.json";
import MessageBubble from '../MessageBubble';
import { useMemo } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const Description  = () => {

const { i18n } = useDocusaurusContext();

  let comments = comment.Comments;
  useMemo(() => {
    if (i18n.currentLocale === "is"){
      comments = comment["Comments-IS"];
    }
  }, []);
  
  const waitTime = 750; //0.75 seconds waittime for each bubble 
  let count = 0;

  const descriptions = comments.map(({ type, content }) => (
    <MessageBubble key={count} text={content} wait={count++ * waitTime} type={type} />
  ));

  return (
    <>
      <section>
      {descriptions}
      </section>
    </>
  );
};

export default Description;