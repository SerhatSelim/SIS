import React, { Component } from 'react';
import { connect } from 'react-redux';

import Course from '../../components/Course/Course';
import axios from '../../helper/axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions';
import Indicator from '../../components/UI/Indicator/Indicator';

class Courses extends Component {
    componentDidMount () {
        this.props.onFetchCourses(this.props.token, this.props.userId);
    }

    render () {
        let courses = <Indicator />;
        if ( !this.props.loading ) {
            courses =  
                <Course
                course={this.props.courses}
                    />
            
        }
        return (
            <div>
                {courses}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        courses: state.course.courses,
        loading: state.course.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCourses: (token, userId) => dispatch( actions.fetchCourses(token, userId) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Courses, axios ) );