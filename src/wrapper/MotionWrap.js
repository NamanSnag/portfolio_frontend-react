import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = ( Component, className) => function HOC() {
  return (
    <motion.div
        whileInView={{y:[100, 50, 0], opacity:[0, 0, 1]}}
        className={`${className} app__flex`}
        transition={{duration: 0.3}}
    >
      <Component/>
    </motion.div>
  )
}

export default MotionWrap
