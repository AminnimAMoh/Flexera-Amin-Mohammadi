export const initialState = {
  pageNumber: 1,
  touched: [
    {
      name: "",
      state: "notTuched",
      index: 0,
    },
  ],
};

export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "interaction_changeFocusedState":{
        state.touched[action.value.index].state=action.value.state;
        return {
          ...state
        }
    }
    case "interaction_addNewTouchedElement": {
      console.log("Pushing to the array");
      return {
        ...state,
        touched: [
          ...state.touched,
          { name: action.value.name, state: action.value.state, index: state.touched.length },
        ],
      };
    }
    case "initialState_stored": {
      return {
        ...state,
        ...action.value,
      };
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
