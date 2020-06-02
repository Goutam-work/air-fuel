import update from 'immutability-helper';
const initialState = {
    transactions: []
}
const transactionReducer = (state = initialState, action) => {
    //return state
    var stateCopy = [];

    switch(action.type){

        case 'ADD_TRANSACTION':
            var new_transaction_id = state.transactions.length + 1;
            var current_date = new Date().toLocaleString();
            if(action.payload.transaction_type === "OUT") {
                var new_aircraft_id = action.payload.aircraft_id;
            } else {
                new_aircraft_id = 0;
            }
            stateCopy = update(state, {transactions: {$push: [{
                                            transaction_id : new_transaction_id,
                                            transaction_date_time : current_date,
                                            transaction_type : action.payload.transaction_type,
                                            airport_id: action.payload.airport_id,
                                            aircraft_id: new_aircraft_id,
                                            quantity: action.payload.quantity,
                                            isReverse: false
                                        }]}});
            return stateCopy

        case 'REVERSE_TRANSACTION':
            for (var i=0; i < state.transactions.length; i++) {
                if (state.transactions[i].transaction_id === action.payload) {
                    var reverseIndex = i;
                }
            }
            stateCopy = update(state, {transactions: {[reverseIndex]: { isReverse: {$set: true}}}});
            return stateCopy

        default:
            return state;
        }
    
    }

export default transactionReducer