"use client";
import {
  useGetAllAdoptionRequestQuery,
  useUpdateAdoptionRequestMutation,
} from "@/redux/api/adoptionRequestApi";
import EditIcon from "@mui/icons-material/Edit";
import {
  Alert,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Skeleton,
  TableCell,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { toast } from "sonner";

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
  pet: {
    name: string;
    photos: string;
    location: string;
  };
};

const AdoptionRequestsPage = () => {
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const [requestId, setRequestId] = useState("");

  const [updateAdoptionRequest] = useUpdateAdoptionRequestMutation();
  const { data, isLoading } = useGetAllAdoptionRequestQuery(undefined);

  const adoptionRequestsData = data?.map((item: TAdoption) => ({
    id: item.id,
    adoptionStatus: item.adoptionStatus,
    username: item.user.username,
    avatarURL: item.user.avatarURL,
    email: item.user.email,
    phone: item.user.phone,
    address: item.user.address,
    name: item.pet.name,
    photos: item.pet.photos,
    location: item.pet.location,
  }));

  const columns: GridColDef[] = [
    { field: "name", headerName: "Pet Name", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
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
            <IconButton aria-label="edit" onClick={(event) => handleMenuClick(event, row.id)}>
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const handleMenuClick = async (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    setOpenMenu(event.currentTarget);
    setRequestId(id);
  };

  const handleMenuItemClick = async (adoptionStatus: string) => {
    const body = {
      id: requestId,
      adoptionStatus: adoptionStatus,
    };
    try {
      const res = await updateAdoptionRequest(body).unwrap();
      if (res?.id) {
        toast.success("Adoption Request Change Successfully!");
      }
    } catch (error: any) {
      console.log(error);
    }
    setOpenMenu(null);
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

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
      {/* Menu */}
      <Menu id="edit-menu" anchorEl={openMenu} open={Boolean(openMenu)} onClose={handleCloseMenu}>
        <MenuItem onClick={() => handleMenuItemClick("PENDING")}>PENDING</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("REJECTED")}>REJECTED</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("APPROVED")}>APPROVED</MenuItem>
      </Menu>
    </Box>
  );
};

export default AdoptionRequestsPage;
