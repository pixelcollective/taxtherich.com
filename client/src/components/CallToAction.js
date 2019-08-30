import React from 'react'

// @rebass
import {
  Box,
  Heading,
  Text,
  Flex,
  Button
} from 'rebass'

import { motion } from 'framer-motion'

// polished
import { lighten } from 'polished'

import {
  ContentContainer,
  RevCard
} from './../styled'

const CallToAction = ({ colorPrimary, heading, petition, buttonText }) => (
  <motion.div
    style={{ position: `relative` }}
    initial={{
      opacity: 0,
      top: `20px`,
    }}
    animate={{
      opacity: 1,
      top: 0,
    }}
    exit={{
      opacity: 0,
      top: `20px`,
    }}
    transition={{
      delay: 0.6,
      duration: 0.5
    }}>
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: `0 8px 12px 0 rgba(0, 0, 0, 0.1)`,
      }}>
      <RevCard
        p={[0]}
        mb={[2, 4]}
        style={{
          borderRadius: `0 0 5px`,
          borderLeft: `5px solid ${colorPrimary}`
        }}>
        <Box p={[4]} pb={[3]}>
          <Text
            color={`hsl(0%, 0%, 13%)`}
            letterSpacing={`0.2ch`}
            mb={[1]}
            fontSize={[1]}
            style={{ textTransform: `uppercase` }}>
            Our Demand
          </Text>
          <Heading mb={[3]}>
            {heading}
          </Heading>
          <ContentContainer
            primaryColor={colorPrimary}
            html={petition} />
        </Box>
        <Flex
          px={[4]}
          py={[2]}
          style={{
            justifyContent: `flex-end`,
            alignContent: `center`,
            alignItems: `center`,
            backgroundColor: `hsl(0, 0%, 97%)`
          }}>
          <Text pr={[3]}>
            <motion.div
              style={{
                color: `hsl(0, 0%, 0%, 0%, 80)`,
                opacity: `0.8`,
                cursor: `pointer`,
                fontSize: `0.8em`,
                fontWeight: `bold`,
              }}
              whileHover={{
                opacity: `0.6`
              }}
              transition={{
                duration: 0.4,
              }}>
              Learn more
                        </motion.div>
          </Text>
          <motion.div
            style={{
              position: `relative`,
              marginTop: `1rem`,
              marginBottom: `1rem`,
              borderRadius: `5px`,
              boxShadow: `0 5px 8px 0 ${lighten(0.2, colorPrimary)}`
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: `0 8px 12px 0 ${lighten(0.3, colorPrimary)}`,
            }}>
            <Button
              backgroundColor={colorPrimary}
              style={{
                display: `inline-block`,
                textAlign: `right`,
                cursor: `pointer`,
              }}
              textAlign={`right`}
              radius={[3]}>
              {buttonText}
            </Button>
          </motion.div>
        </Flex>
      </RevCard>
    </motion.div>
  </motion.div>
)

export default CallToAction