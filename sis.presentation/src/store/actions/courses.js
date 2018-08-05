import * as actionTypes from './actionTypes';
 

export const purchaseCourseSuccess = ( id, orderData ) => {
    return {
        type: actionTypes.PURCHASE_COURSE_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseCourseFail = ( error ) => {
    return {
        type: actionTypes.PURCHASE_COURSE_FAIL,
        error: error
    };
}

export const purchaseCourseStart = () => {
    return {
        type: actionTypes.PURCHASE_COURSE_START
    };
};

export const purchaseCourse = ( orderData, token ) => {
    return dispatch => {
        dispatch( purchaseCourseStart() );
        // axios.post( '/orders.json?auth=' + token, orderData )
        //     .then( response => {
        //         dispatch( purchaseCourseSuccess( response.data.name, orderData ) );
        //     } )
        //     .catch( error => {
        //         dispatch( purchaseCourseFail( error ) );
        //     } );
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = ( orders ) => {
    return {
        type: actionTypes.FETCH_COURSE_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_COURSE_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_COURSE_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        // const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        // axios.get( '/orders.json' + queryParams)
        //     .then( res => {
        //         const fetchedOrders = [];
        //         for ( let key in res.data ) {
        //             fetchedOrders.push( {
        //                 ...res.data[key],
        //                 id: key
        //             } );
        //         }
        //         dispatch(fetchOrdersSuccess(fetchedOrders));
        //     } )
        //     .catch( err => {
        //         dispatch(fetchOrdersFail(err));
        //     } );
    };
};