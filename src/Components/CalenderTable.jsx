import React from 'react';

const CalenderTable = ({schedules}) => {

    return (
        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">

            <div class="mdc-card p-0">
                <h6 class="card-title card-padding pb-0"></h6>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="text-left">Date</th>
                                <th>Title</th>
                                <th>Location</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                schedules.length > 0 ? (
                                    schedules.map(schedule => (
                                        <tr>
                                            <td class="text-left">{schedule.date}</td>
                                            <td>{schedule.title}</td>
                                            <td>
                                                <span class="label label-success"> {schedule.location}</span>
                                            </td>
    
                                        </tr>
                                    ))

                                ) : (
                                    <h6>No Events</h6>
                                ) 
                        
                                
                            }


                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CalenderTable;

