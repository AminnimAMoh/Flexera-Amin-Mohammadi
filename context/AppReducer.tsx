export const initialState = {
  pageNumber: 1,
  data: [{}]
};

export const AppReducer = (state: any, action: any) => {
  console.log("hello");
  
  switch (action.type) {
    case "request_reserve": {
      return {
        ...state,
        data: [...state.data,action.value],
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
