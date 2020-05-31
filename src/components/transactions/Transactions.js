import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addTransaction, reverseTransaction, updateAirport} from '../../store/actions/transactionAction'
import CreateTransaction from './CreateTransaction.js'

class Transactions extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    onSave = (transaction_details) => {
       this.props.addTransaction(transaction_details);
       this.props.updateAirport(transaction_details, false);
    }

    onReverse = (transaction) => {
        console.log(transaction.transaction_id)
        this.props.reverseTransaction(transaction.transaction_id);
        this.props.updateAirport(transaction, true);
    }

    render() {
        const { aircrafts } = this.props;
        const { transactions } = this.props;
        let airport_data = []
        airport_data = Object.assign([], airport_data, this.props.airports);
        return (
            <div className="container">
                <div className="row">
                    <CreateTransaction airports={airport_data} aircrafts={aircrafts} transactions={transactions} onSave = {this.onSave} onReverse = {this.onReverse} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        airports: state.airport.airports,
        aircrafts: state.aircraft.aircrafts,
        transactions: state.transaction.transactions 
    }
}
  
const mapDispatchToProps = (dispatch) => {
        return {
            addTransaction: (transaction_details) => dispatch(addTransaction(transaction_details)),
            reverseTransaction: (transaction_Id) => dispatch(reverseTransaction(transaction_Id)),
            updateAirport: (transaction, reverse) => dispatch(updateAirport(transaction, reverse))
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Transactions);