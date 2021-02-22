const initialState = {
    currentPage: "Login"
}

export default function navigationReducer(state = initialState, action) {
    switch(action.type) {
        case "navigation/navigateTo": {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        default:
            return state;
    }
}
