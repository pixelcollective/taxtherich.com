import React, { Component, Fragment } from 'react'

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

/**
 * Call To Action
 */
class CallToAction extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
      scriptLoaded: false,
      actionNetworkScriptUrl: `
        https://actionnetwork.org/widgets/v3/petition/tax-jeff-bezos?format=js&source=widget
      `
    }
  }

  render() {
    const {
      heading,
      colorPrimary,
      petition,
      buttonText,
    } = this.props

    const scriptLoaded = this.state.scriptLoaded

    const buttonClick = () => {
      this.setState({ clicked: true })
    }

    const isClicked = () => {
      return this.state.clicked
    }

    const loadDynamicScript = () => {
      const existingScript = document.getElementById('actionNetwork');

      if (!existingScript) {
        const script = document.createElement('script')
        script.src = this.state.actionNetworkScriptUrl
        script.id  = `actionNetwork`
        document.body.appendChild(script)
      }

      this.setState({scriptLoaded: true})
    }

    return (
      <Box style={{
        position: isClicked() ? `absolute` : `relative`,
        top: isClicked() && `auto`,
        bottom: isClicked() && `auto`,
        height: isClicked() && `100vh`,
        transformOrigin: `center`,
      }}>
        <motion.div
          whileHover={!isClicked() && {
            scale: 1.05,
            boxShadow: `0 8px 12px 0 rgba(0, 0, 0, 0.1)`,
          }}
          initial={{
            zIndex: 1000,
            marginBottom: `2em`,
            position: `relative`
          }}
          animate={isClicked() ? {
            transformOrigin: `center`,
            scale: 1,
            position: `fixed`,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            marginBottom: 0,
            height: `100vh`,
          } : {
            zIndex: 1000,
            marginBottom: `2em`,
            position: `relative`,
            height: `auto`,
          }}>
          <RevCard
            p={[0]}
            style={{
              transformOrigin: `center`,
              borderRadius: `0 0 5px`,
              borderLeft: `5px solid ${this.props.colorPrimary}`,
              height: `100%`,
            }}>
            {isClicked() && (function() {
              loadDynamicScript()
              return (
                <Box>
                  <Text style={{
                    position: `absolute`,
                    top: `50px`,
                    right: `50px`,
                    width: `25px`,
                    height: `25px`,
                    display: `inline-block`,
                    lineHeight: `25px`,
                    background: colorPrimary,
                    color: `white`,
                    textAlign: `center`,
                  }}>X</Text>
                  <Flex style={{
                    paddingTop: `20vh`,
                    justifyContent: `center`,
                    alignContent: `center`,
                  }}>
                    <Flex style={{
                      justifyContent: `center`,
                      alignItems: `center`,
                      alignContent: `center`,
                    }}>
                      <div id={`can-petition-area-tax-jeff-bezos`} />
                    </Flex>
                  </Flex>
                </Box>
              )
            })()}
            {!isClicked() && (
              <motion.div animate={isClicked() && { opacity: 0 }} style={{ height: `100%` }}>
                <Box p={[4]} pb={[3]} style={{
                  height: `100%`,
                  padding: isClicked() ? `4em` : `2em`,
                }}>
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
                    backgroundColor: `hsl(0, 0%, 97%)`,
                    display: isClicked() ? `none` : `flex`,
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
                      onClick={() => buttonClick()}
                      textAlign={`right`}
                      radius={[3]}>
                      {buttonText}
                    </Button>
                  </motion.div>
                </Flex>
              </motion.div>
            )}
          </RevCard>
        </motion.div>
      </Box>
    )
  }
}

export default CallToAction