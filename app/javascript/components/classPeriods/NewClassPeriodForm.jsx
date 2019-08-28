import React from "react"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import DatePicker from '../shared/DatePicker'

const NewClassPeriodForm = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleSchoolsMenu = () => {
        setIsOpen(!isOpen)
    }

    const renderSchoolItem = (school) => {
        return <DropdownItem>{school.name}</DropdownItem>
    }
    return (
        <div>
            Add New:
            <DatePicker {...{
                hint: "Class Date"
            }}></DatePicker>
            <ButtonDropdown isOpen={isOpen} toggle={toggleSchoolsMenu}>
                <DropdownToggle caret>
                    School
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem key="marrs">Marrs</DropdownItem>
                    <DropdownItem key="morton">Morton</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            <Button color="primary">Add New Class Period</Button>
        </div>
    )
}

export default NewClassPeriodForm;
