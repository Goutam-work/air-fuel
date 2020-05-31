import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class Aircrafts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : this.props.aircrafts,
            columnDefs: [{
                headerName: "Aircraft No", field: "aircraft_no", sortable: true
              }, {
                headerName: "Airline", field: "airline", sortable: true
              }]
        }
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
                            width: '400px' }}
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
        aircrafts: state.aircraft.aircrafts
    }
}


export default connect(mapStateToProps)(Aircrafts);