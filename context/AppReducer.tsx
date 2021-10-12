export const initialState = {
  pageNumber: 1,
};

export const AppReducer = (state: any, action: any) => {
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
