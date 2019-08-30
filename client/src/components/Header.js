import React from 'react'

// @rebass
import {
  Box,
  Heading,
} from 'rebass'

import { motion } from 'framer-motion'

const Header = ({ heading, subheading }) => (
  <Box
    pt={[3, 5]}
    bg={`dark`}
    color={`hsl(0, 0, 13%)`}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: 0,
        duration: 1
      }}>
      <Heading
        as='h1'
        fontSize={[5, 7]}
        mb={2}>
        {heading}
      </Heading>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: 0.2,
        duration: 2
      }}>
      <Heading
        as='h2'
        fontSize={[3, 5]}
        fontWeight={['normal']}
        color={`hsl(0, 0, 3%)`}
        dangerouslySetInnerHTML={{
          __html: subheading,
        }} />
    </motion.div>
  </Box>
)

export default Header