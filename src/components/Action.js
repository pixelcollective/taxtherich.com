// @react
import React, { useState } from 'react'

// @react-router
import { useHistory } from 'react-router'
import { Link, } from 'react-router-dom'

// @rebass
import { Box, Text } from 'rebass'

// @antd
import { PageHeader, Layout, Typography, Divider, Row, Col } from 'antd'

// Library
import ActionNetworkForm from '../lib/ActionNetwork'

// Components
import ActionContent from './actionContent'

const { Content } = Layout
const { Title } = Typography

const Action = () => {
  let history = useHistory()
  const an = new ActionNetworkForm(`tax-jeff-bezos`)
  an.loadScript()

  return (
    <Content style={{ padding: `0 50px` }}>
      <PageHeader
        backIcon={false}
        onBack={() => history.push('/')}
        style={{ paddingLeft: 0, paddingRight: 0 }}
        title={`The Billionaire Prevention Act.`}
        subTitle={<Text dangerouslySetInnerHTML={{ __html: `
          <p>We have reached a point where over 70% of Americans now believe that the economy is rigged against them.</p>
        `}} /> } />
      <Row gutter={48}>
        <Col sm={24} md={12}>
          <Typography>
            <Title>Take Action: Sign The Billionaire Prevention Act</Title>
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
              dangerouslySetInnerHTML={{__html: `
                <p>We have reached a point where over 70% of Americans now believe that the economy is rigged against them. Last year, "deaths of despair" &mdash; deaths related to suicide, drugs, and alcohol &mdash; reached the highest level ever recorded. Economic inequality in the U.S. is worse than it's been in nearly 100 years: right before the Great Depression.</p>
                <p>The Billionaire Prevention Act is a 4-pillared legislative offensive to set fair taxes for the rich. <strong>We are respectfully demanding that lawmakers:</strong></p>
                <ol>
                <li>Restore the top income tax rate to 70%;</li>
                <li>Levy an annual wealth tax on multi-millionaires and billionaires;</li>
                <li>Strengthen the estate tax to prevent generational wealth stockpiling;</li>
                <li>Equalize taxes on capital gains vs. income from actual work</li>
                </ol>
                <p>This is a legitimate crisis that can be fixed with legitimate policy change. The time to start pushing is now.</p>
              ` }} />
            <Divider />
          </Typography>
        </Col>
        <Col sm={24} md={12}>
          <Box mt={4}>
            <ActionContent light={true} actionId={`tax-jeff-bezos`} />
          </Box>
        </Col>
      </Row>
    </Content>
  )
}

export default Action