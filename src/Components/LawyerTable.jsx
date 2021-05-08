import React from 'react';


const LawyerTable = () => (
<div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
        <div class="mdc-card p-0">
            <h6 class="card-title card-padding pb-0"></h6>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="text-left">Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Frozen yogurt</td>
                            <td>1.59</td>
                            <td>6.0</td>
                            <td>6.0</td>
                            
                        </tr>
                        <tr>
                            <td class="text-left">Frozen yogurt</td>
                            <td>1.59</td>
                            <td>2.5</td>
                            <td>6.0</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);


export default LawyerTable;