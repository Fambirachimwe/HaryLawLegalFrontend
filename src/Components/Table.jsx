import { Chip } from '@material-ui/core';
import React from 'react';
import { withRouter} from 'react-router-dom';


const Table = ({ data, history }) => {



    return (
    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">


        <div className="mdc-card p-0">
            <h6 className="card-title card-padding pb-0"></h6>
            <div className="table-responsive">
                <table className="table table-hoverable">
                    <thead>
                        <tr>
                            <th className="text-left">Case Number</th>
                            <th>Title</th>
                            <th>Status</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                           
                            data ? (
                                data.map(_data => (
                               

                                    <tr key={_data.id} onClick={() => history.push(`cases/${_data.id}`)}>                                        
                                        <td className="text-left">{_data.id}</td>
                                        <td>{_data.title}</td>
                                        <td>
                                        <Chip label={_data.status} color={_data.status === "new" ? "primary": "seconday"} />
                                            
                                        </td>
                                        
                                    </tr>              
                            ))
                            ): (null)
                            
                        }         
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default withRouter(Table);
