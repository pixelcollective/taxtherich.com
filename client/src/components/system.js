// react
import React from 'react'

// @rebass
import {
  Box,
  Card,
  Heading,
  Text,
  Flex,
} from 'rebass'

// @framer-motion
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Loading
 */
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

/**
 * Error
 */
const Error = props => (
  <motion.div
    initial={{
      backgroundColor: `rgb(175, 198, 255)`,
      height: `100vh`,
      width: `100vw`
    }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 0, duration: 0.2 }}>
    <Flex style={{
      justifyContent: `center`,
      alignContent: `center`,
      alignItems: `center`,
      height: `100vh`
    }}>
      <Card>
        <Heading color={`hsla(0, 0%, 0%, 0.8)`}>Error...</Heading>
      </Card>
    </Flex>
  </motion.div>
)

/**
 * Grid
 */
const Grid = (props) => (
  <Box {...props}
    sx={{
      display: 'grid',
      gridGap: [2, 4],
      gridTemplateColumns: `repeat(auto-fit, minmax(256px, 1fr))`,
    }} />
)

/**
 * Content Container
 */
const ContentContainer = props => (
  <Text
    fontSize={1}
    css={`
      p {
        margin-top: 5px;
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

/**
 * Label and Content pairing
 */
const Pair = props => (
  <Box my={[3]}>
    <motion.div
      whileHover={{
        scale: 1.02,
      }}>
      <Label
        color={`hsla(0, 0%, 10%, 0.4)`}
        hover={props.hover && props.hover}>
        {props.label}
      </Label>
      <Box
        pt={[0]}
        css={`
          p {
            margin-top: 0px;
          }

        `}
        dangerouslySetInnerHTML={props.html && { __html: props.html }}>
        {props.content && props.content}
      </Box>
    </motion.div>
  </Box>
)

const Label = props => (
  <Text
    style={{
      color: props.hover ? props.hover : `gray`,
      textTransform: `uppercase`,
      fontSize: `0.8em`,
      letterSpacing: `0.2ch`,
      paddingBottom: `1em`,
      paddingTop: `1em`,
      fontWeight: 500,
    }}>
    {props.children}
  </Text>
)

/**
 * Styled Card
 */
const RevCard = props => (
  <Card {...props} style={{
    border: 0,
    boxShadow: `0 12px 14px 0 hsla(0%, 0%, 0%, 0.2)`,
    height: `100%`,
  }}>
    <Flex style={{
      flexDirection: `column`,
      height: `98%`,
    }}>
      {props.children}
    </Flex>
  </Card>
)

/**
 * FadeUp AnimatePresence
 */
const FadeUp = (props) => (
  <AnimatePresence>
    <motion.div
      style={{ position: `relative` }}
      initial={{ opacity: 0, top: `20px` }}
      animate={{ opacity: 1, top: 0 }}
      exit={{ opacity: 0, top: `20px` }}
      transition={{ delay: 0.6, duration: 0.5 }}>
      {props.children}
    </motion.div>
  </AnimatePresence>
)

const Wrapper = ({ backgroundColor, backgroundImage, children }) => (
  <motion.div
    initial={{ backgroundColor: `rgb(175, 198, 255)` }}
    animate={{
      opacity: 1,
      backgroundColor: `${backgroundColor && backgroundColor}`
    }}
    exit={{ opacity: 0 }}
    transition={{ delay: 0, duration: 1 }}>
    <Box sx={{
      backgroundImage: `url(${backgroundImage && backgroundImage})`,
      backgroundSize: `cover`,
      backgroundPosition: `fixed`,
      backgroundRepeat: `no-repeat`,
      paddingBottom: 4
    }}>
      <Box sx={{
        maxWidth: 1200,
        mx: 'auto',
        px: 4,
      }}>
        {children}
      </Box>
    </Box>
  </motion.div>
)

export {
  RevCard,
  Label,
  Pair,
  ContentContainer,
  Loading,
  Error,
  Grid,
  FadeUp,
  Wrapper,
}