// @react
import React from 'react'

// @rebass
import { Box, Image } from 'rebass'

// @framer-motion
import { motion } from 'framer-motion'

// @styled-components
import styled from 'styled-components'

// @antd
import { Row, Col } from 'antd'

// action-network
import ActionNetworkForm from './../../lib/ActionNetwork'

// @app/components
import PageHeader from './../header/PageHeader'

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

const SingleVillain = ({
  villain: {
    action,
    profile,
    page,
    design,
  }
}) => {
  const an = action.actionNetworkId && new ActionNetworkForm(action.actionNetworkId)
  an.loadScript()

  return (
    <Box>
      <Image
        src={page.featuredImage.guid}
        style={{
          position: `fixed`,
          zIndex: 0,
          height: `100vh`,
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          objectFit: `cover`,
          scale: 1.2,
        }} />
      <Box style={{
        position: `relative`,
        zIndex: `1`,
        backgroundColor: `rgba(255, 255, 255, 0.8)`,
        padding: `50px 50px 100px 50px`}}>
        <Box
          style={{
              opacity: 1,
              maxHeight: `100vh`,
              minWidth: `100vw`,
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              zIndex: 10,
              transformOrigin: `center`,
              overflowY: `scroll`,
              position: `relative`,
          }}>
            <PageHeader title={`Villains`} />
            <Row gutter={48}>
              <Col sm={24} md={12}>
                {profile.name && (
                  <h1 dangerouslySetInnerHTML={{ __html: profile.name }} />
                )}
                {profile.about && (
                  <Box dangerouslySetInnerHTML={{ __html: profile.about }} />
                )}
              </Col>
              {action.actionNetworkId && (
                <Col sm={24} md={12}>
                  <motion.div initial={{ transformOrigin: `center` }}>
                    <VillainArea
                      width={`100%`}
                      light={true}
                      id={`can-petition-area-${action.actionNetworkId}`} />
                  </motion.div>
                </Col>
              )}
            </Row>
          </Box>
        </Box>
      </Box>
  )
}

export default SingleVillain