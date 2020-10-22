import { SET_USER, CLEAR_USER, CLEAR_LOADING, SET_LOADING } from "./userType";

export const setUser = currentUser => {
    return{
        type: SET_USER,
        currentUser: currentUser
    }
}

export const clearUser = () => {
    return{
        type: CLEAR_USER
    }
}

export const clearLoading = () => {
    return{
        type: CLEAR_LOADING
    }
}

export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}