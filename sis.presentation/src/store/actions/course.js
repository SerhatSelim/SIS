import * as actionTypes from './actionTypes';
import axios from '../../helper/axios';

export const addCourseSuccess = ( id, courseData ) => {
    return {
        type: actionTypes.ADD_COURSE_SUCCESS,
        courseId: id,
        courseData: courseData
    };
};

export const addCourseFail = ( error ) => {
    return {
        type: actionTypes.ADD_COURSE_FAIL,
        error: error
    };
}

export const addCourseStart = () => {
    return {
        type: actionTypes.ADD_COURSE_START
    };
};

export const addCourse = ( courseData, token ) => {
    return dispatch => {
        dispatch( addCourseStart() );
        axios.post( '/Courses.json?auth=' + token, courseData )
            .then( response => {
                dispatch( addCourseSuccess( response.data.name, courseData ) );
            } )
            .catch( error => {
                dispatch( addCourseFail( error ) );
            } );
    };
};

export const addCourseInit = () => {
    return {
        type: actionTypes.ADD_COURSE_INIT
    };
};

export const fetchCoursesSuccess = ( courses ) => {
    return {
        type: actionTypes.FETCH_COURSES_SUCCESS,
        courses: courses
    };
};

export const fetchCoursesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_COURSES_FAIL,
        error: error
    };
};

export const fetchCoursesStart = () => {
    return {
        type: actionTypes.FETCH_COURSES_START
    };
};

export const fetchCourses = (token, userId) => {
    return dispatch => {
        dispatch(fetchCoursesStart());
//        const queryParams = 
//        axios.get( '/courses.json' + queryParams)
        axios.get( '/Courses.json' )
            .then( res => {
                const fetchedCourses = [];
                for ( let key in res.data ) {
                    fetchedCourses.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchCoursesSuccess(fetchedCourses));
            } )
            .catch( err => {
                dispatch(fetchCoursesFail(err));
            } );
    };
};