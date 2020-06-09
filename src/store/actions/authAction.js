export const auth = (email, password) => {
    
    return (dispatch, getState) => {
        dispatch(authStart());
        dispatch(authProcess(email, password));
        dispatch(checkAuthTimeout(3600));
    }
};

export const authStart = () => {
    return{
        type:'AUTH_START'
    };
};

export const authProcess = (email, password) => {
    return {
        type: 'AUTH_PROCESS',
        email:email,
        password: password
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