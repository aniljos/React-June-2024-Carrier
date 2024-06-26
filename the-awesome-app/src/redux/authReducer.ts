export interface AuthState{
    isAuthenticated: boolean;
    userName: string;
    accessToken: string;
    refreshToken: string;
}

const initialState: AuthState  = {
    isAuthenticated: false,
    userName: '',
    accessToken: '',
    refreshToken: ''
}
interface AuthAction{
    type: string;
    payload?: AuthState;
}
export const authReducer = (currentState: AuthState= initialState, action:AuthAction) => {

    // process the action
    if(action.type === "Login"){
        return action.payload;
    }
    if(action.type === "Logout"){
        return initialState;
    }

    //return the updated state
    return currentState;
}

export function createLoginAction(payload: AuthState){
    return {type: "Login", payload}
}
export function createLogoutAction(){
    return {type: "Logout"}
}   
