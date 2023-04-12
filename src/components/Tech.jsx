import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'


const TechCard = ({ icon,name }) => {
  return (
<Tilt className="xs:w-[250px] rounded-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.75)}
        className=" w-full green-ping-gradient rounded-full p-[1px] shadow-card hover:border-purple-500 hover:border-2  "
      >
        <div
          options={{ max: 45, scale: 1.0, speed: 450 }}
          className="bg-tertiary  rounded-full py-5 px-12 flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={name} className="w-16 h-16   object-contain" />
          <h3 className="text-white text-[20px] font-bold  text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>

  )

}



const Tech = () => {
  return (
    <div>

      <div className="mt-20 flex flex-row flex-wrap gap-10 justify-center " >
        {technologies.map((technology ) => (
          <div className=' rounded-full' >
          <TechCard icon={technology.icon} name={technology.name}/>
          </div>


        ))}


      </div>

    </div>
  )
}

export default SectionWrapper(Tech,"")