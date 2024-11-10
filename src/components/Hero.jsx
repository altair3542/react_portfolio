import React from 'react'
import profilepic from '../assets/profpic.png'
import { TypeAnimation } from 'react-type-animation'
import ShinyEffect from './ShinyEffect'
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiRubyRough,
  DiRor,
  DiPython,
  DiDjango,
  DiPhp,
  DiLaravel,
  DiIllustrator,
  DiPhotoshop,
  DiReact,
} from 'react-icons/di'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
      <div className='grid md:grid-cols-2 placer-items-center gap-8'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack dev",
              1000,
              "Dev teacher",
              1000,
              "Organizational com.",
              1000,
              "Team leader.",
              1000,
              "Project manager",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />
          <motion.p
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{ duration: 1, delay:0.5 }}
          className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
          >
            HEY, I AM <br />
            <span className="text-purple-500">SANTIAGO MESA</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
