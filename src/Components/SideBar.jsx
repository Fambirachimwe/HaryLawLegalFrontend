import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { Roles } from '../util/util';

const SideBar = ({ user }) => {

    const history = useHistory()

    return (

        <aside class="mdc-drawer mdc-drawer--dismissible mdc-drawer--open">
            <div class="mdc-drawer__header">
                <Link to="/" class="brand-logo">
                    {/* <img src="../assets/images/logo.svg" alt="logo" /> */}
                    <h3 style={{ color: "white" }} >Harry Law Legal</h3>
                </Link>
            </div>
            <div class="mdc-drawer__content">
                <div class="user-info">
                    <p class="name">{user ? user.user.username : ""}</p>
                    <p class="email">{user ? user.user.email : ""}</p>
                </div>
                <div class="mdc-list-group">
                    <nav class="mdc-list mdc-drawer-menu">
                        {
                            user.user.role.name === Roles.LAWYER ? (

                                <div>
                                    <div class="mdc-list-item mdc-drawer-item">
                                        <Link class="mdc-drawer-link" to="/">
                                            <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">home</i>
                                            All Cases
                                        </Link>
                                    </div>
                                    <div class="mdc-list-item mdc-drawer-item">
                                        <Link class="mdc-drawer-link" to="/mycases">
                                        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                                aria-hidden="true">grid_on</i>
                                            My Cases
                                        </Link>
                                    </div>
                                    
                                    <div class="mdc-list-item mdc-drawer-item">
                                        <Link class="mdc-expansion-panel-link" to="/reports" data-toggle="expansionPanel" data-target="ui-sub-menu">
                                            <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                                aria-hidden="true">dashboard</i>
                                                Reports
                                            </Link>
                                    </div>
                                    
                                    <div class="mdc-list-item mdc-drawer-item">
                                        <Link class="mdc-drawer-link" to="/calender">
                                            <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                                aria-hidden="true">pie_chart_outlined</i>
                                            Calender
                                        </Link>
                                    </div>
                                </div>

                            ) :

                                (
                                    <>
                                        <div class="mdc-list-item mdc-drawer-item">
                                        <Link class="mdc-drawer-link" to="/">
                                            <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                                aria-hidden="true">track_changes</i>
                                                Case
                                        </Link>
                                    </div>
                                    <div class="mdc-list-item mdc-drawer-item">
                                        <Link class="mdc-expansion-panel-link" to="/reports" data-toggle="expansionPanel" data-target="ui-sub-menu">
                                            <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                                aria-hidden="true">dashboard</i>
                                                Reports
                                            </Link>
                                    </div>
                                    <div class="mdc-list-item mdc-drawer-item">
                                        <Link class="mdc-drawer-link" to="/payments">
                                            <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                                aria-hidden="true">grid_on</i>
                                           Payments
                                        </Link>
                                    </div>
                                    </>
                                )
                        }
                    </nav>
                </div>
                <div class="profile-actions">
                    <Link to="#">Settings</Link>
                    <span class="divider"></span>
                    <Link to="#" onClick={() => {
                        localStorage.removeItem("token");
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


