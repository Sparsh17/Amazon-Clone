import React, {createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const stateContext = createContext();

// Wrap app and provide DataLayer
export const StateProvider = ({reducer, initialState, children}) => (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
);

//Pull information from data layer
export const useStateValue = () => useContext(stateContext);