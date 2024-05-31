"use client";
import logo from "@/assets/logo.png";
import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import Loader from "@/components/Shared/Loader";
import { loginUser } from "@/services/actions/loginUser";
import { registerUser } from "@/services/actions/registerUser";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";

// zod validation schema
const registerValidationSchema = z.object({
  username: z
    .string({ required_error: "username is Required" })
    .min(3, "Please Enter Your Full Name!"),
  password: z
    .string({ required_error: "Password is Required" })
    .min(4, "Must be at lest 4 characters!"),
  email: z
    .string({ required_error: "Email is Required" })
    .email("Please Enter Your Valid Email Address!"),
});

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // login onSubmit handler
  const handleLogin = async (values: FieldValues) => {
    try {
      // register server action
      setIsLoading(true);
      const res = await registerUser(values);
      setIsLoading(false);
      // checking response
      if (res?.data?.id) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res?.message,
          showConfirmButton: false,
          timer: 1000,
        });
        // login server action
        const user = await loginUser({
          email: values.email,
          password: values.password,
        });
        // checking response
        if (user?.data?.accessToken) {
          // set user info localStorage and navigate home route
          storeUserInfo({ accessToken: user?.data?.accessToken });
          router.push("/dashboard");
        }
      } else {
        setError(res?.message);
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
            Create a New Account
          </Typography>

          {/* Error Message */}
          {error && (
            <Box sx={{ width: "100%", maxWidth: "500px", mb: 1, textAlign: "center" }}>
              <Alert severity="error" color="error">
                {error}
              </Alert>
            </Box>
          )}

          <Box sx={{ width: "100%", maxWidth: "500px" }}>
            {/* Login Form */}
            <RForm onSubmit={handleLogin} resolver={zodResolver(registerValidationSchema)}>
              {/* Email Input */}
              <RInput name="username" label="Full Name" size="medium" fullWidth sx={{ mb: 2 }} />
              {/* Email Input */}
              <RInput name="email" label="Email Address" size="medium" fullWidth sx={{ mb: 2 }} />
              {/* Password Input */}
              <RInput name="password" type="password" label="Password" fullWidth size="medium" />
              {/* Login Button */}
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
                Registration
              </Button>
              {/* Login Link */}
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/login">{"Do you already have an account? Login"}</Link>
                </Grid>
              </Grid>
            </RForm>
          </Box>
        </Box>
      )}
    </>
  );
};

export default RegisterPage;
