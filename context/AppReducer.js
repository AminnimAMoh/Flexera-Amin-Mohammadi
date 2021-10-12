export const initialState = {
  pageNumber: 1,
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "initialState_stored": {
      return action.value;
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
