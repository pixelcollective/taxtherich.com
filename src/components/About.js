import React from 'react'

import {
  Heading,
  Image
} from 'rebass'

import {
  RevCard,
  ContentContainer
} from './../styled'

const About = ({image, color, html}) => (
  <RevCard p={[4]} style={{ borderRadius: `1px` }}>
    <Heading mb={[0, 3]}>
      What's this all about?
    </Heading>
    <Image
      srcSet={image}
      width={[1/2]}
      style={{ display: `inline`, float: `left` }}
      pr={[4]} />
    <ContentContainer
      primaryColor={color}
      html={html} />
  </RevCard>
)

export default About