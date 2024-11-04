import { authTypes } from "./authTypes";

export const reducer = (state, action) => {
    switch (action.type) {
        case authTypes.isLogged:
            return { ...state, user: action.payload, isLogged: true };
        case authTypes.loggedOut:
            return { ...state, user: null, isLogged: false };
        default:
            return state;
    }
};
