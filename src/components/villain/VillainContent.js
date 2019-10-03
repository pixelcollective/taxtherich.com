// @react
import React from 'react'

// @rebass
import { Box, Text, Button } from 'rebass'

// @framer-motion
import { motion } from 'framer-motion'

// @styled-components
import styled from 'styled-components'

// @antd
import { Row, Col, Typography } from 'antd'

const VillainArea = styled.div`
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
        border-bottom: 2px solid ${props => props.light ? `rgba(0, 0, 0, 0.8)` : `white`};

        &::placeholder {
          color: ${props => props.light ? `rgba(0, 0, 0, 0.8)` : `white`};
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

const VillainContent = ({
  handleClose,
  villainText,
  villainBio,
  villainId,
  light,
}) => (
  <motion.div
    initial={{
      position: `relative`,
      fontSize: `16px`,
      color: `white`,
    }}
    transition={{ duration: 0.2 }}>
    {villainText && (
      <Text mb={[4]} dangerouslySetInnerHTML={{__html: villainText}} />
    )}
    <Row gutter={48}>
      <Col sm={24} md={12}>
        {villainBio && (
          <Typography style={{
            color: `white`,
            fontWeight: 300,
          }}>
            <Text mb={[4]} dangerouslySetInnerHTML={{ __html: villainBio }} />
          </Typography>
        )}
      </Col>
      <Col sm={24} md={12}>
        <motion.div initial={{ transformOrigin: `center` }}>
          <VillainArea
            width={`100%`}
            light={light ? true : false}
            id={`can-petition-area-${villainId}`} />
        </motion.div>
      </Col>
    </Row>
    {handleClose && (
      <Box
        mt={[4]}
        onClick={() => handleClose(villainId)}>
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
    )}
  </motion.div>
)

export default VillainContent