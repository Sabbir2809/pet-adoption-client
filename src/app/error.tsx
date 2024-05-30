"use client";

import { Alert, AlertTitle, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
    if (!!error) {
      router.push("/login");
    }
  }, [error, router]);

  return (
    <Alert severity="error">
      <AlertTitle>{error.message}</AlertTitle>
      <Button onClick={() => reset()}>Try again</Button>
    </Alert>
  );
};

export default ErrorPage;
