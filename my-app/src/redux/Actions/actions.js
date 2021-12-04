import {
  DATA_UPDATED,
  LOADING,
  RESET_LOADING,
} from "../ActionTypes/actionType";
import { store } from "../Store/store";

export const data_updated = (payload) => {
  store.dispatch({ type: DATA_UPDATED, payload: payload });
};

export const setLoading = () => {
  store.dispatch({ type: LOADING });
};

export const resetLoading = () => {
  store.dispatch({ type: RESET_LOADING });
};
