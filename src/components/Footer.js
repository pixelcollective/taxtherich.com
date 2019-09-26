// react
import React from 'react'

// redux
import { useSelector } from 'react-redux'

// styled-components
import styled from 'styled-components'

// @polished
import { complement } from 'polished'

// @rebass
import { Box, Heading, Text } from 'rebass'
import { motion, AnimatePresence } from 'framer-motion'
import { Vector } from './../art'

// components
import Grid from './Grid'

const HeaderBox = styled(Box)`
  background: ${props => props.color};
  transition: background-color 0.2s ease-in-out;
`

const Title = styled(Heading)`
  color: ${(props) => props.color};
  transition: color 0.2s ease-in-out;
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  margin-top: 0rem;
`

// exports
const Header = ({ heading }) => {
  const { color } = useSelector(state => state.color)
  const colorPairing = complement(color.secondary)

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
          <Title
            as='h1'
            fontFamily={[`sans-serif`]}
            fontWeight={[900]}
            fontSize={[7]}
            mb={2}
            color={colorPairing ? colorPairing : `white`}
            dangerouslySetInnerHTML={{ __html: heading }} />

          <Text fontSize={[3]} mb={[3]} color={`white`}>
            Tax the Rich is an initiative to raise awareness and build a lasting base to press American politicians to make appreciable change in our rules and regulations regarding the tax "burden" of the richest 1% of the richest 1% of all Americans.
          </Text>
          <Text fontSize={[3]} color={`white`}>
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

export default Header