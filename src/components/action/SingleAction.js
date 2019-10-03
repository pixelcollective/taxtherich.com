// @react
import React from 'react'

// @react-router
import { useHistory } from 'react-router'

// @styled-components
import styled from 'styled-components'

// @rebass
import { Box, Text } from 'rebass'

// @antd
import { PageHeader, Layout, Typography, Divider, Row, Col } from 'antd'

// Library
import ActionNetworkForm from '../../lib/ActionNetwork'

const { Content } = Layout
const { Title } = Typography

const AdvocacyForm = styled.div`
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
        border-bottom: 1px solid ${props => props.light ? `white` : `rgba(0, 0, 0, 0.2)`};

        &::placeholder {
          color: ${props => props.light ? `white` : `rgba(0, 0, 0, 0.4)`};
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

const SingleAction = () => {
  let an = new ActionNetworkForm(`tax-jeff-bezos`)
  an.loadScript()

  return (
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
            dangerouslySetInnerHTML={{
              __html: `
                <p>We have reached a point where over 70% of Americans now believe that the economy is rigged against them. Last year, "deaths of despair" &mdash; deaths related to suicide, drugs, and alcohol &mdash; reached the highest level ever recorded. Economic inequality in the U.S. is worse than it's been in nearly 100 years: right before the Great Depression.</p>
                <p>The Billionaire Prevention Act is a 4-pillared legislative offensive to set fair taxes for the rich. <strong>We are respectfully demanding that lawmakers:</strong></p>
                <ol>
                <li>Restore the top income tax rate to 70%;</li>
                <li>Levy an annual wealth tax on multi-millionaires and billionaires;</li>
                <li>Strengthen the estate tax to prevent generational wealth stockpiling;</li>
                <li>Equalize taxes on capital gains vs. income from actual work</li>
                </ol>
                <p>This is a legitimate crisis that can be fixed with legitimate policy change. The time to start pushing is now.</p>
              `
            }} />
          <Divider />
        </Typography>
      </Col>
      <Col sm={24} md={12}>
        <Box mt={4}>
          <AdvocacyForm id={`can-petition-area-tax-jeff-bezos`} />
        </Box>
      </Col>
    </Row>
  )
}

export default SingleAction