import React from 'react';
import styles from './index.modules.css'; // Import the CSS module

import Announcements from './MessageItems/Announcements';
import Description from './MessageItems/Description';

function Messages() {
  return (
    <section className={styles.messages}>
      <div className={styles.description_container}>
        <Description />
      </div>
      <div className={styles.announcement_container}>
        <Announcements />
      </div>
    </section>
  );
}

export default Messages;
