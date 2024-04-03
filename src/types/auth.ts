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

export interface SingUpRequest {
  username: string;
  password: string;
  confirmPassword: string;
}
export interface SignUpResponse {
  token: string;
}
