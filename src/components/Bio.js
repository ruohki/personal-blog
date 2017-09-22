import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src="https://s.gravatar.com/avatar/f7f1b87e8299f81d857f3ac824a8ccaf?s=80"
          alt={`Kyle Mathews`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Propagiert von <strong>Tillmann Hübner</strong> der in Erfurt lebt und arbeitet.{' '}
        <a href="https://twitter.com/ruohki">
          Es existiert ein Twitter Account
        </a>
      </p>
    )
  }
}

export default Bio
