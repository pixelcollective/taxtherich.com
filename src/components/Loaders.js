// react
import React from 'react'

// @rebass
import {Card, Heading, Flex} from 'rebass'

// @framer-motion
import { motion } from 'framer-motion'

// @antd
import { Typography } from 'antd'

/**
 * Loading
 */
const Loading = () => (
  <Card style={{
    minHeight: `100vh`,
    paddingTop: `50vh`,
  }}>
    <Typography>
      <h1 style={{
        textAlign: `center`,
      }}>Loading...</h1>
    </Typography>
  </Card>
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

export {
  Loading,
  Error,
}