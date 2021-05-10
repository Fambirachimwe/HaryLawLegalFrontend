import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import AllCases from './AllCases';
import Footer from './Footer';
import Header from './Header';
import Lawyers from './Laywers';
import MyCases from './MyCases';
import SideBar from './SideBar';
import StatusCard from './StatusCard';
import Calender from './Calender';
import CaseDetail from './CaseDetail';
import ClientCasePage from './ClientCasePage'
import { Roles } from "../util/util";
import Fees from './Fees';


const MainApp = ({ user, cases }) => {


    let newCases;
    let activeCase;
    let completedCase;

    if (cases) {
        if (cases.length > 0) {
            newCases = cases.filter(element => element.status === 'new')
            activeCase = cases.filter(element => element.status === 'active')
            completedCase = cases.filter(element => element.status === 'completed')
        } else {

            newCases = [];
            activeCase = [];
            completedCase = []


        }


    }




    return (
        <div class="body-wrapper">

            
            <SideBar user={user} />
            <div class="main-wrapper mdc-drawer-app-content">
                <Header />
                <div class="page-wrapper mdc-toolbar-fixed-adjust">
                    <main className="content-wrapper">
                        <div className="mdc-layout-grid">
                            <div className="mdc-layout-grid__inner">

                                {
                                    user.user.role.name === Roles.LAWYER ? (
                                        <>
                                            <StatusCard title={"New"} count={newCases ? newCases.length : 0} icon={"dvr"} styles={""} />
                                            <StatusCard title={"Active"} count={activeCase ? activeCase.length : 0} icon={"attach_money"} styles={{ "background": "#ff420f", "box-shadow": "0 0 10px 15px / 35%" }} />
                                            <StatusCard title={"Completed"} count={completedCase ? completedCase.length : 0} icon={"trending_up"} styles={{ "background": "#7a00ff", "box-shadow": "122 0 255 10px 15px / 35%" }} />
                                        </>

                                    ) : (null)
                                }

                                {/* card here */}


                                <Route exact path={"/"}>
                                    {
                                        user.user.role.name === Roles.LAWYER ? (<AllCases />) :
                                            (<ClientCasePage />)
                                    }
                                </Route>

                                <Route exact path={"/payments"}>
                                    <Fees />
                                </Route>

                                <Route exact path={"/cases/:_id"}>
                                    <CaseDetail />
                                </Route>

                                <Route exact path={"/mycases"}>
                                    <MyCases />
                                </Route>

                                <Route exact path={"/calender"}>
                                    <Calender />
                                </Route>

                                <Route path={"/lawyers"}>
                                    <Lawyers />
                                </Route>

                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       isAuth: () => {dispatch({type: "SET_USER", user: })}
//     }
// }




export default connect(mapStateToProps)(MainApp);
