import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { NavLink } from 'react-router-dom'
import {sortAirport,addAirport} from '../../store/actions/airportAction'

class Airports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            airport_name :"",
            fuel_capacity :"",
            fuel_available :"",
            columnDefs: [{
                headerName: "Airport Name", field: "airport_name", sortable: true
              }, {
                headerName: "Fuel Capacity", field: "fuel_capacity", sortable: true
              }, {
                headerName: "Fuel Available", field: "fuel_available", sortable: true
              }],
              domLayout: 'autoHeight',
              defaultColDef: { resizable: true }
        }
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

    addAirport = (event) =>{
        event.preventDefault();
        var newAirport ={airport_name : this.state.airport_name,
                        fuel_capacity : this.state.fuel_capacity,
                        fuel_available : this.state.fuel_available};
        var airportdata = { ...newAirport };
       this.props.addAirport(airportdata);
   }

   handleInputs = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

    render() {
        return (
            <div className="container">
                <form onSubmit = {this.addAirport}>
                    <div className="form-group row">
                        <label htmlFor="airport_name" className="col-sm-3">Airport Name</label>
                        <div className="col-sm-7">
                            <input type="text" name="airport_name" className="form-control" value={this.state.airport_name} id="airport_name" placeholder="Enter Airport Name" onChange={this.handleInputs}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="fuel_capacity" className="col-sm-3">Fuel Capacity</label>
                        <div className="col-sm-7">
                            <input type="number" name="fuel_capacity" className="form-control" value={this.state.fuel_capacity} id="fuel_capacity" placeholder="Enter Fuel Capacity" onChange={this.handleInputs}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="fuel_available" className="col-sm-3">Fuel Available</label>
                        <div className="col-sm-7">
                            <input type="number" name="fuel_available" className="form-control" value={this.state.fuel_available} id="fuel_available" placeholder="Enter Fuel Available" onChange={this.handleInputs}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button type="submit">Add</button>
                    </div>
                </form>
                
                <div className="row">
                    <div className="col-md-8">
                        <div
                            className="ag-theme-alpine"
                        >
                            <AgGridReact
                            columnDefs={this.state.columnDefs}
                            rowData={this.props.airports}
                            domLayout={this.state.domLayout}
                            defaultColDef={this.state.defaultColDef}>
                            </AgGridReact>
                        </div>
                    </div>
                </div>
                <NavLink to="/report/airport" className="nav-link">
                    <button type="button" className="btn btn-primary">Report</button>
                </NavLink>
                
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
    return {
        sortAirport: () => dispatch(sortAirport()),
        addAirport: airport => dispatch(addAirport(airport))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Airports);