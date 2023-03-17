import React, { useContext } from "react";
import { ReserveTableContext } from "../Store"
import { Link } from "react-router-dom";

function Confirmation() {
    const { reservationDetails } = useContext(ReserveTableContext)
    return (
        <>
            <div style={{ backgroundColor: '#495E57', padding: '0px 10px 40px' }}>
                <p style={{ margin: 0, color: 'white', paddingTop: 20 }}>Reservation</p>
                <h2 style={{ margin: 0, color: 'white' }}>CONFIRMATION</h2>
            </div>
            <div style={{ padding: '5px 10px', fontWeight: 'bold', marginBottom: 50 }}>
                <h3>HELLO</h3>
                <p>Thanks for your reservation!!</p>
                <p>We will be sooo happy to have you here, in the Little Lemon at {reservationDetails.date} - {reservationDetails.time} for {reservationDetails.type}.</p>
                <p>We are preparing for you, a table for {reservationDetails.numnerOfGuest} people</p>
                <br />
                <p>See you soon</p>
                <p>The little lemon restaurant</p>
            </div>
            <Link to='/' style={{ margin: 10, backgroundColor: '#F4CE14', padding: 12, borderRadius: 30, border: 'none', fontWeight: 'bold', textDecoration: 'none', color: 'black' }}>Back to home page</Link>
        </>
    );
}

export default Confirmation
