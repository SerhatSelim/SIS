import React from 'react';

import classes from './Course.css';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

const course = ( props ) => {
    const data = [];
    data.push(props);
    
    return (   
        <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Courses</TableCell>
            <TableCell numeric>Credit</TableCell>
            <TableCell numeric>Exams</TableCell>
            <TableCell numeric>Hours</TableCell>
            <TableCell numeric>Semester</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map(n => {
            return (
              <TableRow key={data.id}>
                <TableCell component="th" scope="row">
                  {data.Name}
                </TableCell>
                <TableCell numeric>{data.Credit}</TableCell>
                <TableCell numeric>{data.Exams}</TableCell>
                <TableCell numeric>{data.Hours}</TableCell>
                <TableCell numeric>{data.Semester}</TableCell>
              </TableRow>
               );
            })}
        </TableBody>
      </Table>
    </Paper>
    );
};

export default withStyles(styles)(course);