// react
import React from 'react'

// redux
import { useSelector } from 'react-redux'

// styled-components
import styled from 'styled-components'

// @polished
import { complement } from 'polished'

// @rebass
import { Box, Heading } from 'rebass'
import { motion, AnimatePresence } from 'framer-motion'
import { Vector } from '../art'

// components
import Grid from './Grid'

const HeaderBox = styled(Box)`
  background: ${props => props.color};
  transition: background-color 0.2s ease-in-out;
  border-bottom: 1px solid white;
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
const Header = ({heading, subheading}) => {
  const { color } = useSelector(state => state.color)
  const { paths } = useSelector(state => state.paths)

  const colorPairing = complement(color.secondary)

  return (
    <HeaderBox
      pt={[1, 0]}
      color={`#0F0F0F`}
      style={{
        position: `relative`,
        zIndex: 100
      }}>
      <Grid>
        <Box p={[5]} color={`white`}>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{
              delay: 0,
              duration: 1
            }}>
            <Title
              as='h1'
              fontFamily={[`sans-serif`]}
              fontWeight={[900]}
              fontSize={[7]}
              mb={2}
              color={`white`}
              dangerouslySetInnerHTML={{__html: heading}} />
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{
              delay: 0.2,
              duration: 2,
            }}>
            <Heading
              as='h2'
              fontSize={[5]}
              fontWeight={['normal']}
              fontFamily={[`sans-serif`]}
              color={`white`}
              dangerouslySetInnerHTML={{__html: subheading}} />
          </motion.div>
        </Box>
      </Grid>
    </HeaderBox>
  )
}

export default Header