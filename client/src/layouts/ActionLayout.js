/**
 * Modules
 */
import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Box } from 'rebass'

/**
 * Application components
 */
import {
  Loading,
  Error,
  Grid,
  FadeUp,
  Wrapper,
} from '../styled'

import {
  Header,
  CallToAction,
  About,
  Profile,
  AppScrollbar,
 } from '../components'

/**
 * Exports
 */
const ActionLayout = ({gql}) => {
  const { loading, error, data } = useQuery(gql)
  console.log(data)
  const render =
    loading ? <Loading /> :
    error   ? <Error /> :
    data    ? data.actions.edges.map(({
      node: {
        action: {
          profile,
          design,
          action,
          affiliation,
          page,
        }
      }
    }) => (
      <AppScrollbar
        trackColor={`white`}
        thumbColor={design.colorPrimary && design.colorPrimary}>
        <Wrapper
          backgroundColor={design.colorSecondary}
          backgroundImage={design.backgroundImage}>
          <Header
            heading={page.heading}
            subheading={page.subheading} />
          <Grid pt={[3, 5]}>
            <Box mb={[0, 4]}>
              <FadeUp>
                <CallToAction
                  colorPrimary={design.colorPrimary && design.colorPrimary}
                  petition={action.petition.petition}
                  heading={action.heading}
                  buttonText={action.buttonText} />
              </FadeUp>
              <FadeUp>
                <About
                  hover={design.colorPrimary}
                  image={affiliation.company.logo && affiliation.company.logo.guid}
                  color={design.colorPrimary}
                  html={action.context} />
              </FadeUp>
            </Box>
            <Box>
              <FadeUp>
                <Profile
                  name={profile.name}
                  email={profile.email}
                  about={profile.about}
                  company={affiliation.company.company}
                  position={affiliation.company.position}
                  srcSet={profile.headshot.srcSet}
                  color={design.colorPrimary} />
              </FadeUp>
            </Box>
          </Grid>
        </Wrapper>
      </AppScrollbar>
    )
  ) : <Loading />

  return render
}

export { ActionLayout }