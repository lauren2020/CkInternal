import React from "react"
import PropTypes from "prop-types"
import Navigation from './home/Navigation'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        Home
        <Navigation></Navigation>
      </React.Fragment>
    );
  }
}

export default Home
