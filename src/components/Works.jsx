import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from  'framer-motion'

import {styles} from '../styles'

import {github} from '../assets'
import {links} from '../assets'
import {SectionWrapper} from '../hoc'
import {projects} from '../constants';

import { fadeIn, textVariant } from '../utils/motion'




const ProjectCard = ({index, name, description, tags, image, source_code_link, source_code_web}) => {
 return(
  <motion.div
      variants={fadeIn("up", "spring", index*0.5, 0.75)}
  >
    <Tilt
      options={{
        max: 45,
        scale: 1.1,
        speed: 400,
      }}
      className="bg-tertiary rounded-2xl p-5 sm:w-[360px] w-full"
    >
        <div className='realative w-full h-[230px]'>
          <img 
            src={image} 
            alt={name} 
            className='w-full h-full rounded-2xl  object-cover'
            />
            <div className='absolute  inset-0 flex  justify-end m-3 card-img_hover'>
              <div 
                onClick={()=> window.open(source_code_link, '_blank')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center  items-center cursor-pointer'
              > 
              <img 
                src={github} 
                alt="github" 
                className='w-1/2 h-1/2 object-contain'
                />

              </div>
              <div 
                onClick={()=> window.open(source_code_web, '_blank')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center  items-center cursor-pointer ml-3'
              > 
              <img 
                src={links} 
                alt="github" 
                className='w-1/2 h-1/2 object-contain'
                />

              </div>

            </div>
                
        </div>
        <div className='mt-4'>
          <h3 className=" text-white font-bold text-[24px]">{name}</h3>
          <p className='mt-2 text-secondary text-[16px] font-light'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=> (
            <p 
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>

          ))}
        </div>
    </Tilt>
  </motion.div>
)

}




const Works = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
        <motion.div>
          <p className={styles.sectionSubText}>My Projects</p>
          <h2 className={styles.heroHeadText}>Projects.</h2>
        </motion.div>
      </motion.div>
      <div className='w-full flex '>
        <motion.p
          variants={fadeIn("","", 0.1, 1)}
          className='mt-3  text-secondary tx-[17px] max-w-3xl leading-[30px]
          '
        >
          The collection of my projects represents my expertise and experience, featuring practical illustrations of my work. Every project is briefly depicted with live demo links and code repositories. These exhibits reflect my proficiency in handling intricate issues, collaborating with diverse technologies, and efficiently supervising projects.
        </motion.p>

      </div>

      <div className='mt-20 flex flex-wrap gap-7' >
        {projects.map((project, index)=> (
          <ProjectCard 
            key={`project-${index}`}
            {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '');