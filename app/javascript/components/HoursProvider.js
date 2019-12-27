import React from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

class HomeProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser: this.props.user,
    });
    
    return (
      <Provider store={store}>
        <Home></Home>
      </Provider>
    );
  }
}

export default HomeProvider
