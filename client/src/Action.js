import React from 'react'

// @apollo
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

// @rebass
import {
  Box,
  Image,
  Heading,
  Flex,
} from 'rebass'

// framer-motion
import { motion, AnimatePresence } from 'framer-motion'

// react-scrollbars
import Scrollbar from 'react-scrollbars-custom'

import {
  RevCard,
  Pair,
  ContentContainer,
  Loading,
  Grid,
} from './styled'

import Header from './components/Header'
import CallToAction from './components/CallToAction'

// wp-graphql
const query = gql`{
  actions {
    edges {
      node {
        id
        action {
          page {
            heading
          	subheading
            featuredImage {
              guid
            	srcSet
          	}
          }
          action {
            heading
						context
          	format
            buttonText
            petition {
            	petition
          	}
          	letter {
            	salutations
            	letter
            	regards
          	}
          }
          profile {
            name
            email
            about
            headshot {
              guid
              srcSet
            }
          }
          affiliation {
            sector
            company {
              logo {
                guid
                srcSet
              }
              company
              position
              address {
                streetAddress
                latitude
                longitude
              }
            }
            elected {
              jurisdiction
              party
              address {
                streetAddress
                latitude
                longitude
              }
            }
          }
          design {
	          colorPrimary
            colorSecondary
            backgroundImage {
              guid
              srcSet
            }
          }
        }
      }
    }
  }
}`

const Action = () => {
  const {
    loading,
    error,
    data,
  } = useQuery(query)

  const RenderAction = ({
    page,
    action,
    design,
    affiliation,
    profile
  }) => (
    <Box sx={{
      maxWidth: 1200,
      mx: 'auto',
      px: 4,
    }}>
      <Header
        heading={page.heading}
        subheading={page.subheading} />
      <Grid width={[1/1]} pt={[3, 5]}>
        <Box width={[1/1]} mb={[0, 4]}>
          <AnimatePresence>
            <CallToAction
              colorPrimary={design.colorPrimary}
              petition={action.petition.petition}
              heading={action.heading}
              buttonText={action.buttonText} />
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              style={{position: `relative`}}
              initial={{ opacity: 0, top: `20px` }}
              animate={{ opacity: 1, top: 0 }}
              exit={{ opacity: 0, top: `20px` }}
              transition={{
                delay: 1,
                duration: 0.5
              }}>
              <RevCard p={[4]} style={{ borderRadius: `1px` }}>
                <Heading mb={[0, 3]}>
                  What's this all about?
                </Heading>

                <Image
                  srcSet={affiliation.company.logo.guid}
                  width={[1 / 2]}
                  style={{display: `inline`, float: `left`}}
                  pr={[4]} />

                <ContentContainer
                  primaryColor={design.colorPrimary}
                  html={action.context} />
              </RevCard>
            </motion.div>
          </AnimatePresence>
        </Box>

        <Box width={[1/1]}>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 1,
                duration: 2
              }}>
              <RevCard
                p={[4]}
                pt={[4]}
                mb={[2, 4]}
                style={{ borderRadius: `1px` }}>
                <Flex
                  flexDirection={['column', 'row']}>
                  <Box
                    width={[1/1, 1/3]}
                    pr={[0, 4]}
                    pt={[0, 3]}
                    style={{ borderRadius: `1px` }}>
                    <Image
                      srcSet={profile.headshot.srcSet}
                      width={[1/1, 256]}
                      height={[256]}
                      sx={{
                        objectFit: 'cover',
                        borderRadius: 9999,
                      }} />
                  </Box>

                  <Box width={[1/1, 2/3]}>
                    {profile && profile.name && profile.about ? (
                      <Box style={{ borderRadius: `1px` }}>
                        <Pair pt={[0]} label={`targeting`} content={`${profile.name} ${`<${profile.email}>`}`} />
                        <Pair label={`about`} html={profile.about} />
                        <Pair label={`organization`} html={affiliation.company.company} />
                        <Pair label={`position`} html={affiliation.company.position} />
                      </Box>
                    ):null}
                  </Box>
                </Flex>
              </RevCard>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Grid>
    </Box>
  )

  if (loading) return <Loading />
  if(error)   return <div>Error...</div>
  if(data)    return data.actions.edges.map(edge => {
    const {
      profile,
      page,
      action,
      affiliation,
      design
    } = edge.node.action

    return (
      <Scrollbar>
        <motion.div
          initial={{ backgroundColor: `rgb(175, 198, 255)`}}
          animate={{ opacity: 1,
            backgroundColor: `${design.colorSecondary}`}}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0,
            duration: 1
          }}>
          <Box sx={{
            backgroundImage: `url(${design.backgroundImage && design.backgroundImage.guid})`,
            backgroundSize: `cover`,
            backgroundPosition: `fixed`,
            backgroundRepeat: `no-repeat`,
            paddingBottom: 4,
          }}>
            <RenderAction
              design={design}
              profile={profile}
              page={page}
              action={action}
              affiliation={affiliation} />
          </Box>
        </motion.div>
      </Scrollbar>
    )
  })
}

export { Action }