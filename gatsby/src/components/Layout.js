import React from 'react'
import Helmet from 'react-helmet'
import Navbar from './Navbar'
import './scss/app.scss';

const TemplateWrapper = ({ children }) => (
  <div className="app">
    <Helmet title="Tax The Rich" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
