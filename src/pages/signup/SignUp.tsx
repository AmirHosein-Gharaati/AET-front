import { useState, useEffect } from "react";
import { TextField, Box, Typography, Grid, Button, Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { signUp } from "@/store/reducers/authReducer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { authService } from "@/services/authService";
import { SingUpRequest } from "@/types/auth";

export default function SignUp() {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const authToken = useSelector((state: RootState) => state.auth.token);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (authToken) {
      naviagte("/dashboard");
    }
  }, [authToken, naviagte]);

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    const data: SingUpRequest = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    };

    authService.signup(data).then((res) => {
      if (res.data) {
        dispatch(signUp(res.data));
        naviagte("/dashboard");
      }
    });
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => handleFormSubmit(e)}
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="confirm-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
