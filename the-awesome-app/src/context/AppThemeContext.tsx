import React, { useReducer } from "react";

type AppThemeState = {
    mode: string,
    //setMode?: (mode: string) => void
    setMode?: (action: object) => void
    
}

export const initialState: AppThemeState = {
    mode: "light"
}


export const AppThemeContext = React.createContext(initialState);

const reducer = (state: AppThemeState, action: any)=> {

    if(action.type === 'SET_DARK_MODE'){
        return {
            ...state,
            mode: 'dark'
        }
    }
    if(action.type === 'SET_LIGHT_MODE'){
        return {
            ...state,
            mode: 'light'
        }
    }
    return state;
}

export const AppThemeContextProvider = ({children}: any) => {

    //const [state, setState] = React.useState(initialState.mode);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
            <AppThemeContext.Provider value={{mode: state.mode, setMode: dispatch}}>
                {children}
            </AppThemeContext.Provider>
        )
}