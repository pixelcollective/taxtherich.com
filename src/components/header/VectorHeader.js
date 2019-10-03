// react
import React from 'react'

// redux
import { useSelector } from 'react-redux'

// styled-components
import styled from 'styled-components'

// @polished
import { complement } from 'polished'

// @rebass
import { Box, Heading } from 'rebass'
import { motion } from 'framer-motion'
import { Vector } from './../../art'

// @antd
import { Row, Col } from 'antd'

const HeaderBox = styled(Box)`
  background: ${props => props.color};
  transition: background-color 0.2s ease-in-out;
  border-bottom: 1px solid white;
`

const Title = styled(Heading)`
  color: ${(props) => props.color};
  transition: color 0.2s ease-in-out;
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  margin-top: 0rem;
`

// exports
const Header = ({ heading, subheading }) => {
  const { color } = useSelector(state => state.color)
  const { paths } = useSelector(state => state.paths)
  const colorPairing = complement(color.secondary)

  return (
    <HeaderBox
      color={`#0F0F0F`}
      style={{
        backgroundColor: `#f0f0f0`,
        zIndex: 100,
        position: `relative`
      }}>
      <Row gutter={48}>
        <Col sm={24} md={12} style={{ marginBottom: `4em` }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0, duration: 1 }}>
            <Title
              as='h3'
              fontFamily={[`sans-serif`]}
              fontWeight={[900]}
              style={{ fontSize: `3rem` }}
              mb={2}
              color={`black`}
              dangerouslySetInnerHTML={{ __html: heading }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 2,
            }}>
            <Heading
              as='h2'
              fontSize={[4]}
              fontWeight={['normal']}
              fontFamily={[`sans-serif`]}
              color={`black`}
              dangerouslySetInnerHTML={{ __html: subheading }} />
          </motion.div>
        </Col>
        <Col sm={24} md={12} style={{ position: `relative`, height: `100%` }}>
          <div style={{
            height: `100%`,
            width: `100%`,
            position: `absolute`,
            bottom: `-3rem`
          }}>
            <Vector
              paths={paths}
              color={colorPairing ? colorPairing : `black`} />
          </div>
        </Col>
      </Row>
    </HeaderBox>
  )
}

export default Header