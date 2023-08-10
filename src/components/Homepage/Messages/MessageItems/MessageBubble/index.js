import React from 'react';
import styles from './index.modules.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const iconSizes = '2x';
const iconColors = '#FFFFFF'; // Corrected value here

function MessageBubble({ text, title, wait, type }) {
  const style = {
    animationDelay: `${wait}ms`,
  };

  let className = styles.msgBubble;

  if (type === 'announce') {
    className = styles.announcement;
  }

  return (
    <section className={className} style={style}>
      {type === 'announce' ? (
        <div className="announcement-content">
          <FontAwesomeIcon icon={faCircleExclamation} size={iconSizes} color={iconColors} />
          <h3>Announcement: {title}</h3>
          <p className="text"><b>Description:</b> <br/> {text}</p>
        </div>
      ) : (
        <div className="normal-content">
          <p>{text}</p>
        </div>
      )}
    </section>
  );
}

export default MessageBubble;
