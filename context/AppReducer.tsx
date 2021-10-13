export const initialState = {
  pageNumber: 1,
  data: [{}],
};

export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "reserve_new-data": {
      console.log(state.data)
      return {
        ...state,
        // data: [...state.data, action.value]
      };
    }
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
