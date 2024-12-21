import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { User, UserResponse } from "@/apis/user";
import { fetchUserData, updateUserData } from "@/apis/userApi";
import { signInWithGoogle } from "@/config/firebaseConfig";
import {
  fetchUserError,
  fetchUserLoading,
  fetchUserSuccess,
  setUser,
  updateUserError,
  updateUserLoading,
  updateUserSuccess,
} from "@/strore/action";
import { State } from "@/strore/reducer";

export const useUserData = () => {
  const dispatch = useDispatch();
  const { user, message, loading } = useSelector((state: State) => state);

  const authLogin = async () => {
    const userEmail = await signInWithGoogle();

    if (userEmail) {
      await fetchUser(userEmail);
    }
  };

  const fetchUser = async (email: string) => {
    dispatch(fetchUserLoading());
    try {
      const response: UserResponse | undefined = await fetchUserData(email);

      dispatch(fetchUserSuccess(response));
    } catch (err) {
      console.log("error", err);

      dispatch(
        fetchUserError({
          statusCode: 500,
          success: false,
          data: undefined,
          message: "Internal Server Error",
        })
      );
    }
  };

  const updateUser = async (user: User) => {
    dispatch(updateUserLoading());
    try {
      const response: UserResponse | undefined = await updateUserData(user);

      dispatch(updateUserSuccess(response));
    } catch (err: any) {
      dispatch(
        updateUserError({
          statusCode: 500,
          success: false,
          data: undefined,
          message: "Internal Server Error",
        })
      );
    }
  };

  const setUserState = (data: User) => {
    dispatch(setUser(data));
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(
          fetchUserSuccess({
            statusCode: 200,
            success: true,
            data: user,
            message: "",
          })
        );
      }, 2000);
    }
  });

  return {
    user,
    message,
    loading,
    setUserState,
    authLogin,
    fetchUser,
    updateUser,
  };
};
