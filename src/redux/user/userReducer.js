import { CLEAR_LOADING, CLEAR_USER, SET_USER, SET_LOADING } from './userType';

const initialState = {
    loading: true,
    isLogedIn: false,
    currentUser: null,
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER:
            return{
                currentUser: action.currentUser,
                isLogedIn: true,
                loading: false
            }
        case CLEAR_USER:
            return{
                currentUser: null,
                isLogedIn: false,
                loading: false
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case CLEAR_LOADING:
            return{
                ...state,
                loading: false
            }
        default: return state
    }
}

export default userReducer