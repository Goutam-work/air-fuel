export function sortAirport(airport)
{
    return {
    type:'SORT_AIRPORT',
    payload:airport
    }
}

export function addAirport(airport)
{
    return {
    type:'ADD_AIRPORT',
    payload:airport
    }
}

export const updateAirport = (transaction, reverse) => {
    return (dispatch, getState) => {
        dispatch({ type:'UPDATE_AIRPORT', payload:transaction, isReverse: reverse });
    }
}; 