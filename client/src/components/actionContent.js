// @react
import React from 'react'

// @rebass
import { Box, Text, Button } from 'rebass'

// @framer-motion
import { motion } from 'framer-motion'

// @styled-components
import styled from 'styled-components'

// Components
import Grid from './Grid'

const ActionArea = styled.div`
  max-width: 500px;

  #can_embed_form_inner {
    #form_col1 {
      width: 100%;

      #action_welcome_message_inner {
        color: black;
      }
    }

    #form_col2 {
      width: 100%;

      #form-comments {
        display: none;
      }

      input[type="submit"] {
        margin-top: 1em;
      }
    }

    h2,
    h3,
    h4 {
      display: none;
    }

    .core_field {
      margin-top: 0.2em;

      label {
        top: -8px;
        right: 0;
        left: auto;

        &::after {
          height: 14px;
        }
      }

      input {
        background: transparent;
        border: none;
        border-bottom: 2px solid white;
        color: white;

        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        &.error_input {
          border: none;
          box-shadow: none;
          border-bottom: 2px solid red;
        }
      }
    }
  }
`

const ActionContent = ({
  handleClose,
  actionText,
  actionId,
  openAction,
}) => {
  return (
  <Grid>
    <motion.div
      initial={{
        position: `relative`,
        fontSize: `16px`,
        color: `white`,
      }}
      transition={{ duration: 0.2 }}>
      <Text mb={[4]} dangerouslySetInnerHTML={{__html: actionText}} />
      <motion.div initial={{transformOrigin: `center`, display: `inline`}}>
        <ActionArea id={`can-petition-area-${actionId}`} />
        <Box mt={[4]} onClick={() => handleClose(actionId)}>
          <Button
            style={{
              fontSize: `1em`,
              cursor: `pointer`,
              textDecoration: `none`,
              position: `relative`,
              overflow: `hidden`
            }}
            ml={[2]}
            color={`black`}
            backgroundColor={`white`}
            fontSize={[2]}>
            Return
          </Button>
        </Box>
      </motion.div>
    </motion.div>
  </Grid>
)}

export default ActionContent