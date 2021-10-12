"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppContext = exports.AppWrapper = void 0;
const react_1 = require("react");
const AppReducer_1 = require("./AppReducer");
const AppContext = (0, react_1.createContext)({});
function AppWrapper({ children }) {
    const [state, dispatch] = (0, react_1.useReducer)(AppReducer_1.AppReducer, AppReducer_1.initialState);
    (0, react_1.useEffect)(() => {
        if (JSON.parse(localStorage.getItem("state") || "{}")) {
            dispatch({
                type: "initialState_stored",
                value: JSON.parse(localStorage.getItem("state") || "{}"),
            });
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (state !== AppReducer_1.initialState) {
            localStorage.setItem("state", JSON.stringify(state));
        }
    }, [state]);
    const contextValue = (0, react_1.useMemo)(() => {
        return { state, dispatch };
    }, [state, dispatch]);
    return (<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>);
}
exports.AppWrapper = AppWrapper;
function useAppContext() {
    return (0, react_1.useContext)(AppContext);
}
exports.useAppContext = useAppContext;
