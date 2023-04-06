import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServicesCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className=" w-full green-ping-gradient rounded-[20px] p-[1px] shadow-card hover:border-purple-500 hover:border-2 "
      >
        <div
          options={{ max: 45, scale: 1.0, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16   object-contain" />
          <h3 className="text-white text-[20px] font-bold  text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Intruduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary, text-[17px] max-w-3xl leading-[30px]"
      >
        I graduated high school as a web designer. I am currently studying at
        the Faculty of Informatics and Computer Science. I have experience in
        various web technologies such as HTML, CSS and JS (React). I'm also
        learning C and C++. I am photo and video editor. With
        many years of experience. I work in various Adobe packages, some of
        which are Adobe Lightroom, PremierePro and Photoshop. Feel free to ask
        about additional projects and the way of working or what you are
        interested in about me.
      </motion.p>
      <div className="mt-20  flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServicesCard key={service.tilt} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
