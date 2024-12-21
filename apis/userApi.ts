import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { User, UserResponse } from "./user";

const baseApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Embedder-Policy": "require-corp",
    Authorization: process.env.NEXT_PUBLIC_BASE_TOKEN,
  },
});

export interface ErrorResponse extends UserResponse{
}

export const updateUserData = async (user: User): Promise<UserResponse | undefined> => {
  try {
    const response: AxiosResponse = await baseApi.put(
      "/update-user-data",
      user
    );
    return response?.data;
  } catch (error) {
    
    if (error instanceof AxiosError) {
      return error?.response?.data;
    }
     
  }
};

export const fetchUserData = async (
  email: string
): Promise<UserResponse | undefined> => {
  try {
    const response: AxiosResponse = await baseApi.get(
      `fetch-user-data/${email}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error?.response?.data;
    }
  }
};
