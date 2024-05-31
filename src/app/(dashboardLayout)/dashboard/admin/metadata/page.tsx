"use client";
import SkeletonLoader from "@/components/Shared/SkeletonLoader";
import {
  useChangeProfileRoleMutation,
  useDashboardMetadataQuery,
  useGetAllUsersQuery,
} from "@/redux/api/userApi";
import { TUser } from "@/types/user";
import EditIcon from "@mui/icons-material/Edit";
import {
  Alert,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Pagination,
  TableCell,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { toast } from "sonner";

const cardStyle = {
  textAlign: "center",
  p: 3,
  borderRadius: 2,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.03)",
  },
};

const MetadataPage = () => {
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const [selectedId, setSelectedId] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const query: Record<string, any> = { page, limit };

  const { data: dashboardMetadata } = useDashboardMetadataQuery(undefined);

  const [changeProfileRole] = useChangeProfileRoleMutation();
  const { data, isLoading } = useGetAllUsersQuery({ ...query });

  const meta = data?.meta;
  const pageCount = meta ? Math.ceil(meta.total / limit) : 0;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const usersData = data?.users?.map((item: TUser) => ({
    id: item.id,
    isActive: item.isActive,
    username: item.username,
    avatarURL: item.avatarURL,
    role: item.role,
    email: item.email,
    phone: item.phone,
    address: item.address,
  }));

  const columns: GridColDef[] = [
    { field: "username", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "role",
      headerName: "User Role",
      flex: 1,
      renderCell: (params) => (
        <TableCell>
          <Alert severity={params.value === "ADMIN" ? "success" : "info"}>{params.value}</Alert>
        </TableCell>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <IconButton aria-label="edit" onClick={(event) => handleMenuClick(event, row.id)}>
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    setOpenMenu(event.currentTarget);
    setSelectedId(id);
  };

  const handleMenuItemClick = async (role: string) => {
    try {
      const res = await changeProfileRole({ id: selectedId, role }).unwrap();
      if (res?.id) {
        toast.success("Profile role changed successfully!");
      }
    } catch (error) {
      console.error(error);
    }
    setOpenMenu(null);
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2 }}>
        Dashboard Management
      </Typography>
      <Box sx={{ maxWidth: "100%" }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ ...cardStyle }}>
              <Typography variant="h4" gutterBottom>
                {dashboardMetadata?.petCount}
              </Typography>
              <Typography variant="subtitle1">Pets Available</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ ...cardStyle }}>
              <Typography variant="h4" gutterBottom>
                1
              </Typography>
              <Typography variant="subtitle1">Pet Adoption</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ ...cardStyle }}>
              <Typography variant="h4" gutterBottom>
                {dashboardMetadata?.userCount}
              </Typography>
              <Typography variant="subtitle1">Total Users</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <Box my={2}>
            <DataGrid
              rows={usersData || []}
              columns={columns}
              hideFooterPagination
              slots={{
                footer: () => (
                  <Box sx={{ m: 2, display: "flex", justifyContent: "end" }}>
                    <Pagination
                      count={pageCount}
                      page={page}
                      onChange={handleChange}
                      color="primary"
                    />
                  </Box>
                ),
              }}
            />
          </Box>
        )}
        <Menu id="edit-menu" anchorEl={openMenu} open={Boolean(openMenu)} onClose={handleCloseMenu}>
          <MenuItem onClick={() => handleMenuItemClick("ADMIN")}>Admin</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("USER")}>User</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default MetadataPage;
