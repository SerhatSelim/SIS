import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    courses: [],
    loading: false,
    added: false
};

const addCourseInit = ( state, action ) => {
    return updateObject( state, { added: false } );
};

const addCourseStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const addCourseSuccess = ( state, action ) => {
    const newCourse = updateObject( action.orderData, { id: action.orderId } );
    return updateObject( state, {
        loading: false,
        added: true,
        courses: state.courses.concat( newCourse )
    } );
};

const addCourseFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchCoursesStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchCoursesSuccess = ( state, action ) => {
    return updateObject( state, {
        courses: action.courses,
        loading: false
    } );
};

const fetchCoursesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_COURSE_INIT: return addCourseInit( state, action );
        case actionTypes.ADD_COURSE_START: return addCourseStart( state, action );
        case actionTypes.ADD_COURSE_SUCCESS: return addCourseSuccess( state, action )
        case actionTypes.ADD_COURSE_FAIL: return addCourseFail( state, action );
        case actionTypes.FETCH_COURSES_START: return fetchCoursesStart( state, action );
        case actionTypes.FETCH_COURSES_SUCCESS: return fetchCoursesSuccess( state, action );
        case actionTypes.FETCH_COURSES_FAIL: return fetchCoursesFail( state, action );
        default: return state;
    }
};

export default reducer;