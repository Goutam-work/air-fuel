export function sortAirport(airport)
{
    return {
    type:'SORT_AIRPORT',
    payload:airport
    }
}

export const updateAirport = (transaction, reverse) => {
    console.log(reverse);
    return (dispatch, getState) => {
        dispatch({ type:'UPDATE_AIRPORT', payload:transaction, isReverse: reverse });
    }
};