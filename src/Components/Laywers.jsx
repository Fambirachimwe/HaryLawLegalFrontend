import React from 'react';
import LawyerTable from './LawyerTable';

const Lawyers = () => (
    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
        <div className="mdc-card">
            <div className="d-flex justify-content-between">
                <h4 className="card-title mb-0">Lawyers</h4>
                <div>
                    <i className="material-icons refresh-icon">refresh</i>
                    <i className="material-icons options-icon ml-2">more_vert</i>
                </div>
            </div>
            <div className="d-block d-sm-flex justify-content-between align-items-center">
                {/* <h5 className="card-sub-title mb-2 mb-sm-0">Sales performance revenue based by country</h5> */}

            </div>
            <div className="mdc-layout-grid__inner mt-2">
                <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--span-8-tablet">
                    <div className="table-responsive">
                        <table className="table dashboard-table">
                            {/*  insert the Case table here  */}

                            <LawyerTable />

                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
);




export default Lawyers;
