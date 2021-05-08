import React from 'react';
import { connect } from 'react-redux';
import CalenderTable from './CalenderTable';
import Modal from './Modal';


const Calender = ({user: {user:  {schedules}}}) => (


    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">

        <div className="mdc-card">
            <div className="d-flex justify-content-between">
                <h4 className="card-title mb-0">Up Comming Events </h4>
                <div>
                    <i className="material-icons refresh-icon">refresh</i>
                    {/* <i className="material-icons options-icon ml-2">more_vert</i> */}
                </div>
            </div>
            <div className="d-block d-sm-flex justify-content-between align-items-center">
                {/* <h5 className="card-sub-title mb-2 mb-sm-0">Sales performance revenue based by country</h5> */}

            </div>
            <div className="mdc-layout-grid__inner mt-2">
                <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--span-8-tablet">
                    <div className="table-responsive">

                        <Modal />

                    
                        <table className="table dashboard-table">
                            {/*  insert the Case table here  */}

                            {/* <Table data={assigned_cases} /> */}
                            {/* {console.log(schedules)} */}

                            <CalenderTable schedules={schedules} />

                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>




    
);


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Calender);