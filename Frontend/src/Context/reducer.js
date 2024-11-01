import { authTypes } from "./authTypes"
export const reducer = (state, action) => {
    if (action.type === authTypes.isLogged) {
        return { ...state, user: true, payload: action.payload }
    } else if (action.type === authTypes.loggedOut) {
        return { ...state, user: false }
    }

    return state
}