import React, { createContext, useState } from 'react';

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = ({ children }) => {
    const [selectedProject, setSelectedProject] = useState(0);

    return (
        <SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
            {children}
        </SelectedProjectContext.Provider>
    )
}