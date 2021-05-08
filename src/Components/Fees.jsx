import React from 'react';
// const { Paynow } = require("paynow");
import { Paynow } from "paynow";
import { Button } from '@material-ui/core';


let paynow = new Paynow(11994, "f71df195-5e80-4b95-8d58-83d6d86eaf9a");

let payment = paynow.createPayment("Invoice 37", "t.svaku@gmail.com");
payment.add("Bananas", 2.5);
// payment.add("Apples", 3.4);



const Pay = () => {
    paynow.sendMobile(

        // The payment to send to Paynow

        payment,

        // The phone number making payment
        '0782824073',

        // The mobile money method to use. 
        'ecocash'

    ).then(function (response) {
        if (response.success) {
            // These are the instructions to show the user. 
            // Instruction for how the user can make payment
            let instructions = response.instructions // Get Payment instructions for the selected mobile money method

            // Get poll url for the transaction. This is the url used to check the status of the transaction. 
            // You might want to save this, we recommend you do it
            let pollUrl = response.pollUrl;

            alert(instructions)

        } else {
            console.log(response.error)
        }
    }).catch(ex => {
        // Ahhhhhhhhhhhhhhh
        // *freak out*
        console.log('Your application has broken an axle', ex)
    });
}




const Fees = () => (
    <div>
        {/* cases fees descrption here */}

        {/* amount to be payed */}

        {/* paynow button */}
        <p>Payment Component</p>
        <p>Testing paynow here</p>
        <Button color="primary" onClick={ Pay }>Make Payment</Button>
    </div>

);


export default Fees;

