// @react
import React, { useState } from 'react'

// @redux
import { useDispatch, useSelector } from 'react-redux'

// @apollo
import { useQuery } from '@apollo/react-hooks'

// @rebass
import { Box, Text, Button } from 'rebass'

// @framer-motion
import { motion } from  'framer-motion'

// @styled-components
import styled from 'styled-components'

// polished
import { darken, complement, lighten } from 'polished'

// Components
import Grid from './../components/Grid'
import { Loading, Error } from './../components/system'

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

const loadScript = (id) => {
  const scripts = document.querySelectorAll(`#actionNetwork-${id}`)

  if(scripts.length <= 0) {
    const script = document.createElement('script')
    script.src = `https://actionnetwork.org/widgets/v3/petition/${id}?format=js&source=widget`
    script.id = `actionNetwork-${id}`

    document.body.appendChild(script)

    return script.id
  }
}

const removeScript = id => {
  const scripts = document.querySelectorAll(`#actionNetwork-${id}`)

  scripts.forEach(script => {
    console.log(`removing ${script}`)
    script.parentNode.removeChild(script)
  })
}

const Actions = ({actions}) => {
  const [active, setActive] = useState(``)
  const { data, loading, error } = useQuery(actions)
  const dispatch = useDispatch()
  const state = useSelector(state => state.action)

  if (state.action.requested===true && state.action.loaded === false) {
    loadScript(state.action.id)
  } else if (state.action.requested===false && state.action.loaded===true) {
    removeScript(state.action.id)
    dispatch({
      type: `action`,
      payload: {
        id: ``,
        loaded: false,
        requested: false,
      }
    })
  }

  const render =
    loading ? <Loading /> :
    error   ? <Error />   :
    data    ? (
      <Grid max={[`50%`]} minWidth={[`100%`]}>
        {data.actions.edges.map(({ node: {
          action: {
            profile,
            design,
            action,
            page,
          },
        }}, i) => (
          <Box key={`action_${i}`}>
            <motion.div
              initial={{
                opacity: 0,
                zIndex: 1,
                backgroundColor: design.colorSecondary
                  ? design.colorSecondary
                  : `rgba(255, 255, 255, 0.95)`,
                minHeight: `50vh`,
                maxHeight: `50vh`,
                overflowY: `hidden`,
                overflowX: `hidden`,
              }}
              whileHover={() => {
                dispatch({
                  type: `color`,
                  color: {
                    primary: design.colorPrimary,
                    secondary: design.colorSecondary,
                  }
                })
                return ({
                  backgroundColor: design.colorSecondary
                    ? darken(0.1, complement(design.colorSecondary))
                    : `rgba(255, 255, 255, 1)`,
                  cursor: active===`action_${i}`
                    ? `arrow`
                    : `pointer`
                })
              }}
              animate={(active === `action_${i}`) ? {
                opacity: 1,
                maxHeight: `100vh`,
                minWidth: `100vw`,
                position: `fixed`,
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
                zIndex: 100,
                transformOrigin: `center`,
                overflowY: `scroll`,
              } : (active === ``) ? {
                position: `relative`,
                overflowY: `hidden`,
                maxHeight: `50vh`,
                zIndex: 100,
                opacity: 1,
              } : {
                overflowY: `hidden`,
                maxHeight: `50vh`,
                opacity: 0,
                position: `absolute`,
                zIndex: -100,
                scrollPosition: `top`,
              }}
              onTap={!(active === `action_${i}`) ? () => {
                dispatch({
                  type: `action`,
                  payload: {
                    id: action.actionNetworkId,
                    loaded: false,
                    requested: true,
                  }
                })
                setActive(`action_${i}`)
              } : () => {
                return null
              }}
              transition={{duration: 0.2}}>
              <motion.img
                src={profile.headshot.guid}
                initial={{
                  position: (!active===`action_${i}`) ? `fixed` : `absolute`,
                  zIndex: -100,
                  minHeight: `100%`,
                  maxHeight: `106%`,
                  opacity: 0.1,
                  top: 0,
                  left: 0,
                  objectFit: `cover`,
                  minWidth: `100vw`,
                  height: (active === `action_${i}`) && `100vh`,
                  width: (active === `action_${i}`) && `110vw`,
                  scale: 1.2,
                }}
                animate={{
                  scale: (active===`action_${i}`) ? 1.1 : 1.2,
                  opacity: (active === `action_${i}`) ? 0.1 : 0.1,
                }}
                transition={{
                  type: `spring`,
                  stiffness: 100,
                  duration: (active===`action_${i}`) ? 3000 : 30,
                  delay: (active===`action_${i}`) ? 0.2 : 0
                }} />
              <Text
                display={`inline-block`}
                m={[5]}
                lineHeight={[1]}
                maxWidth={active === `action_${i}` ? [`80vw`] : [`80vw`]}
                maxHeight={active === `action_${i}` ? `none` : `50vh`}
                overflowY={active===`action_${i}` && `hidden`}
                fontSize={[6]}
                position={`relative`}
                fontWeight={[`800`]}>
                  <motion.div
                    className="box"
                    initial={
                      active === `action_${i}`
                        ? { scale:  1, }
                        : { scale: 1 }
                        && {
                          type: `spring`,
                          stiffness: 1,
                          duration: 1,
                          color: lighten(0.3, complement(design.colorSecondary)),
                        }
                    }
                    dangerouslySetInnerHTML={{__html: page.heading}} />
                  <Text
                    color={`white`}
                    fontSize={[5]}
                    my={[4]}
                    mt={[3]}
                    dangerouslySetInnerHTML={{__html: page.subheading}} />
                  <Grid>
                    <motion.div
                      initial={{
                        opacity: 0,
                        position: `relative`,
                        fontSize: `16px`,
                        color: `white`,
                      }}
                      animate={active===`action_${i}`
                        ? { opacity: 1, height: `auto` }
                        : { opacity: 0, height: 0 }
                      }
                      transition={{duration: 0.2}}>
                      <Text mb={[4]} dangerouslySetInnerHTML={{__html: action.petition}}/>
                      <motion.div initial={{transformOrigin: `center`, display: `inline`}}>
                        <ActionArea id={`can-petition-area-${action.actionNetworkId}`} />
                        <Box mt={[4]}>
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
                            <motion.div onClick={() => {
                              setActive(``)
                              dispatch({
                                type: `action`,
                                payload: { id: action.actionNetworkId, loaded: true, requested: false }
                              })
                            }}>
                              Return
                            </motion.div>
                          </Button>
                        </Box>
                      </motion.div>
                    </motion.div>
                </Grid>
              </Text>
            </motion.div>
          </Box>
        ))}
      </Grid>
    ) : null

  return render
}

export default Actions