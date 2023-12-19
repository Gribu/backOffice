import { createContext, useContext, useEffect, useReducer } from "react"
import { appReducer } from "../reducer/appReducer";
import { actionTypes } from "../reducer/actionTypes";


export const AppContext = createContext();

export const initialState = {
    errors: null,
    user: JSON.parse(localStorage.getItem('user')) || null,
}
export const ContextProvider = ({children}) => {

    const [appState, dispatch] = useReducer(appReducer, initialState);

    const login = (userInfo) => {
        dispatch({
            type: actionTypes.LOGIN,
            payload: userInfo
        });
    }

    const logout = () => {
        dispatch({
            type: actionTypes.LOGOUT,
        });
        localStorage.removeItem("user");
    }

    const setErrors = (errors) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: errors,
      });
    };
    
      const setData = (data) => {
        dispatch({
          type: actionTypes.SET_DATA,
          payload: data,
        });
      };

    useEffect(() => {
        // console.log(appState);
        localStorage.setItem('user', JSON.stringify(appState.user));
    }, [appState.user]);

    const value = {
        ...appState,
        login,
        logout,
        setErrors,
        setData
    }


  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error("Context Error");
    }
    return context;
};
