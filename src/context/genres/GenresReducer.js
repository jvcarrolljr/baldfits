const genresReducer = (state,action) => {
    switch(action.type) {
        case "GET_GENRES":
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case "GET_GENRE":
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

export default genresReducer