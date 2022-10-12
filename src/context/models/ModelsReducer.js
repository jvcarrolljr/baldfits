const modelsReducer = (state,action) => {
    switch(action.type) {
        case "GET_MODELS":
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case "GET_MODEL":
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

export default modelsReducer