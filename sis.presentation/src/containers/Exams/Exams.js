import React, { Component } from 'react';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';


class Exams extends Component {
    

    render () {
         
        return (
            <div>exams</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.courses.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
       
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)( Exams );
export default  Exams ;
