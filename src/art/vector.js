import React from 'react'
import StyledSVG from './styledSVG'
import { motion } from 'framer-motion'

const Vector = ({color, paths}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        height: 0,
      }}
      animate={{
        opacity: 1,
        height: `100%`,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}>
      <StyledSVG color={color} dangerouslySetInnerHTML={{ __html: `${paths}` }} viewBox="0 0 1366 688" />
    </motion.div>
  )
}

export default Vector