"use client";
import { useGetAllAdoptionRequestQuery } from "@/redux/api/adoptionRequestApi";
import EditIcon from "@mui/icons-material/Edit";
import { Alert, Box, IconButton, Skeleton, TableCell, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

type TAdoption = {
  id: number;
  adoptionStatus: string;
  user: {
    username: string;
    avatarURL: string;
    email: string;
    gender: string;
    phone: string;
    address: string;
  };
};

const AdoptionRequestsPage = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetAllAdoptionRequestQuery(undefined);

  const adoptionRequestsData = data?.map((item: TAdoption) => ({
    id: item.id,
    adoptionStatus: item.adoptionStatus,
    username: item.user.username,
    avatarURL: item.user.avatarURL,
    email: item.user.email,
    phone: item.user.phone,
    address: item.user.address,
  }));

  const columns: GridColDef[] = [
    { field: "username", headerName: "Adoption Name", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "adoptionStatus",
      headerName: "Adoption Status",
      flex: 1,
      renderCell: (params) => (
        <TableCell>
          <Alert
            severity={
              params.value === "PENDING"
                ? "info"
                : params.value === "REJECT"
                ? "error"
                : params.value === "APPROVED"
                ? "success"
                : "info"
            }
            sx={{ width: "100%" }}>
            {params.value}
          </Alert>
        </TableCell>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box justifyContent="center">
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2 }}>
        Pet Adoption Request Managements
      </Typography>
      {isLoading ? (
        <Box sx={{ width: "100%", height: "100vh", mt: 2 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      ) : (
        <Box my={2}>
          {/* DataGrid */}
          <DataGrid rows={adoptionRequestsData || []} columns={columns} hideFooter={true} />
        </Box>
      )}
    </Box>
  );
};

export default AdoptionRequestsPage;
