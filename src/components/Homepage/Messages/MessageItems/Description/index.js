import React from 'react';
import styles from './index.modules.css';
import comment from "./data.json";
import MessageBubble from '../MessageBubble';

const comments = comment.Comments;

const Description  = () => {

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