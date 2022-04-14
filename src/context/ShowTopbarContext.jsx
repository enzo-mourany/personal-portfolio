import React, { createContext, useState } from 'react';

export const ShowTopbarContext = createContext();

export const ShowTopbarProvider = ({ children }) => {
    const [showTopbar, setShowTopbar] = useState(true);

    return (
        <ShowTopbarContext.Provider value={{ showTopbar, setShowTopbar }}>
            {children}
        </ShowTopbarContext.Provider>
    )
}