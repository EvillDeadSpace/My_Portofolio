import React from 'react'
import { useState, useRef } from 'react'
import {motion} from 'framer-motion'
import  emailjs from '@emailjs/browser'

import {styles} from '../styles'
import {SectionWrapper} from  '../hoc'
import { slideIn } from "../utils/motion";

const Contact = () => {
  
  const formRef= useRef()
  const [form, setForm] = useState(
    {
      name: '',
      email: '',
      message: ''
    }
  )
  const [loading, setloading] = useState(false)

  const handleChange = (e) => {}
  const handleSubmit = (e) => {}

  return (
    <div className=' xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[1] bg-black-100  rounded-xl p-8'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Full name</span>
              <input 
                name='name'
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder='Your full name'
                className='bg-black-200 rounded-lg p-4 text-white outline-none focus:ring-2 focus:ring-blue-500 font-medium'
                />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Email</span>
              <input 
                name='email'
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder='Your email'
                className='bg-black-200 rounded-lg p-4 text-white outline-none focus:ring-2 focus:ring-blue-500 font-medium'
                />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea 
                rows={8}
                name='message'
           
                value={form.message}
                onChange={handleChange}
                placeholder='If you have any questions or if you need any kind of cooperation, feel free to contact me without any hesitation?'
                className='bg-black-200 rounded-lg p-4 text-white outline-none focus:ring-2 focus:ring-blue-500 font-medium'
                />
            </label>

            <button 
              type='submit'
              className=' bg-blue-500 py-3 px-8 outline-none text-white font-bold   shadow-pr shadow-md rounded-lg p-4 text-white outline-none focus:ring-2 focus:ring-blue-500 font-medium'
              >
                {loading ? 'Sending...' : 'Send'}
            </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')