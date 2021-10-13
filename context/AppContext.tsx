import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useEffect
} from "react";

import { AppReducer, initialState } from "./AppReducer";

const AppContext = createContext({});

//This type issue is fixed by help from:
//https://pretagteam.com/question/react-usecontext-ts-error-property-does-not-exist-on
interface PageState {
  dispatch: any;
  state: {
    pageNumber: number;
    data: [{}];
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
    // Object.keys(state).length === 0 && state.constructor === Object
    // Found at https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/
    const storeUndefinedTest=Object.keys(state).length === 0 && state.constructor === Object;
    if(storeUndefinedTest){
      console.log(initialState);
      
      localStorage.setItem("state", JSON.stringify(initialState));
    }else if (!storeUndefinedTest && state !== initialState) {
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
