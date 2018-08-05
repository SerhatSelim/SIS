import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseInit = ( state, action ) => {
    return updateObject( state, { purchased: false } );
};

const purchaseCourseStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const purchaseCourseSuccess = ( state, action ) => {
    const newOrder = updateObject( action.orderData, { id: action.orderId } );
    return updateObject( state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat( newOrder )
    } );
};

const purchaseCourseFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchOrdersStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchOrdersSuccess = ( state, action ) => {
    return updateObject( state, {
        orders: action.orders,
        loading: false
    } );
};

const fetchOrdersFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.PURCHASE_INIT: return purchaseInit( state, action );
        case actionTypes.PURCHASE_COURSE_START: return purchaseCourseStart( state, action );
        case actionTypes.PURCHASE_COURSE_SUCCESS: return purchaseCourseSuccess( state, action )
        case actionTypes.PURCHASE_COURSE_FAIL: return purchaseCourseFail( state, action );
        case actionTypes.FETCH_COURSE_START: return fetchOrdersStart( state, action );
        case actionTypes.FETCH_COURSE_SUCCESS: return fetchOrdersSuccess( state, action );
        case actionTypes.FETCH_COURSE_FAIL: return fetchOrdersFail( state, action );
        default: return state;
    }
};

export default reducer;