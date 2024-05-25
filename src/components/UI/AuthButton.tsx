import logoutUser from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

type TUserInfo = {
  email: string;
  role: string;
  userId: string;
};

const AuthButton = () => {
  const router = useRouter();
  const userInfo = getUserInfo() as TUserInfo;

  return (
    <>
      {userInfo?.userId ? (
        <Button
          href="/login"
          style={{ textDecoration: "none", color: "black" }}
          color="error"
          onClick={() => logoutUser(router)}>
          Logout
        </Button>
      ) : (
        <>
          <Button variant="text" size="small">
            <Link href="/login" style={{ textDecoration: "none", color: "black" }}>
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
