import React from 'react'

// @rebass
import {
  Box,
  Heading,
} from 'rebass'

import Grid from './Grid'

import { motion } from 'framer-motion'

const Header = ({ heading, subheading, background, color }) => (
  <Grid>
    <Box
      pt={[3, 3]}
      bg={background ? background : `rgba(40, 156, 255, 0.95)`}
      color={color ? color : `#F4F4F4`}>
      <Box p={[5]}>
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
            fontSize={[7]}
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
            fontSize={[5]}
            fontWeight={['normal']}
            color={`hsl(0, 0, 3%)`}
            dangerouslySetInnerHTML={{
              __html: subheading,
            }} />
        </motion.div>
      </Box>
    </Box>
  </Grid>
)

export default Header