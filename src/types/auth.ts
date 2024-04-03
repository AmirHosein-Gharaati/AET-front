export interface UserResponse {
  id: string;
  username: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}
