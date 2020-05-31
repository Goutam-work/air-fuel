import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {sortAirport} from '../../store/actions/airportAction'

class Airports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : this.props.airports,
            columnDefs: [{
                headerName: "Airport Name", field: "airport_name", sortable: true
              }, {
                headerName: "Fuel Capacity", field: "fuel_capacity", sortable: true
              }, {
                headerName: "Fuel Available", field: "fuel_available", sortable: true
              }]
        }
        this.sortAirport = this.sortAirport.bind(this);
    }

    sortAirport(airports, param) {
         if(param === 'airport_name'){
            console.log("name");
         }
         else if(param === 'fuel_capacity'){
            console.log("fuel_capacity");
         }
         else if(param === 'fuel_available'){
            console.log("fuel_available");
         }
        this.setState({ data: airports});
        this.props.sortAirport(airports);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div
                            className="ag-theme-alpine"
                            style={{
                            height: '300px',
                            width: '600px' }}
                        >
                            <AgGridReact
                            columnDefs={this.state.columnDefs}
                            rowData={this.state.data}>
                            </AgGridReact>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        airports: state.airport.airports
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        sortAirport:sortAirport
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Airports);