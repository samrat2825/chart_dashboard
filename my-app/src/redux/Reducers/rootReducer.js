import {
  DATA_UPDATED,
  LOADING,
  RESET_LOADING,
} from "../ActionTypes/actionType";

const initialState = {
  data: {
 },
 loading:false,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === DATA_UPDATED) {
    return {
      ...state,
      data: action.payload,
    };
  } else if (action.type === LOADING) {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === RESET_LOADING) {
    return {
      ...state,
      loading: false,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default rootReducer;
