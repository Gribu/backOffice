import { actionTypes } from "./actionTypes";

export const appReducer = (state = [], action) => {
    const { payload, type } = action;
  
    switch (type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                user: {
                    isAuthenticated: true,
                    ...payload
                }
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                user: null,
            };
    }
}
