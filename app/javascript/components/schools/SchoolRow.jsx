import React from "react"
import styles from './styles'
import ProgramTile from './ProgramTile'

const SchoolRow = ({
    school,
    programs
}) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const renderProgramTile = (program) => {
        return (
            <ProgramTile {...{
                program
            }}></ProgramTile>
        )
    }

    return (
        <>
            <div className="schoolRow" onClick={() => setIsExpanded(!isExpanded)}>
                <h2>{school.name}</h2>
            </div>
            { isExpanded && <div className="schoolExpandedContent" > {programs.map(program => renderProgramTile(program))} </div> }
        </>
    )
}

export default SchoolRow;