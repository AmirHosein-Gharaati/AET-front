export interface SingUpRequest {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpResponse {
  token: string;
}
