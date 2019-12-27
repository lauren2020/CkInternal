import React from "react"
import styles from './styles'

const ClassPeriodsPage = ({
    classPeriods
}) => {
    const renderClassPeriod= (classPeriod) => {
        return (
            <div className="classPeriodTile">
                <h2>{classPeriod.date}</h2>
                <h2>{classPeriod.school.name} : {classPeriod.program.name}</h2>
                <h4>Attendance: {classPeriod.attendance_count}</h4>
                <h4>Progress Update:</h4>
                <p>{classPeriod.notes}</p>
                <h4>Lead:</h4>
                <p>{classPeriod.lead.name}</p>
                <h4>Assists: </h4>
                {classPeriod.assists.map(assist => <p>{assist.name}</p>)}
            </div>
        )
    }

    return (
        <div className="classPeriodsPage">
            {classPeriods.map(classPeriod => renderClassPeriod(classPeriod))}
        </div>
    )
}

export default ClassPeriodsPage;
