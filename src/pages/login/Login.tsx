import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "@/store/reducers/authReducer";
import { RootState } from "@/store/store";
import { authService } from "@/services/authService";
import { LoginRequest } from "@/types/auth";

export default function Login() {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const authToken = useSelector((state: RootState) => state.auth.token);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (authToken) {
      naviagte("/dashboard");
    }
  }, [authToken, naviagte]);

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    const data: LoginRequest = {
      username: username,
      password: password,
    };

    authService.login(data).then((res) => {
      if (res.data) {
        dispatch(login(res.data));
        naviagte("/dashboard");
      }
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Login
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
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Typography>
              Don't have an account?
              <Link href="/signup" variant="body2">
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
