"use client";
import { useChangeProfileRoleMutation, useGetAllUsersQuery } from "@/redux/api/userApi";
import EditIcon from "@mui/icons-material/Edit";
import {
  Alert,
  Box,
  Grid,
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

const achievementCardStyle = {
  textAlign: "center",
  p: 3,
  borderRadius: 2,
  bgcolor: "primary.main",
  color: "primary.contrastText",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

type TUser = {
  id: number;
  username: string;
  avatarURL: string;
  role: string;
  isActive: boolean;
  email: string;
  gender: string;
  phone: string;
  address: string;
};

const MetadataPage = () => {
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const [selectRole, setSelectRole] = useState("");

  const [changeProfileRole] = useChangeProfileRoleMutation();
  const { data, isLoading } = useGetAllUsersQuery(undefined);

  const adoptionRequestsData = data?.map((item: TUser) => ({
    id: item.id,
    isActive: item.isActive,
    username: item.username,
    avatarURL: item.avatarURL,
    email: item.email,
    phone: item.phone,
    address: item.address,
  }));

  const columns: GridColDef[] = [
    { field: "username", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "role",
      headerName: "User Role",
      flex: 1,
      renderCell: (params) => (
        <TableCell>
          <Alert
            severity={
              params.value === "ADMIN" ? "success" : params.value === "USER" ? "info" : "error"
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

  // handle role change
  const handleMenuClick = async (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    setOpenMenu(event.currentTarget);
    setSelectRole(id);
  };
  const handleMenuItemClick = async (adoptionStatus: string) => {
    const body = {
      role: selectRole,
    };
    try {
      const res = await changeProfileRole(body).unwrap();
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
        Dashboard Managements
      </Typography>
      <Box sx={{ margin: "50px auto" }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={6} md={3}>
            <Box sx={{ ...achievementCardStyle }}>
              <Typography variant="h4" gutterBottom>
                50+
              </Typography>
              <Typography variant="subtitle1">Pets Available for Adoption</Typography>
            </Box>
          </Grid>
          {/* Add similar Grid items for other achievements */}
          <Grid item xs={6} md={3}>
            <Box sx={{ ...achievementCardStyle }}>
              <Typography variant="h4" gutterBottom>
                10+
              </Typography>
              <Typography variant="subtitle1">Successful Adoptions</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ ...achievementCardStyle }}>
              <Typography variant="h4" gutterBottom>
                20+
              </Typography>
              <Typography variant="subtitle1">Happy Families</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ ...achievementCardStyle }}>
              <Typography variant="h4" gutterBottom>
                30+
              </Typography>
              <Typography variant="subtitle1">Pets Saved</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
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
        <MenuItem onClick={() => handleMenuItemClick("ADMIN")}>Admin</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("USER")}>User</MenuItem>
      </Menu>
    </Box>
  );
};

export default MetadataPage;
