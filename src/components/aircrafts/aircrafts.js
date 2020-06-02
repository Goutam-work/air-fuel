import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {addAircraft} from '../../store/actions/aircraftAction'
class Aircrafts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aircraft_no : "",
            airline : "",
            columnDefs: [{
                headerName: "Aircraft No", field: "aircraft_no", sortable: true
              }, {
                headerName: "Airline", field: "airline", sortable: true
              }],
              domLayout: 'autoHeight',
              defaultColDef: { resizable: true }
        }
    }

    addAircraft = (event) =>{
        event.preventDefault();
        var newAircraft = {aircraft_no : this.state.aircraft_no,
                            airline : this.state.airline};
        var aircraftdata = {...newAircraft};
       this.props.addAircraft(aircraftdata);
   }

   handleInputs = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
    render() {
        return (
            <div className="container">
                <form onSubmit = {this.addAircraft}>
                    <div className="form-group row">
                        <label htmlFor="aircraft_no" className="col-sm-3">Aircraft No.</label>
                        <div className="col-sm-7">
                            <input type="text" name="aircraft_no" className="form-control" value={this.state.aircraft_no} id="aircraft_no" placeholder="Enter Aircraft No." onChange={this.handleInputs}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="airline" className="col-sm-3">Airline</label>
                        <div className="col-sm-7">
                            <input type="text" name="airline" className="form-control" value={this.state.airline} id="airline" placeholder="Enter Airline" onChange={this.handleInputs}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button type="submit">Add</button>
                    </div>
                </form>
                
                <div className="row">
                    <div className="col-md-6">
                        <div
                            className="ag-theme-alpine"
                            style={{
                            width: '50hw' }}
                            >
                                <AgGridReact
                                columnDefs={this.state.columnDefs}
                                rowData={this.props.aircrafts}
                                domLayout={this.state.domLayout}
                                defaultColDef={this.state.defaultColDef}>
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
        aircrafts: state.aircraft.aircrafts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAircraft: aircraft => dispatch(addAircraft(aircraft))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Aircrafts);