import React from 'react';
import { Route } from 'react-router-dom';
import StatusCard from './StatusCard';
import AllCases from './AllCases';
import Table from './Table';
import Lawyers from './Laywers';


const Main = () => (
   
        <main className="content-wrapper">
            <div className="mdc-layout-grid">
                <div className="mdc-layout-grid__inner">
                    
                    {/* card here */}
                    <StatusCard title={"New"} count={6} icon={"dvr"} styles={""} />
                    <StatusCard title={"Active"} count={5} icon={"attach_money"} styles={{"background":"#ff420f", "box-shadow":"0 0 10px 15px / 35%"}} />
                    <StatusCard title={"Completed"} count={3} icon={"trending_up"} styles={{"background":"#7a00ff", "box-shadow":"122 0 255 10px 15px / 35%"}} />
                    {/* trending_up */}
                    {/* attach_money */}


                    {/* All Cases */}

                    <Route path={"/"}>
                        <AllCases />
                    </Route>

                    <Route path={"/lawyers"}>
                        <Lawyers />
                    </Route>

                </div>
            </div>
        </main>
    
);


export default Main;

