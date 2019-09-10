// react
import React from 'react'

// redux
import { useSelector } from 'react-redux'

// styled-components
import styled from 'styled-components'

// @polished
import { invert, lighten, complement, darken } from 'polished'

// @rebass
import { Box, Heading } from 'rebass'
import { motion } from 'framer-motion'

// components
import Grid from './Grid'

const HeaderBox = styled(Box)`
  background: ${(props) => invert(props.color)};
  transition: background-color 0.2s ease-in-out;
  border-bottom: 1px solid white;
`

const Title = styled(Heading)`
  color: ${(props) => lighten(0.3, complement(props.color))};
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  margin-top: 0rem;
`

// exports
const Header = ({heading, subheading}) => {
  const { color } = useSelector(state => state.color)
  console.log(color)

  return (
    <Grid>
      <HeaderBox pt={[1, 0]} color={color.primary}>
        <Box p={[5]} color={`white`}>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{delay: 0, duration: 1}}>
            <Title
              as='h1'
              fontFamily={[`sans-serif`]}
              fontWeight={[900]}
              fontSize={[7]}
              mb={2}
              color={color.secondary ? color.secondary : `black`}
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
      </HeaderBox>
    </Grid>
  )
}

export default Header