import React, { Component } from 'react';
import { connect } from 'react-redux';

class AirportReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    getTransactionDom(airport_id) {
        var transactions = this.props.transactions;
        const items = []
        for (var i=0; i < transactions.length; i++) {
            if (transactions[i].airport_id == airport_id) {
                console.log("passed id "+transactions[i].aircraft_id);
                items.push( <div className="row">
                    <div className="col-md-3">{transactions[i].transaction_date_time}</div>
                    <div className="col-md-1">{transactions[i].transaction_type}</div>
                    <div className="col-md-1">{transactions[i].quantity}</div>
                    {this.getAircraftDom(transactions[i].aircraft_id)}
                    <div className="col-md-1">{transactions[i].isReverse ? 'Reversed' : 'Active'}</div>
                </div>
            )
            }
        }
        return items
    }

    getAircraftDom(aircraft_id) {
        var aircraftes = this.props.aircrafts;
        for (var i=0; i < aircraftes.length; i++) {
            if (aircraftes[i].aircraft_id == aircraft_id) {
                return (
                        <div className="col-md-1">{aircraftes[i].aircraft_no}</div>
                )
            }
        }
        return (
            <div className="col-md-1">------</div>
        )
    }

    getAirportReportDom(airports) {
        
        return (
            <div className="container">
                <h4>Airport Summery Report</h4>
                <div style={{fontFamily:"Courier New"}}>
                    <div className="row">
                        <div className="col-md-8">
                            Airport
                        </div>
                        <div className="col-md-4">
                            Fuel Available
                        </div>
                    </div>
                    <hr style={{borderTop: "1px dashed black"}}></hr>
                    {
                        airports.map((airport)=> {
                            return <div className="row" key={airport.airport_id}>
                                        <div className="col-md-8">
                                            {airport.airport_name}
                                        </div>
                                        <div className="col-md-4">
                                            {airport.fuel_available}
                                        </div>
                                    </div>
                                })
                    }
                </div>
            </div>    
        )
    }

    getFuelconsumptionReportDom(airports) {
        
        return (
            <div className="container">
                <h4>Fuel Consumption Report</h4>
                <div style={{fontFamily:"Courier New"}}>
                    {
                        airports.map((airport)=> {
                            return <div key={airport.airport_id}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                Airport: {airport.airport_name}
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row">
                                            <div className="col-md-3">Date/Time</div>
                                            <div className="col-md-1">Type</div>
                                            <div className="col-md-1">Fuel</div>
                                            <div className="col-md-1">Aircraft</div>
                                            <div className="col-md-1">Status</div>
                                        </div>
                                        {this.getTransactionDom(airport.airport_id)}
                                        <br></br>
                                        <div className="row">
                                            <div className="col-md-12">
                                                Fuel Available: {airport.fuel_available}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <hr style={{borderTop: "1px dashed black"}}></hr>
                                            </div>
                                        </div>
                                    </div>
                                })
                    }
                </div>
            </div>    
        )
    }

    getReportDom(type,airports){
        
        switch(type){

            case 'airport':
                return (
                    this.getAirportReportDom(airports)
                )
            case 'fuel':
                return (
                    this.getFuelconsumptionReportDom(airports)
                )
            default:
                return (
                    <div className="container">
                        {this.getAirportReportDom(airports)}
                        <br></br>
                        {this.getFuelconsumptionReportDom(airports)}
                    </div>
                    
                );
        }
    }

    render() {
        //const { aircrafts } = this.props;
        const { airports } = this.props;
        //const { transactions } = this.props;
        const Dom = this.getReportDom(this.props.match.params.type,airports);
        return (
            <div className="container">
                {Dom}
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

export default connect(mapStateToProps)(AirportReport);