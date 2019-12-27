import React from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import Home from './Home'

const standardUser = {id: "1", 
name: "Michael Scott", 
isAdmin: false, 
isSuperUser: false, 
total_hours: 18, 
hours: { 
  give: {program_hours: 3, planning_hours: 3, meeting_hours: 2, field_trip_hours: 1},
  cooking: {program_hours: 3, planning_hours: 3, meeting_hours: 2, field_trip_hours: 1}
}, 
schools: [1, 2],
programs: [1, 2],
class_periods: [0, 1, 2]};

const adminUser = {id: "1", name: "Admin User", isAdmin: true, isSuperUser: false}
const superUser = {id: "1", name: "Super User", isAdmin: true, isSuperUser: true}

class HomeProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser: standardUser,
    });
    
    return (
      <Provider store={store}>
        <Home></Home>
      </Provider>
    );
  }
}

export default HomeProvider