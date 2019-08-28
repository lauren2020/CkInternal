import React from "react"
import PropTypes from "prop-types"
import ClassPeriodsList from './classPeriods/list/ClassPeriodsList'
import NewClassPeriodForm from './classPeriods/NewClassPeriodForm'
import { Button } from 'reactstrap';

class ClassPeriodsProvider extends React.Component {
  render () {
    return (
      <React.Fragment>
        Class Periods:
        <ClassPeriodsList {...{
          classPeriods: this.props.classPeriods
        }}>
        </ClassPeriodsList>
        <NewClassPeriodForm></NewClassPeriodForm>
      </React.Fragment>
    );
  }
}
//[{date: "456", attendance_count: 4, recorded_by: "Me"}, {date: "789", attendance_count: 18, recorded_by: "You"}]

ClassPeriodsProvider.propTypes = {
  date: PropTypes.node,
  attendanceCount: PropTypes.node,
  recordedBy: PropTypes.string
};
export default ClassPeriodsProvider
