import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useEffect
} from "react";

import { AppReducer, initialState } from "./AppReducer";
import { request } from "./AppFetch";

const AppContext = createContext({});

//This type issue is fixed by help from:
//https://pretagteam.com/question/react-usecontext-ts-error-property-does-not-exist-on
interface PageState {
  dispatch: any;
  state: {
    pageNumber: number;
  };
}
export function AppWrapper({ children }: any) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("state") || "{}")) {
      dispatch({
        type: "initialState_stored",
        value: JSON.parse(localStorage.getItem("state") || "{}"),
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext) as PageState;
}
