import React from 'react'

// @rebass
import {
  Box,
  Card,
  Heading,
  Text,
  Flex,
} from 'rebass'

import { motion } from 'framer-motion'

const Loading = props => (
  <motion.div
    initial={{
      backgroundColor: `rgb(175, 198, 255)`,
      height: `100vh`,
      width: `100vw`
    }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      delay: 0,
      duration: 0.2
    }}>
    <Flex
      style={{
        justifyContent: `center`,
        alignContent: `center`,
        alignItems: `center`,
        height: `100vh`
      }}>
      <Card>
        <Heading color={`hsla(0, 0%, 0%, 0.8)`}>Loading...</Heading>
      </Card>
    </Flex>
  </motion.div>
)

const Grid = (props) => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      gridGap: [2, 4],
      gridTemplateColumns: `repeat(auto-fit, minmax(256px, 1fr))`,
    }} />
)

const ContentContainer = props => (
  <Text
    fontSize={1}
    css={`
      p {
        margin-top: 0px;
        padding-top: 0px;
      }

      a {
        color: ${props.primaryColor} !important;
      }
    `}
    dangerouslySetInnerHTML={props.html ? { __html: props.html } : null}>
    {props.content ? props.content : null}
  </Text>
)

const Pair = props => (
  <Box my={[3]}>
    <Label>
      {props.label}
    </Label>
    <ContentContainer
      content={props.content ? props.content : null}
      html={props.html ? props.html : null} />
  </Box>
)

const Label = props => (
  <Text
    color={`hsl(0%, 0%, 13%)`}
    letterSpacing={`0.2ch`}
    mb={[1]}
    style={{
      textTransform: `uppercase`,
      fontSize: `0.6em`
    }}>
    {props.children}
  </Text>
)

const RevCard = props => (
  <Card
    style={{
      border: 0,
      boxShadow: `0 12px 14px 0 hsla(0%, 0%, 0%, 0.2)`,
    }}
    {...props}>
    {props.children}
  </Card>
)

export {
  RevCard,
  Label,
  Pair,
  ContentContainer,
  Loading,
  Grid,
}