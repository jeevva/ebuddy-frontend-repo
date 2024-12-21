import { User } from "@/apis/user";
import {
  FETCH_USER_ERROR,
  FETCH_USER_LOADING,
  FETCH_USER_SUCCESS,
  SET_USER,
  UPDATE_USER_ERROR,
  UPDATE_USER_LOADING,
  UPDATE_USER_SUCCESS,
} from "./action";

export interface State {
  user?: User;
  loading: boolean;
  message?: string;
}

 const initialState: State = {
  user: undefined,
  message: undefined,
  loading: false,
};

export const userReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case UPDATE_USER_LOADING:
    case FETCH_USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_USER_SUCCESS:
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.data,
        message: action.payload.message,
      };

    case UPDATE_USER_ERROR:
    case FETCH_USER_ERROR:
      return {
        loading: false,
        user: action.payload.data,
        message: action.payload.messag,
      };

    default:
      return state;
  }
};
