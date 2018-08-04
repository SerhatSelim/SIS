import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import Card from '@material-ui/core/Card';
// import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '500px',
      height: '100px',
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      margin: 'auto',
    },
    margin: {
      margin: theme.spacing.unit,
    },
    withoutLabel: {
      marginTop: theme.spacing.unit * 3,
    },
    textField: {
      flexBasis: 500,
    },
    card: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '500px',
      height: '200px',
      padding: '30px',
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      margin: 'auto',
      background: '#E0E0E0'
      },
      button: {
        margin: theme.spacing.unit,
      },
  });
  



class Auth extends Component {
   
    state = {
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      };

      handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };
    
      handleMouseDownPassword = event => {
        event.preventDefault();
      };
    
      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };


      render() {
        const { classes } = this.props;
    
        return (
          <div className={classes.root}>
          <Card className={classes.card}>
           <FormControl className={classNames(classes.margin, classes.textField)}>
        <InputLabel htmlFor="input-with-icon-adornment">e-Mail</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
            <FormControl className={classNames(classes.margin, classes.textField)}>
            
              <InputLabel htmlFor="adornment-password">Password</InputLabel>
              <Input
                id="adornment-password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button variant="contained" size="medium" color="primary" className={classes.button}>
          Log In
        </Button>
            </Card>
          </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         loading: state.auth.loading,
//         error: state.auth.error,
//         isAuthenticated: state.auth.token !== null,
//         buildingBurger: state.burgerBuilder.building,
//         authRedirectPath: state.auth.authRedirectPath
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
//         onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/' ) )
//     };
// };

// export default connect( mapStateToProps, mapDispatchToProps )( Auth );

Auth.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Auth);
