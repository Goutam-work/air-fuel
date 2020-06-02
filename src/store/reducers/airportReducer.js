import update from 'immutability-helper';
const initialState = {
    airports: [
        {airport_id: 1, airport_name: 'Chhatrapati Shivaji Airport', fuel_capacity:'70000', fuel_available:'45000'},
        {airport_id: 2, airport_name: 'Netaji Subhas Chandra Airport', fuel_capacity:'90000', fuel_available:'30000'},
        {airport_id: 3, airport_name: 'Hindustan Airport', fuel_capacity:'60000', fuel_available:'59000'},
        {airport_id: 4, airport_name: 'Indira Gandhi International Airport', fuel_capacity:'100000', fuel_available:'67000'},
        {airport_id: 5, airport_name: 'Chennai Airport', fuel_capacity:'75000', fuel_available:'75000'}
    ]
}
const airportReducer = (state = initialState, action) => {
    //return state
    var stateCopy = [];

    switch(action.type){

        case 'SORT_AIRPORT':
           state.airports = action.payload;
           // return state
            return { ...state, airports: action.payload }
            // return Object.assign({}, state, {
            //     airports: action.payload
            //   })

        case 'ADD_AIRPORT':
            // return {
            //     ...state,
            //     [state.airports] : state.airports.push(action.payload),
            //   }
            var new_airport_id = state.airports.length + 1;
            stateCopy = update(state, {airports: {$push: [{
                                            airport_id : new_airport_id,
                                            airport_name : action.payload.airport_name,
                                            fuel_capacity: action.payload.fuel_capacity,
                                            fuel_available: action.payload.fuel_available
                                        }]}});
            return stateCopy

            
        case 'UPDATE_AIRPORT':
            for (var i=0; i < state.airports.length; i++) {
                if (state.airports[i].airport_id == action.payload.airport_id) {
                    var updateIndex = i;
                }
            }
            if((action.isReverse === true && action.payload.transaction_type === "OUT") || (action.isReverse === false && action.payload.transaction_type === "IN")) {
                var new_fuel_available = parseInt(state.airports[updateIndex].fuel_available) + parseInt(action.payload.quantity);
            } else {
                new_fuel_available = parseInt(state.airports[updateIndex].fuel_available) - parseInt(action.payload.quantity);
            }
            stateCopy = update(state, {airports: {[updateIndex]: { fuel_available: {$set: new_fuel_available}}}}); 
            return stateCopy
    
        default:
            return state;
    }
    
}

export default airportReducer