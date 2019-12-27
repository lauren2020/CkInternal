import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';

import styles from './styles'

import Navigation from './home/Navigation'
import UserInfoBanner from './home/UserInfoBanner'
import SchoolsList from './home/SchoolsList'
import ClassPeriodsPage from './classPeriods/ClassPeriodsPage'
import HoursPage from './hours/HoursPage'
import ProgramsPage from './programs/ProgramsPage'

import mapStateToProps from './selector';
import mapDispatchToProps from './dispatch';

const user1 = {id: "1", name: "Test User"};
const schools = [{id: "1", name: "Test School", channel_name: "test_school"}];

const HomePage = ({
  currentUser
}) => {
  const [selectedTab, setSelectedTab] = React.useState("schools");

  const fetchSchools = () => {
    currentUser.schools
    return [{ id: "1", name: "Morton", channel_name: "test_school", class_periods: [{}], programs: [{}] }];
  }

  const fetchPrograms = () => {
    return [{id: 0, name: "cooking"}, {id: 1, name: "give"}];//[{id: 0, name: "give", sessions: [{ id: 0, name: "Arts", class_periods: [{}] }, {id: 1, name: "Tech", class_periods: []}, {id: 2, name: "Sports", class_periods: []} ], }, {id: 1, name: "cooking"}];
  }

  const fetchClassPeriods = () => {
    currentUser.class_periods
    return [{ id: 0, date: "11-3-19", program: {id: 0, name: "give"}, school: {id: 1, name: "Morton"}, lead: {name: "Alan Jackson"}, assists: [{name: "Garth Brooks"}], attendance_count: 12 }, {id: 1, date: "11-4-19", program: {id: 0, name: "cooking"}, school: {id: 1, name: "Morton"}, lead: {name: "Michael Scott"}, assists: [{name: "Holly Flax"}], attendance_count: 14 }];
  }

  ///////////////////////////////////////////////////////////////////////////////

  const renderSchoolsPage = () => {
    return (
      <SchoolsList {...{
        schools: fetchSchools()
      }}></SchoolsList>
    )
  }

  const renderHoursDetails = () => {
    return (
      <HoursPage {...{
        total_hours: currentUser.total_hours,
        hours: currentUser.hours
      }}></HoursPage>
    )
  }

  const renderClassPeriods = () => {
    return (
      <ClassPeriodsPage {...{
        classPeriods: fetchClassPeriods()
      }}></ClassPeriodsPage>
    )
  }

  const renderProgramsPage = () => {
    return (
      <ProgramsPage {...{
        programs: fetchPrograms()
      }}></ProgramsPage>
    )
  }

  const renderSelectedPage = (key) => {
    let page = <div></div>;
    console.log(key);
    switch (key) {
      case "schools":
          console.log("render schools");
          page = renderSchoolsPage();
          break;
      case "hours_details":
          console.log("render hours");
          page = renderHoursDetails();
          break;
      case "class_periods":
          console.log("render classes");
          page = renderClassPeriods();
          break;
      case "programs":
          console.log("render programs");
          page = renderProgramsPage();
          break;
      default:
          break;
    }
    return page;
  }

  return (
    <>
        <UserInfoBanner {...{
          user: currentUser
        }}></UserInfoBanner>
        <Navigation {...{
          selectedTab,
          setSelectedTab
        }}></Navigation>
        <div className="pageContent">
          {renderSelectedPage(selectedTab)}
        </div>
    </>
  )
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default Home;
