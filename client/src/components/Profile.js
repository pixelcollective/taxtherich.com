import React from 'react'

import { motion } from 'framer-motion'

import {
  Box,
  Flex,
  Image,
} from 'rebass'

import {
  RevCard,
  Pair
} from './../styled'

const Profile = ({name, email, company, position, about, srcSet, color}) => {
  let hovered = `darkGray`

  const onHover = function () {
    hovered = color
  }

  return (
    <RevCard
      mb={[2, 4]}
      p={[0]}
      style={{ borderRadius: `1px` }}>
      <motion.div
        onHover={() => onHover()}>
        <Flex flexDirection={[`column`]}>
          <Box
            width={[1]}
            height={[128, 256]}
            pt={[0]}
            style={{
              paddingBottom: 0,
              marginBottom: 0,
              overflow: `hidden`,
            }}>
          <motion.div
            initial={{
              scale: 1.3,
              position: `relative`,
              top: `-40%`,
            }}
            animate={{
              scale: 0.8,
            }}
            transition={{
              duration: 50,
            }}>
            <motion.div
              initial={{
                scale: 0.8,
                position: `relative`,
                top: `-40%`,
              }}
              whileHover={{
                scale: 2,
              }}
              transition={{
                duration: 100,
              }}>
              <Image
                srcSet={srcSet}
                width={[1]}
                height={[128, 400]}
                sx={{
                  objectFit: 'cover',
                }} />
              </motion.div>
            </motion.div>
          </Box>

          <Box
            p={[4]}
            style={{
              margin: `5px`,
              backgroundColor: `white`,
            }}>
            <Box style={{ borderRadius: `1px` }}>
              <Pair
                pt={[0]}
                pb={[4]}
                hover={hovered ? hovered : `hsla(0, 0%, 13%, .80)`}
                label={`Who?`}
                content={`${name} ${`<${email}>`}`} />
              <Pair
                label={`What's he known for?`}
                hover={hovered && hovered}
                html={about} />
              <Pair
                label={`Company`}
                hover={hovered && hovered}
                html={company} />
              <Pair
                label={`Position`}
                hover={hovered && hovered}
                html={position} />
            </Box>
          </Box>
        </Flex>
      </motion.div>
    </RevCard>
  )
}

export default Profile