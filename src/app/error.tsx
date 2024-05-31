"use client";

import { Alert, AlertTitle, Button } from "@mui/material";
import { useEffect } from "react";

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Alert severity="error">
      <AlertTitle>{error.message}</AlertTitle>
      <Button onClick={() => reset()}>Try again</Button>
    </Alert>
  );
};

export default ErrorPage;
