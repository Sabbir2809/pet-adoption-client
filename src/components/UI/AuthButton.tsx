import { getUserInfo } from "@/services/auth.services";
import { TUserInfo } from "@/types/common";
import { Button } from "@mui/material";
import Link from "next/link";

const AuthButton = () => {
  const userInfo = getUserInfo() as TUserInfo;

  return (
    <>
      {userInfo?.userId ? (
        <Button variant="text" size="large">
          <Link href="/dashboard" style={{ textDecoration: "none", color: "#1565C0" }}>
            My Profile
          </Link>
        </Button>
      ) : (
        <>
          <Button variant="text" size="large">
            <Link href="/login" style={{ textDecoration: "none", color: "#1565C0" }}>
              Login
            </Link>
          </Button>
          <Button variant="contained" size="small">
            <Link href="/register" style={{ textDecoration: "none", color: "white" }}>
              Register
            </Link>
          </Button>
        </>
      )}
    </>
  );
};

export default AuthButton;
