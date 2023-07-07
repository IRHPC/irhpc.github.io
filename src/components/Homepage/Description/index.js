import React from 'react';
import styles from './index.modules.css';


//Bæta við hverjir eru að borga innviðurinn
export default function HomepageDescription({text, wait}){
  const style = {
    animationDelay: `${wait}ms`,
  };

    return (
      <section className={styles.msgBubble } style={style}>
        <div>
            <p>
            {text}
            </p>
          </div>

      </section>
    );
  }