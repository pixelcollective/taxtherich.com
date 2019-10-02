import React from 'react'

import {
  Heading,
  Image,
  Box,
} from 'rebass'

const Content = ({ image, color, html }) => (
  <Box p={[4]} style={{ borderRadius: `1px` }}>
    <Heading mb={[0, 3]}>
      What's this all about?
    </Heading>
    <Image
      srcSet={image}
      width={[1 / 2]}
      style={{ display: `inline`, float: `left` }}
      pr={[4]} />
    <Box
      primaryColor={color}
      html={html} />
  </Box>
)

export default Content