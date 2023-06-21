import React, { useState } from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'

import './Navbar.scss'

function Navbar() {
  const [ toggle, setToggle ] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src="https://cdn-icons-png.flaticon.com/128/0/85.png" alt="logo" />
        <p>Naman Nag</p>
      </div>
      <ul className='app__navbar-links'>
        {['Home', 'About', 'Work', 'Skills', "Testimonial", 'Contact'].map((item)=>{
          return (<li className='app__flex p-text' key={`navLink${item}}`}>
            <a href={`#${item}`}>{item}</a>
            <div/>
          </li>)
        })}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={()=>setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{x: [300, 0]}}
            transition={{duration: 0.8, ease: 'easeOut' }}
          >
            <HiX onClick={()=>setToggle(false)}/>
            <ul>
              {['Home', 'About', 'Work', 'Skills', "Testimonial", 'Contact'].map((item)=>{
                return (<li key={`HiLink${item}}`}>
                  <a href={`#${item}`} onClick={()=> setToggle(false)}>{item}</a>
                </li>)
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
