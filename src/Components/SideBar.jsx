import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { Roles } from '../util/util';

const SideBar = ({ user }) => {

    const history = useHistory()

    return (

        <aside className="mdc-drawer mdc-drawer--dismissible mdc-drawer--open">
            <div className="mdc-drawer__header">
                <Link to="/" className="brand-logo">
                    {/* <img src="../assets/images/logo.svg" alt="logo" /> */}
                    <h3 style={{ color: "white" }} >Harry Law Legal</h3>
                </Link>
            </div>
            <div className="mdc-drawer__content">
                <div className="user-info">
                    <p className="name">{user ? user.user.username : ""}</p>
                    <p className="email">{user ? user.user.email : ""}</p>
                </div>
                <div className="mdc-list-group">
                    <nav className="mdc-list mdc-drawer-menu">
                        {
                            user.user.role.name === Roles.LAWYER ? (

                                <div>
                                    <div className="mdc-list-item mdc-drawer-item">
                                        <Link className="mdc-drawer-link" to="/">
                                            <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">home</i>
                                            All Cases
                                        </Link>
                                    </div>
                                    <div className="mdc-list-item mdc-drawer-item">
                                        <Link className="mdc-drawer-link" to="/mycases">
                                        <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                                aria-hidden="true">grid_on</i>
                                            My Cases
                                        </Link>
                                    </div>
                                    
                                    <div className="mdc-list-item mdc-drawer-item">
                                        <Link className="mdc-expansion-panel-link" to="/reports" data-toggle="expansionPanel" data-target="ui-sub-menu">
                                            <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                                aria-hidden="true">dashboard</i>
                                                Reports
                                            </Link>
                                    </div>
                                    
                                    <div className="mdc-list-item mdc-drawer-item">
                                        <Link className="mdc-drawer-link" to="/calender">
                                            <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                                aria-hidden="true">pie_chart_outlined</i>
                                            Calender
                                        </Link>
                                    </div>
                                </div>

                            ) :

                                (
                                    <>
                                        <div className="mdc-list-item mdc-drawer-item">
                                        <Link className="mdc-drawer-link" to="/">
                                            <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                                aria-hidden="true">track_changes</i>
                                                Case
                                        </Link>
                                    </div>
                                    <div className="mdc-list-item mdc-drawer-item">
                                        <Link className="mdc-expansion-panel-link" to="/reports" data-toggle="expansionPanel" data-target="ui-sub-menu">
                                            <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                                aria-hidden="true">dashboard</i>
                                                Reports
                                            </Link>
                                    </div>
                                    <div className="mdc-list-item mdc-drawer-item">
                                        <Link className="mdc-drawer-link" to="/payments">
                                            <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                                aria-hidden="true">grid_on</i>
                                           Payments
                                        </Link>
                                    </div>
                                    </>
                                )
                        }
                    </nav>
                </div>
                <div className="profile-actions">
                    <Link to="#">Settings</Link>
                    <span className="divider"></span>
                    <Link to="#" onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("persist:root");
                        // localStorage.removeItem("persist:root");
                        history.push("/login")
                    }}>Logout</Link>
                </div>

            </div>
        </aside>
    )
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(SideBar);


