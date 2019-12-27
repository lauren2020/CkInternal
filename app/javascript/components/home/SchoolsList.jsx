import React from "react"
import SchoolRow from '../schools/SchoolRow'

const SchoolsList = ({
    schools
}) => {
    const renderSchool = (school) => {
        return (
            <SchoolRow {...{
                school,
                programs: [{name: "GIVE"}, {name: "Cooking"}]
            }}></SchoolRow>
        )
    }
    return (
        <>
            {/* <div className="schoolsListHeader">
                <h2>Schools</h2>
            </div> */}
            {schools.map(school => renderSchool(school))}
        </>
    )
}

export default SchoolsList;
