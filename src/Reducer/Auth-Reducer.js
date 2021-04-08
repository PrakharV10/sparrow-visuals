import { userTable } from "../Data/UserTable";
import {returnUserID} from "../ReusableFunctions/funcs"

const SAVE_SIGNUP_DETAILS = "SAVE_SIGNUP_DETAILS";
const CHECK_LOGIN_DETAILS = "CHECK_LOGIN_DETAILS";
const LOGIN_ON_STARTUP = "LOGIN_ON_STARTUP";
const SAVE_EDIT_USERNAME_EMAIL = "SAVE_EDIT_USERNAME_EMAIL";
const SAVE_NEW_PASSWORD = "SAVE_NEW_PASSWORD";
const LOG_OUT_HANDLER = "LOG_OUT_HANDLER";

export function reducerFunc(state, { type, payload }) {
    switch (type) {
        case SAVE_SIGNUP_DETAILS:
            return { ...state, userLoginDetails: [...state.userLoginDetails, {...payload, userId : state.userLoginDetails.length+1001}] }
        
        case CHECK_LOGIN_DETAILS:
            if (state.userLoginDetails.filter(one => (one.email === payload.email && one.password === payload.password)).length !== 0) {
                localStorage.setItem("Login", JSON.stringify({isUserLoggedIn : true, userId : returnUserID(state,payload) }))
                return {...state, isUserLoggedIn:true, currentUserId:returnUserID(state,payload)}
            } else {
                return state
            }

        case LOGIN_ON_STARTUP:
            return { ...state, isUserLoggedIn: true, currentUserId: payload.userId }
        
        case SAVE_EDIT_USERNAME_EMAIL:
            return {
                ...state, userLoginDetails: state.userLoginDetails.map(one => {
                    if (one.userId === state.currentUserId) {
                        return {...one, username : payload.username, email : payload.email}
                    } else {
                        return one
                    }
                })
            }
        
        case SAVE_NEW_PASSWORD:
            return {
                ...state, userLoginDetails: state.userLoginDetails.map(one => {
                    if (one.userId === state.currentUserId) {
                        return {...one, password : payload}
                    } else {
                        return one
                    }
                })
            }
        
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
    userLoginDetails: userTable,
    isUserLoggedIn: false,
    currentUserId: null
}