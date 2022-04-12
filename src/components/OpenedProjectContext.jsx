import React, { createContext, useState } from 'react';

export const OpenedProjectContext = createContext();

export const OpenedProjectProvider = ({ children }) => {
    const [openedProject, setOpenedProject] = useState(false);

    return (
        <OpenedProjectContext.Provider value={{ openedProject, setOpenedProject }}>
            {children}
        </OpenedProjectContext.Provider>
    )
}