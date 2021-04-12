const SAVE_SIGNUP_DETAILS = "SAVE_SIGNUP_DETAILS";
const CHECK_LOGIN_DETAILS = "CHECK_LOGIN_DETAILS";
const LOGIN_ON_STARTUP = "LOGIN_ON_STARTUP";
const LOG_OUT_HANDLER = "LOG_OUT_HANDLER";

export function reducerFunc(state, { type, payload }) {
    switch (type) {
        case SAVE_SIGNUP_DETAILS:
            console.log("I ran")
            localStorage.setItem("Login", JSON.stringify({isUserLoggedIn : true, userId : payload.userId}))
            return { ...state, isUserLoggedIn : true, currentUserId : payload.userId }
        
        case CHECK_LOGIN_DETAILS:
            localStorage.setItem("Login", JSON.stringify({isUserLoggedIn : true, userId : payload.userId }))
            return {...state, isUserLoggedIn:true, currentUserId: payload.userId}

        case LOGIN_ON_STARTUP:
            return { ...state, isUserLoggedIn: true, currentUserId: payload.userId }
        
        case LOG_OUT_HANDLER:
            localStorage.removeItem('Login')
            return {
                ...state, currentUserId : null, isUserLoggedIn:false
            }
            
        default:
            return state
    }
}

export const initialAuthState = {
    isUserLoggedIn: false,
    currentUserId: null
}