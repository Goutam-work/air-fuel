import update from 'immutability-helper';
const initialState = {
    aircrafts: [
        {aircraft_id: 1, aircraft_no: '6E 449', airline:'Indigo'},
        {aircraft_id: 2, aircraft_no: 'G8-1181', airline:'Go Air'},
        {aircraft_id: 3, aircraft_no: 'UK862', airline:'Vistara'},
        {aircraft_id: 4, aircraft_no: 'AI9511', airline:'Air India'},
        {aircraft_id: 5, aircraft_no: '6E 23', airline:'Indigo'}
    ]
}
const aicraftReducer = (state = initialState, action) => {
    var stateCopy = [];
    switch(action.type){

        case 'ADD_AIRCRAFT':
            var new_aircraft_id = state.aircrafts.length + 1;
            stateCopy = update(state, {aircrafts: {$push: [{
                                        aircraft_id : new_aircraft_id,
                                        aircraft_no : action.payload.aircraft_no,
                                        airline: action.payload.airline
                                        }]}});
            return stateCopy
    
        default:
            return state;
        }
}

export default aicraftReducer