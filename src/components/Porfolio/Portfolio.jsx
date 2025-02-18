import React from 'react';
import './Portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const item = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://www.sorryonmute.com/wp-content/uploads/2023/01/137_Best-project-management-software-ecommerce-1024x658.png',
    description:
      'lorem esess spaoeg thise ero space is the field that i am currently working on as an engineer , the reason behind this is pretty simple since that i have always passionate about being an engineer and the need as it is',
  },
  {
    id: 2,
    title: 'Next Commerce',
    img: 'https://www.sorryonmute.com/wp-content/uploads/2023/01/137_Best-project-management-software-ecommerce-1024x658.png',
    description:
      'lorem esess spaoeg thise ero space is the field that i am currently working on as an engineer , the reason behind this is pretty simple since that i have always passionate about being an engineer and the need as it is',
  },
  {
    id: 3,
    title: 'Vanila Commerce',
    img: 'https://www.sorryonmute.com/wp-content/uploads/2023/01/137_Best-project-management-software-ecommerce-1024x658.png',
    description:
      'lorem esess spaoeg thise ero space is the field that i am currently working on as an engineer , the reason behind this is pretty simple since that i have always passionate about being an engineer and the need as it is',
  },
  {
    id: 4,
    title: 'Swift Commerce',
    img: 'https://www.sorryonmute.com/wp-content/uploads/2023/01/137_Best-project-management-software-ecommerce-1024x658.png',
    description:
      'lorem esess spaoeg thise ero space is the field that i am currently working on as an engineer , the reason behind this is pretty simple since that i have always passionate about being an engineer and the need as it is',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>Learn More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {item.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
