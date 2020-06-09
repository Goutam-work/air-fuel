export const auth = (email, password) => {
    
    return (dispatch, getState) => {
        dispatch(authStart());
        dispatch({ type:'AUTHENTICATE', email:email, password: password });
    }
};

export const authStart = () => {
    return{
        type:'AUTH_START'
    };
};

export const authSuccess = (authData) => {
    return {
        type: 'AUTH_SUCCESS',
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: 'AUTH_FAIL',
        error: error
    };
};

export const logout = () => {
    return {
        type: 'AUTH_LOGOUT'
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};