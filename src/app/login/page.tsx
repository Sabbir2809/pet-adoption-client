"use client";
import logo from "@/assets/logo.png";
import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// zod validation schema
const loginValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .email("Please Enter Your Valid Email Address"),
  password: z
    .string({ required_error: "Password is Required" })
    .min(4, "Must be at lest 6 characters"),
});

const LoginPage = () => {
  const [error, setError] = useState("");

  // login onSubmit handler
  const handleLogin = async (values: FieldValues) => {
    try {
      //server actions
      const res = await loginUser(values);
      if (res?.data?.accessToken) {
        // set user info localStorage
        storeUserInfo({ accessToken: res?.data?.accessToken });
        // success toast message
        toast.success(res?.message);
      } else {
        setError(res?.message);
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
      }}>
      {/* Logo */}
      <Image src={logo} width={70} height={70} alt="logo" />
      {/* Title */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2, textAlign: "center" }}>
        Login to your Account
      </Typography>

      {/* Error Message */}
      {error && (
        <Box>
          <Alert severity="warning" color="warning">
            {error}
          </Alert>
        </Box>
      )}

      <Box sx={{ width: "100%", maxWidth: "500px" }}>
        {/* Login Form */}
        <RForm onSubmit={handleLogin} resolver={zodResolver(loginValidationSchema)}>
          {/* Email Input */}
          <RInput
            name="email"
            type="email"
            label="Email Address"
            size="medium"
            fullWidth
            sx={{ mb: 2 }}
          />
          {/* Password Input */}
          <RInput name="password" type="password" label="Password" fullWidth size="medium" />
          {/* Login Button */}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
            Login
          </Button>
          {/* Register Link */}
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/register">{"Don't have an account? Register"}</Link>
            </Grid>
          </Grid>
        </RForm>
      </Box>
    </Box>
  );
};

export default LoginPage;
