import React from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const ClassPeriodsList = ({
    classPeriods
}) => {
    const renderClassPeriod = (classPeriod) => {
        return (
            <TableRow>
                <TableCell>classPeriod.date</TableCell>
                <TableCell>{classPeriod.attendance_count}</TableCell>
                <TableCell>{classPeriod.recorded_by}</TableCell>
            </TableRow>
        )
    }
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Attendance Count</TableCell>
                    <TableCell>Recorded By</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell>8-27-19</TableCell>
                <TableCell>5</TableCell>
                <TableCell>Lauren</TableCell>
            </TableRow>
                {classPeriods.map(classPeriod => renderClassPeriod(classPeriod))}
            </TableBody>
        </Table>
    )
}

export default ClassPeriodsList;