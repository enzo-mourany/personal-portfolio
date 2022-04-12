import React, { createContext, useState } from 'react';

export const OpenProjectContext = createContext();

export const OpenedProjectProvider = ({ children }) => {
    const [openedProject, setOpenedProject] = useState(false);

    return (
        <OpenProjectContext.Provider value={{ openedProject, setOpenedProject }}>
            {children}
        </OpenProjectContext.Provider>
    )
}