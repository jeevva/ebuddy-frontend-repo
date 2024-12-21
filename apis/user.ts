export interface User {
  name?: string;
  email?: string;
  age?: number;
  address?: string;
}
export interface UserResponse {
  data?: User;
  message?: string;
  statusCode?: number;
  success: boolean;
}
