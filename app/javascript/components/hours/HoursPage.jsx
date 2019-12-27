import React from "react"
import styles from './styles'

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from '../shared/DatePicker'

const HoursPage = ({
    hours,
    total_hours
}) => {
    console.log("Hours: " + hours);
    const [addHoursForm, setAddHoursForm] = React.useState("buttons");
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleSchoolsMenu = () => {
        setIsOpen(!isOpen)
    }

    const renderProgramHoursEntry = (title, allHours, brokenDownHours) => {
        // const [showDetails, setShowDetails] = React.useState(false);
        // onClick={() => setShowDetails(true)}
        return (
            <div>
                <h2>{title}: {allHours} hours</h2>
                <div>
                    {brokenDownHours.map(singleHours => 
                        <p>{singleHours.title}: {singleHours.hours}</p>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="hoursPage" >
            <div>
            <h2>Total Hours: {total_hours}</h2>
            {Object.entries(hours).map(([program, value]) => {
                let allHours = 0;
                let brokenDownHours = [];
                Object.entries(value).map(([hoursType, hours]) => {
                    allHours += hours;
                    brokenDownHours.push({ title: hoursType, hours });
                });
                return renderProgramHoursEntry(program, allHours, brokenDownHours);
            })}
            </div>
            <div className="addHoursTile">
                <h2>Add Hours:</h2>
                {addHoursForm === "buttons" && <div> 
                    <Button color="primary" onClick={() => setAddHoursForm("program")} >Program Hours</Button>
                    <Button color="primary" onClick={() => setAddHoursForm("planning")} >Planning Hours</Button>
                    <Button color="primary" onClick={() => setAddHoursForm("meeting")} >Meeting Hours</Button>
                    <Button color="primary" onClick={() => setAddHoursForm("field_trip")} >Field Trip Hours</Button>
                </div>}
                {addHoursForm == "program" &&
                    <div>
                        <Button color="primary" onClick={() => setAddHoursForm("buttons")} >{"< Back"}</Button>
                        <h3>Add Program Hours</h3>
                        <DatePicker {...{
                            hint: "Class Date"
                        }}></DatePicker>
                        <Form>
                        <FormGroup>
                            <Label for="hours">Hours</Label>
                            <Input type="hours" name="Hours" id="hours" placeholder="Hours" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="attendance">Attendance</Label>
                            <Input type="hours" name="Attendance" id="attendance" placeholder="Attendance" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="progress">Progress:</Label>
                            <Input type="progress" name="Progress" id="progress" placeholder="Progress" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="school">School</Label>
                            <Input type="select" name="School" id="school">
                                <option>Morton</option>
                                <option>Nathan Hale</option>
                                <option>Lewis & Clark</option>
                                <option>Marrs</option>
                                <option>Spring Lake</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="program">Program</Label>
                            <Input type="select" name="Program" id="program">
                                <option>Give</option>
                                <option>Cooking</option>
                            </Input>
                        </FormGroup>
                        </Form>
                        <Button color="primary">Add New Class Period & Log Hours</Button>
                    </div>
                }
                {addHoursForm == "planning" && <div>
                    <Button color="primary" onClick={() => setAddHoursForm("buttons")} >{"< Back"}</Button>
                    <h3>Add planning hours:</h3>
                    <Form>
                        <FormGroup>
                            <Label for="hours">Hours</Label>
                            <Input type="hours" name="Hours" id="hours" placeholder="Hours" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="program">Program</Label>
                            <Input type="select" name="Program" id="program">
                                <option>Give</option>
                                <option>Cooking</option>
                            </Input>
                        </FormGroup>
                    </Form>
                    <Button color="primary">Add Planning Hours</Button>
                </div>}
                {addHoursForm == "meeting" && <div>
                    <Button color="primary" onClick={() => setAddHoursForm("buttons")} >{"< Back"}</Button>
                    <h3>Add meeting hours:</h3>
                    <Form>
                        <FormGroup>
                            <Label for="hours">Hours</Label>
                            <Input type="hours" name="Hours" id="hours" placeholder="Hours" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="program">Program</Label>
                            <Input type="select" name="Program" id="program">
                                <option>Give</option>
                                <option>Cooking</option>
                                <option>All</option>
                            </Input>
                        </FormGroup>
                    </Form>
                    <Button color="primary">Add Meeting Hours</Button>
                </div>}
                {addHoursForm == "field_trip" && <div>
                    <Button color="primary" onClick={() => setAddHoursForm("buttons")} >{"< Back"}</Button>
                    <h3>Add field trip hours:</h3>
                    <Form>
                        <FormGroup>
                            <Label for="hours">Hours</Label>
                            <Input type="hours" name="Hours" id="hours" placeholder="Hours" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="program">Program</Label>
                            <Input type="select" name="Program" id="program">
                                <option>Give</option>
                                <option>Cooking</option>
                                <option>All</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="location">Location:</Label>
                            <Input type="location" name="Location" id="location" placeholder="Location" />
                        </FormGroup>
                    </Form>
                    <Button color="primary">Add Field Trip Hours</Button>
                </div>}

            </div>
        </div>
    )
}

export default HoursPage;
