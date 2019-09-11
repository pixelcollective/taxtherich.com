// @react
import React, {useState } from 'react'

// @redux
import {useDispatch, useSelector } from 'react-redux'

// @apollo
import {useQuery } from '@apollo/react-hooks'

// @rebass
import {Box, Text } from 'rebass'

// @framer-motion
import {motion } from  'framer-motion'

// polished
import {darken, complement, lighten } from 'polished'

// Components
import Grid from './../components/Grid'
import {Loading, Error } from './../components/system'
import ActionContent from './../components/actionContent'

const loadScript = id => {
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
  scripts.forEach(script => script.parentNode.removeChild(script))
}

const Actions = ({actions}) => {
  const {data, loading, error } = useQuery(actions)
  const [currentAction, setCurrentAction] = useState(``)
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

  const openAction = actionNetworkId => {
    dispatch({
      type: `action`,
      payload: {
        id: actionNetworkId,
        loaded: false,
        requested: true,
      }
    })
    setCurrentAction(actionNetworkId)
  }

  const closeAction = actionNetworkId => {
    setCurrentAction(``)
    dispatch({
      type: `action`,
      payload: {
        id: actionNetworkId,
        loaded: true,
        requested: false,
      }
    })
  }

  const render =
    loading ? <Loading /> :
    error   ? <Error />   :
    data    ? (
      <Grid max={[`50%`]} minWidth={[`100%`]}>
        {data.actions.edges.map(({node: {
          action: {
            profile,
            design,
            action,
            page,
          },
        }}) => {
          return (
            <Box key={action.actionNetworkId}>
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
                    cursor: currentAction===action.actionNetworkId
                      ? `arrow`
                      : `pointer`
                  })
                }}
                animate={currentAction===action.actionNetworkId
                  ? {
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
                  } : currentAction===`` ? {
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
                  }
                }
                onTap={() => openAction(action.actionNetworkId)}
                transition={{duration: 0.2}}>
                <motion.img
                  src={profile.headshot.guid}
                  initial={{
                    position: !currentAction===action.actionNetworkId ? `fixed` : `absolute`,
                    zIndex: -100,
                    minHeight: `100%`,
                    maxHeight: `106%`,
                    opacity: 0.1,
                    top: 0,
                    left: 0,
                    objectFit: `cover`,
                    minWidth: `100vw`,
                    height: currentAction===action.actionNetworkId && `100vh`,
                    width: currentAction===action.actionNetworkId && `110vw`,
                    scale: 1.2,
                  }}
                  animate={{
                    scale: currentAction===action.actionNetworkId ? 1.1 : 1.2,
                    opacity: currentAction===action.actionNetworkId ? 0.1 : 0.1,
                  }}
                  transition={{
                    type: `spring`,
                    stiffness: 100,
                    duration: currentAction===action.actionNetworkId ? 3000 : 30,
                    delay: currentAction===action.actionNetworkId ? 0.2 : 0,
                  }} />
                <Box
                  display={`inline-block`}
                  m={[5]}
                  lineHeight={[1]}
                  maxWidth={currentAction===action.actionNetworkId ? [`80vw`] : [`80vw`]}
                  maxHeight={currentAction===action.actionNetworkId ? `none` : `50vh` }
                  overflowY={currentAction===action.actionNetworkId && `hidden`}
                  fontSize={[6]}
                  position={`relative`}
                  fontWeight={[`800`]}>
                  <motion.div
                    className="box"
                    initial={
                      currentAction===action.actionNetworkId
                        ?  {scale: 1}
                        :  {scale: 1}
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
                  <motion.div
                    initial={{opacity: 0, height: 0}}
                    animate={currentAction===action.actionNetworkId
                      ? { opacity: 1, height: `auto` }
                      : { opacity: 0, height: 0 }
                    }>
                    <ActionContent
                      actionText={action.petition}
                      actionId={action.actionNetworkId}
                      handleClose={closeAction} />
                    </motion.div>
                </Box>
              </motion.div>
            </Box>
          )})
        }
      </Grid>
    ) : null

  return render
}

export default Actions