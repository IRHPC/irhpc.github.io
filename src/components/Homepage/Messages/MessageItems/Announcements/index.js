import React from 'react';
import announces from './data.json';
import MessageBubble from '../MessageBubble';

const Blogs = announces.Blogs;
const sec = 1000;
const type = "announce";

const Announcements = () => {
  const blogArray = Object.keys(Blogs).map(key => Blogs[key]);

  const currentDate = new Date();
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(currentDate.getDate() - 14); // Change this to 14 days (2 weeks)

  const recentBlogsWithinTwoWeeks = blogArray.filter(blog => {
    const blogDate = new Date(blog.date);
    return blogDate >= twoWeeksAgo;
  });

  if (recentBlogsWithinTwoWeeks.length === 0) {
    return null;
  }

  let count = 0;
  const waitTime = 0.75 * sec; // 0.75 seconds wait time for each bubble

  return (
    <section>
      {recentBlogsWithinTwoWeeks.map(blog => (
        <MessageBubble
          key={blog.date}
          text={blog.content}
          wait={count++ * waitTime}
          title={blog.title}
          type={type}
          link={blog.link}
        />
      ))}
    </section>
  );
}

export default Announcements;
