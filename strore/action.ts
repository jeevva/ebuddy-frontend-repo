import { User, UserResponse } from "@/apis/user";

export const SET_USER = "SET_USER";

export const UPDATE_USER_LOADING = "UPDATE_USER_LOADING";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const FETCH_USER_LOADING = "FETCH_USER_LOADING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

export const setUser = (data: User) => ({
  type: SET_USER,
  payload: data,
});

export const updateUserLoading = () => ({
    type: UPDATE_USER_LOADING,
  });

export const updateUserSuccess = (data?: UserResponse) => ({
  type: UPDATE_USER_SUCCESS,
  payload: data,
});

export const updateUserError = (data?: UserResponse) => ({
  type: UPDATE_USER_ERROR,
  payload: data,
});

export const fetchUserLoading = () => ({
  type: FETCH_USER_LOADING,
});

export const fetchUserSuccess = (data?: UserResponse) => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});



export const fetchUserError = (data?: UserResponse) => ({
  type: FETCH_USER_ERROR,
  payload: data,
});
