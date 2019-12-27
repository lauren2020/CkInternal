import React from "react"
import styles from './styles'

const ProgramTile = ({
    program
}) => {
    return (
        <div className="programTile">
            {program.name}
        </div>
    )
}

export default ProgramTile;
