import React from "react";
import "./Services.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <img src="/people.webp" />
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <h2>Branding</h2>
          <p>
            ;lrwg rwgl;g wg rthe t rthe g rwg w wgw gwr gwd sr gsdg rh ehsr f h
            sfhsfghlwrknglr;kghwrg wrghlw rg;slrk 00
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
