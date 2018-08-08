import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Indicator(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress />
       
    </div>
  );
}

Indicator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Indicator);