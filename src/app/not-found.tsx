import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundImage: "linear-gradient(180deg, #CEE5FD, #FFF)",
      }}>
      <Typography variant="h1" sx={{ fontSize: "120px", fontWeight: "600", color: "primary.main" }}>
        404
      </Typography>
      <Typography
        variant="body1"
        sx={{ margin: "2rem 0", fontSize: "24px", fontWeight: 600, color: "primary.main" }}>
        Ooops!!! The page you are looking for is not found
      </Typography>
      <Box sx={{ marginTop: "1rem" }}>
        <Link href="/">
          <Button
            variant="contained"
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
            }}>
            Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
