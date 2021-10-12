"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppReducer = exports.initialState = void 0;
exports.initialState = {
    pageNumber: 1,
    data: [{}]
};
const AppReducer = (state, action) => {
    console.log("hello");
    switch (action.type) {
        case "request_reserve": {
            return Object.assign(Object.assign({}, state), { data: [...state.data, action.value] });
        }
        case "initialState_stored": {
            return action.value;
        }
        case "add_number": {
            return Object.assign(Object.assign({}, state), { pageNumber: state.pageNumber + 1 });
        }
        case "sub_number": {
            return Object.assign(Object.assign({}, state), { pageNumber: state.pageNumber - 1 });
        }
    }
};
exports.AppReducer = AppReducer;
