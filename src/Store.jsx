import React, { createContext, useReducer } from 'react';

export const ReserveTableContext = createContext();

const initialReserveTable = {
    date: '',
    time: '',
    type: '',
    numnerOfGuest: 1
};

const reducer = (state, action) => {
    switch (action.type) {
        case "NAME":
            return { ...state, name: action.value };
        case "DATE":
            return { ...state, date: action.value };
        case "TIME":
            return { ...state, time: action.value };
        case "NUMBER_OF_GUEST":
            return { ...state, numnerOfGuest: action.value };
        default:
            return state;
    }
};

function Store({ children }) {
    const [reservationDetails, dispatch] = useReducer(reducer, initialReserveTable)

    const handleFormData = (data) => {
        dispatch({ type: data.type, value: data.value });
    };

    return (
        <ReserveTableContext.Provider value={{ reservationDetails, handleFormData }} >
            {children}
        </ReserveTableContext.Provider>
    );
}

export default Store;
