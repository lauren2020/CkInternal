import React from "react"
import styles from './styles'

const ProgramsPage = ({
    programs
}) => {
    const [selectedProgram, setSelectedProgram] = React.useState(programs.length > 0 ? programs[0] : null );
    const renderProgram = (program) => {
        return (
            <div className="programTile" onClick={() => setSelectedProgram(program)}>
                <h2>{program.name}</h2>
            </div>
        )
    }

    return (
        <div className="programsPage">
            <div>
                {programs.map(program => renderProgram(program))}
            </div>
            <div>
                {selectedProgram != null 
                    ? <h2>{selectedProgram.name} Resources</h2>
                    : <h2>You have no programs assigned to you.</h2>}
            </div>
        </div>
    )
}

export default ProgramsPage;
