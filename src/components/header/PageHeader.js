// @react
import React from 'react'

// @react-router
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

// @rebass
import { Box, Image } from 'rebass'

// @antd
import {
  PageHeader as AntHeader,
  Breadcrumb,
} from 'antd'

/**
 * Exports component
 */
const PageHeader = ({
  excerpt,
  title,
  image,
  disableBack
}) => {
  let history = useHistory()

  return (
    <Box mb={[4]}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={`/`}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
      <AntHeader
        onBack={() => history.push('/')}
        back={disableBack ? false : true}
        style={{ paddingLeft: 0, paddingRight: 0 }}
        title={title}
        subTitle={<Box dangerouslySetInnerHTML={{ __html: excerpt }} />} />
      {image && (
        <Image src={image} w={[`100%`]} />
      )}
    </Box>
  )
}

export default PageHeader
