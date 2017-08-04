import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss';
import 'prismjs/themes/prism-okaidia.css';

const TemplateWrapper = ({ children }) => {
  return <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <div className="blog-masthead">
      <div className="container">
        <nav className="nav blog-nav">
          <a className="nav-link active" href="/">Home</a>
          <a className="nav-link" href="#">New features</a>
          <a className="nav-link" href="#">Press</a>
          <a className="nav-link" href="#">New hires</a>
          <a className="nav-link" href="#">About</a>
        </nav>
      </div>
    </div>

    <div className="blog-header">
      <div className="container">
        <h1 className="blog-title">The Bootstrap Blog</h1>
        <p className="lead blog-description">An example blog template built with Bootstrap.</p>
      </div>
    </div>

    <div className="container">
        {children()}
    </div>
    <footer className="blog-footer">
      <p>Blog template built for <a href="https://getbootstrap.com">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>
  </div>;
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
