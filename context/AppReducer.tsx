export const initialState = {
  pageNumber: 0,
};

type State = {
  pageNumber: number;
  isLoading: boolean;
  error?: string;
};

interface Action {
  type: string;
  value: number;
}

export const AppReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add_number": {
      return {
        ...state,
        pageNumber: state.pageNumber+1,
      };
    }
    case "sub_number": {
      return {
        ...state,
        pageNumber: state.pageNumber-1,
      };
    }
  }
};
