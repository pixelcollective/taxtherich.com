// @react
import React, { useState } from 'react'

// @redux
import { useDispatch, useSelector } from 'react-redux'

// @apollo
import { useQuery } from '@apollo/react-hooks'

// @rebass
import { Box, Text } from 'rebass'

// @framer-motion
import { motion } from 'framer-motion'

// @antd

// Library
import ActionNetworkForm from '../lib/ActionNetwork'

// Components
import Grid from './Grid'
import ActionContent from './actionContent'

const actionNetworkId = '100'

const Action = ({ actions }) => {
  const an = new ActionNetworkForm(`tax-jeff-bezos`)
  an.loadScript()

  return (
    <Grid max={[`50%`]} minWidth={[`100%`]} style={{
      backgroundColor: `rgba(255, 255, 255, 0.95)`,
      width: `100%`,
      height:`100%`,
    }}>
      <Box key={actionNetworkId}>
        <motion.div
          initial={{
            zIndex: 1,
            position: `relative`,
            minHeight: `50vh`,
            paddingBottom: `2rem`,
            overflowY: `hidden`,
            overflowX: `hidden`,
          }}
          transition={{ duration: 0.2 }}
          style={{
            backgroundColor: `rgba(255, 255, 255, 0.95)`,
            width: `100%`,
            height: `100%`,
          }}>
          <motion.img
            src={`https://source.unsplash.com/800x600`}
            initial={{
              position: `fixed`,
              zIndex: -1000,
              minHeight: `100%`,
              maxHeight: `106%`,
              top: 0,
              left: 0,
              opacity: 0.3,
              objectFit: `cover`,
              minWidth: `100vw`,
              scale: 1.2,
            }}
            transition={{
              type: `spring`,
              stiffness: 100,
            }} />
          <Box
            display={`inline-block`}
            m={[5]}
            lineHeight={[1]}
            fontSize={[6]}
            position={`relative`}
            fontWeight={[`800`]}>
            <Text
              color={`black`}
              fontSize={[3]}
              fontWeight={[400]}
              letterSpacing={[2]}
              style={{
                textTransform: `uppercase`,
              }}
              my={[3]}
              dangerouslySetInnerHTML={{ __html: `Introducing` }} />
            <motion.div
              className="box"
              dangerouslySetInnerHTML={{ __html: `The Billionaire Prevention Act.` }} />
            <Text
              color={`black`}
              fontSize={[3]}
              fontWeight={[400]}
              letterSpacing={[1]}
              css={`
                ol li {
                  margin-bottom: 1rem;
                }
              `}
              mt={[4]}
              dangerouslySetInnerHTML={{
                __html: `
                  <p>We have reached a point where over 70% of Americans now believe that the economy is rigged against them. Last year, "deaths of despair" &mdash; deaths related to suicide, drugs, and alcohol &mdash; reached the highest level ever recorded. Economic inequality in the U.S. is worse than it's been in nearly 100 years: right before the Great Depression.</p>
                  <p>The Billionaire Prevention Act is a 4-pillared legislative offensive to set fair taxes for the rich. <strong>We are respectfully demanding that lawmakers:</strong></p>
                  <ol>
                  <li>Restore the top income tax rate to 70%;</li>
                  <li>Levy an annual wealth tax on multi-millionaires and billionaires;</li>
                  <li>Strengthen the estate tax to prevent generational wealth stockpiling;</li>
                  <li>Equalize taxes on capital gains vs. income from actual work</li>
                  </ol>
                  <p>This is a legitimate crisis that can be fixed with legitimate policy change. The time to start pushing is now.</p>
              ` }} />
          </Box>
        </motion.div>
      </Box>
      <Box style={{
        backgroundColor: `rgba(255, 255, 255, 0.95)`,
        width: `100%`,
        height: `100%`,
      }}>
        <motion.div
          initial={{
            zIndex: 1,
            position: `relative`,
            overflowY: `hidden`,
            overflowX: `hidden`,
            height: `100%`,
          }}
          transition={{ duration: 0.2 }}>
          <Box
            display={`flex`}
            flexDirection={`vertical`}
            justifyContent={`center`}
            height={`100%`}>
            <Box css={`
              margin-top: 15%;
            `}>
              <ActionContent light={true} actionId={`tax-jeff-bezos`} />
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Grid>
  )
}

export default Action