import React from 'react';
import Table from './Table';
import { useQuery } from 'react-query'
import { fetchCases } from '../api/api';
import { connect } from 'react-redux';



const AllCases = ({setCases}) => {

   
    
    const { isLoading, isError, data, error } = useQuery('cases', fetchCases);


    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    else {
        // console.log(data);
        setCases(data)
    }


    return (

        
        <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
           
            <div className="mdc-card">
                <div className="d-flex justify-content-between">
                    <h4 className="card-title mb-0">All Cases</h4>
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

                                <>
                                    <Table data={data} />
                                </>
                                    
                                

                            </table>
                        </div>
                    </div>

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

const mapDispatchToProps = (dispatch) => {
    return {
        setCases: (cases) => {dispatch({type: "SET_CASES", cases: cases})}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllCases);