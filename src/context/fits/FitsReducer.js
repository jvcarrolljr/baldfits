const fitsReducer = (state,action) => {
    switch(action.type) {
        case "GET_FITS":
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case "GET_FIT":
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}

export default fitsReducer