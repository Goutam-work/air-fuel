const initialState = {
    aircrafts: [
        {aircraft_id: '1', aircraft_no: '6E 449', airline:'Indigo'},
        {aircraft_id: '2', aircraft_no: 'G8-1181', airline:'Go Air'},
        {aircraft_id: '3', aircraft_no: 'UK862', airline:'Vistara'},
        {aircraft_id: '4', aircraft_no: 'AI9511', airline:'Air India'},
        {aircraft_id: '5', aircraft_no: '6E 23', airline:'Indigo'}
    ]
}
const aicraftReducer = (state = initialState, action) => {
    return state
}

export default aicraftReducer