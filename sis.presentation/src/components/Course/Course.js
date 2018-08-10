import React from 'react';

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
  const { classes } = props;
    const data = [];
    // data.push(props.course);
    for ( let item in props.course ) {
      data.push(
          {
            Name: props.course[item].Name,
            Credit:props.course[item].Credit,
            Exams:props.course[item].Exams,
            Hours:props.course[item].Hours,
            Semester:props.course[item].Semester,
            id:props.course[item].id
          }
      );
  }
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
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.Name}
                </TableCell>
                <TableCell numeric>{n.Credit}</TableCell>
                <TableCell numeric>{n.Exams}</TableCell>
                <TableCell numeric>{n.Hours}</TableCell>
                <TableCell numeric>{n.Semester}</TableCell>
              </TableRow>
               );
            })}
        </TableBody>
      </Table>
    </Paper>
    );
};

export default withStyles(styles)(course);