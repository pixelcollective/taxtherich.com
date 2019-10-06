// @react
import React from 'react'

// @styled-components
import styled from 'styled-components'

// @rebass
import { Box, Text } from 'rebass'

// @antd
import { Typography, Divider, Row, Col } from 'antd'

// Library
import ActionNetworkForm from '../../lib/ActionNetwork'

const { Title } = Typography

const AdvocacyForm = styled.div`
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
        border-bottom: 1px solid ${props => props.light ? `white` : `rgba(0, 0, 0, 0.2)`};

        &::placeholder {
          color: ${props => props.light ? `white` : `rgba(0, 0, 0, 0.4)`};
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

const SingleAction = ({action}) => {
  let an = new ActionNetworkForm(action.actionNetworkId)
  an.loadScript()

  return (
    <Row gutter={48}>
      <Col sm={24} md={12}>
        <Typography>
          <Title>{action.heading}</Title>
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
              __html: action.context
            }} />
          <Divider />
        </Typography>
      </Col>
      <Col sm={24} md={12}>
        <Box mt={4}>
          <AdvocacyForm id={`can-petition-area-${action.actionNetworkId}`} />
        </Box>
      </Col>
    </Row>
  )
}

export default SingleAction