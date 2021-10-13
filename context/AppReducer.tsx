export const initialState = {
  pageNumber: 1,
  data: [{ state: null }],
  touched: [{
    name: '',
    state: 'notTuched'
  }],
};

export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "interactio_focused": {
      if (state.touched) {
        return {
          ...state,
          touched: [...state.touched, action.value],
        };
      }
    }
    case "reserve_new-data": {
      if (state.data) {
        return {
          ...state,
          data: [...state.data, action.value],
        };
      } else {
        return;
      }
    }
    case "initialState_stored": {
      if (!action.value) return action.value;
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
