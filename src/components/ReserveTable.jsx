import React, { useContext } from "react";
import { ReserveTableContext } from "../Store"
import { useNavigate } from 'react-router-dom';

function ReserveTable() {
    const { reservationDetails, handleFormData } = useContext(ReserveTableContext)
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault()
        fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`)
            .then((response) => response).then((data) => console.log(data.ok));
        navigate('/confirmation');
    }

    return (
        <form onSubmit={submitForm} style={{ display: 'grid', padding: 20, gap: 20 }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={reservationDetails.date} onChange={(e) => handleFormData({ type: 'DATE', value: e.target.value })} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={reservationDetails.time} onChange={(e) => handleFormData({ type: 'TIME', value: e.target.value })}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={reservationDetails.numnerOfGuest} onChange={(e) => handleFormData({ type: "NUMBER_OF_GUEST", value: e.target.value })} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={reservationDetails.date} onChange={(e) => handleFormData({ type: 'DATE', value: e.target.value })}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input style={{ backgroundColor: '#F4CE14', padding: 12, borderRadius: 30, border: 'none', fontWeight: 'bold', textDecoration: 'none', color: 'black' }} type="submit" value="Make Your reservation" />
        </form>
    );
}

export default ReserveTable
