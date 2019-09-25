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

// polished
import { darken, complement, lighten } from 'polished'

// Library
import ActionNetworkForm from '../lib/ActionNetwork'

// Components
import Grid from './Grid'
import ActionContent from './actionContent'

const actionNetworkId = '100'


const Action = ({ actions }) => (
  <Grid max={[`50%`]} minWidth={[`100%`]}>
    <Box key={actionNetworkId}>
      <motion.div
        initial={{
          zIndex: 1,
          position: `relative`,
          backgroundColor: `rgba(255, 255, 255, 0.95)`,
          minHeight: `50vh`,
          maxHeight: `50vh`,
          overflowY: `hidden`,
          overflowX: `hidden`,
        }}
        transition={{ duration: 0.2 }}>
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
            mt={[4]}
            dangerouslySetInnerHTML={{ __html: `
<p>We have reached a point where over 70% of Americans now believe that the economy is rigged against them. Last year, "deaths of despair" &mdash; deaths related to suicide, drugs, and alcohol &mdash; reached the highest level ever recorded. Economic inequality in the U.S. is worse than it's been in nearly 100 years: right before the Great Depression.</p>
<p>The Billionaire Prevention Act is a 4-pillared legislative offensive to set fair taxes for the rich. <strong>We are respectfully demanding that lawmakers:</strong></p>
<ul>
<li>Restore the top income tax rate to 70%;</li>
<li>Levy an annual wealth tax on multi-millionaires and billionaires;</li>
<li>Strengthen the estate tax to prevent generational wealth stockpiling;</li>
<li>Equalize taxes on capital gains vs. income from actual work</li>
</ul>
            ` }} />
          <motion.div
            initial={{ opacity: 0, height: 0 }}>
            <ActionContent
              actionText={`Hello world.`}
              actionId={actionNetworkId} />
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  </Grid>
)

export default Action