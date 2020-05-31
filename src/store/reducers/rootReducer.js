import authReducer from './authReducer'
import airportReducer from './airportReducer'
import aircraftReducer from './aircraftReducer'
import { combineReducers } from 'redux'
import transactionReducer from './transactionReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    airport: airportReducer,
    aircraft:aircraftReducer,
    transaction:transactionReducer
})

export default rootReducer