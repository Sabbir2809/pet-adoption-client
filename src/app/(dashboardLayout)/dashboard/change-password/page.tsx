"use client";
import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import sweetAlert from "@/utils/SweetAlert";
import { zodResolver } from "@hookform/resolvers/zod";
import KeyIcon from "@mui/icons-material/Key";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import logoutUser from "../../../../services/actions/logoutUser";

const validationSchema = z.object({
  oldPassword: z.string().min(4, "Must be at least 4 characters long"),
  newPassword: z.string().min(4, "Must be at least 4 characters long"),
});

const ChangePassword = () => {
  const router = useRouter();
  const [changePassword] = useChangePasswordMutation();

  const submitHandler = async (values: FieldValues) => {
    try {
      const res = await changePassword(values).unwrap();
      if (res) {
        sweetAlert("Password Change Successfully", "success");
        logoutUser(router);
      } else {
        sweetAlert("Incorrect Old Password", "error");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        boxShadow: 1,
        borderRadius: 1,
        mx: "auto",
        mt: {
          xs: 2,
          md: 5,
        },
      }}>
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}>
          <KeyIcon sx={{ color: "primary.main" }} />
        </Box>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>
          Change password
        </Typography>
      </Stack>
      <RForm
        onSubmit={submitHandler}
        defaultValues={{ oldPassword: "", newPassword: "" }}
        resolver={zodResolver(validationSchema)}>
        <Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput
              name="oldPassword"
              type="password"
              label="Old Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RInput
              name="newPassword"
              type="password"
              label="New Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit" sx={{ width: "100%", my: 2 }} variant="contained">
          change Password
        </Button>
      </RForm>
    </Box>
  );
};

export default ChangePassword;
