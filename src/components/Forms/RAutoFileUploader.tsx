"use client";
import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import { Box, Button, Input, SvgIconProps, SxProps } from "@mui/material";
import { ReactElement } from "react";

interface IFileUploadButton {
  name: string;
  label?: string;
  accept?: string;
  sx?: SxProps;
  icon?: ReactElement<SvgIconProps>;
  variant?: "contained" | "text";
  onFileUpload: (file: File) => void;
  fullWidth?: boolean;
}

const RAutoFileUploader = ({
  name,
  label,
  accept,
  sx,
  icon,
  variant = "contained",
  fullWidth,
  onFileUpload,
}: IFileUploadButton) => {
  return (
    <Box>
      <Button
        component="label"
        role={undefined}
        variant={variant}
        tabIndex={-1}
        startIcon={icon ? icon : <CloudUploadIcon />}
        sx={{ ...sx }}>
        {label || "Upload file"}
        <Input
          type="file"
          inputProps={{ accept: accept }}
          fullWidth={fullWidth}
          style={{ display: "none" }}
          onChange={(e) => {
            const fileInput = e.target as HTMLInputElement;
            const file = fileInput.files?.[0];
            if (file) {
              onFileUpload(file);
            }
          }}
        />
      </Button>
    </Box>
  );
};

export default RAutoFileUploader;
