import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { fetchCase } from '../api/api';


const CaseDetail = () => {
    
    const params = useParams();
    const id = params._id;
    const { isLoading, isError, data, error } = useQuery('case', () => fetchCase(id));


    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (

        <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
            <div className="mdc-card">
                <h6>Case Number: {data.id}</h6>
                <div className="mdc-card">
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                </div>
                <div className="mdc-card">
                    <h6>Case Documents</h6>
                    <div className="table-responsive">
                    <button className="mdc-button mdc-button--raised mdc-ripple-upgraded" style={{"float": "right","--mdc-ripple-fg-size":"58px", "--mdc-ripple-fg-scale":"1.97272", "--mdc-ripple-fg-translate-start":"41px, -1px", "--mdc-ripple-fg-translate-end":"20.0078px, -11px"}}>
                        Upload Document
                    </button>
                        {data.documents  ? (
                            <table className="table dashboard-table">
                                <thead>
                                    <tr>
                                        <th class="text-left">Name</th>
                                        <th>Document</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.documents.map(doc => (
                                            <tr key={doc.id}>
                                                <td>{doc.name}</td>
                                                <td class="text-left"><Link target={"_blank"} to={`http://localhost:1337${doc.formats.small.url}`}> <img width={20} src={`http://localhost:1337${doc.formats.small.url} `} /></Link></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ) : (<p>No Documents</p>)}
                    </div>

                </div>
                <div className="d-flex justify-content-between">
                    <h4 className="card-title mb-0"></h4>
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
                                <div class="table-responsive">
                                    <h6>Client Contacts</h6>
                                    <table class="table table-hoverable">
                                        <thead>
                                            <tr>
                                                <th class="text-left">Name</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                data.clients.map(rec => (
                                                    // console.log(rec)
                                                    <tr key={rec.id}>
                                                        <td class="text-left">{rec.username}</td>
                                                        <td>{rec.phone}</td>
                                                        <td>
                                                            {rec.email}
                                                        </td>
                                                    </tr>
                                                ))

                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default CaseDetail;

