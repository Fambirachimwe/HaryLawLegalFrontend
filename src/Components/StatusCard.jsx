import React from 'react';
import { connect } from 'react-redux';

const StatusCard = ({title, count, icon, styles}) => (
    <div
        className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-4-tablet">
        <div className="mdc-card info-card info-card--success">
            <div className="card-inner">
                <h5 className="card-title">{title}</h5>
                <h5 className="font-weight-light pb-2 mb-1 border-bottom">{count}</h5>
                {/* <p className="tx-12 text-muted">48% target reached</p> */}
                <div className="card-icon-wrapper" style={{...styles}}>
                    <i className="material-icons">{icon}</i>
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

export default connect(mapStateToProps)(StatusCard);


