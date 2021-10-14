export const initialState = {
  pageNumber: 1,
  touched: [{
    name: '',
    state: 'notTuched'
  }],
};

export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "interactio_focused": {
        return {
          ...state,
          touched: [...state.touched, {name: action.value, state: 'touched'}],
        };
    }
    case "initialState_stored": {
      return {
        ...state,
        ...action.value
      }
    }
    case "add_number": {
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };
    }
    case "sub_number": {
      return {
        ...state,
        pageNumber: state.pageNumber - 1,
      };
    }
  }
};
