"use client";

import { AppProps } from "@/types/AppProps";
import React, { createContext } from "react";

export const AppContext = createContext({});

const Provider = <T extends object>({ children, appProps }: AppProps<T>) => {
    return (
        <AppContext.Provider value={{ carData: appProps }}>
            {children}
        </AppContext.Provider>
    );
};

export default Provider;
