import { userTable } from "../Data/UserTable";

const SAVE_SIGNUP_DETAILS = "SAVE_SIGNUP_DETAILS";
const CHECK_LOGIN_DETAILS = "CHECK_LOGIN_DETAILS";

export function reducerFunc(state, { type, payload }) {
    switch (type) {
        case SAVE_SIGNUP_DETAILS:
            return { ...state, userLoginDetails: [...state.userLoginDetails, payload] }
        
        case CHECK_LOGIN_DETAILS:
            if (state.userLoginDetails.filter(one => (one.email === payload.email && one.password === payload.password)).length !== 0) {
                localStorage.setItem("Login", JSON.stringify({isUserLoggedIn : true}))
                return {...state, isUserLoggedIn:true}
            } else {
                return state
            }

        default:
            return state
    }
}

export const initialAuthState = {
    userLoginDetails: userTable,
    isUserLoggedIn : false
}