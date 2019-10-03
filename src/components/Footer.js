// react
import React from 'react'

// styled-components
import styled from 'styled-components'

// @rebass
import { Box, Text } from 'rebass'
import { motion } from 'framer-motion'

const HeaderBox = styled(Box)`
  background: ${props => props.color};
  transition: background-color 0.2s ease-in-out;
`

// exports
const Footer = ({ heading }) => {
  return (
    <HeaderBox pt={[1, 0]} color={`#0F0F0F`} style={{
      backgroundColor: `black`,
      zIndex: 10,
      position: `relative`,
    }}>
      <Box p={[5]} color={`white`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0, duration: 1 }}>
          <Text fontSize={[4]} mb={[3]} color={`white`} style={{
            textTransform: `uppercase`,
            letterSpacing: `0.2ch`,
            fontWeight: 900}}>
            {heading}
          </Text>
          <Text fontSize={[3]} mb={[4]} color={`white`}>
            Tax the Rich is an initiative to raise awareness and build a lasting base to press American politicians to make appreciable change in our rules and regulations regarding the tax "burden" of the richest 1% of the richest 1% of all Americans.
          </Text>
          <Text fontSize={[2]} color={`white`}>
            &copy; <span dangerouslySetInnerHTML={{ __html: (new Date()).getFullYear() }} />&nbsp;
            Patriotic Millionaires and Other98
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 2 }}>
        </motion.div>
      </Box>
    </HeaderBox>
  )
}

export default Footer