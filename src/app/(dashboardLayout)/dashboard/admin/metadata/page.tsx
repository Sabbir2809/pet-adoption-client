"use client";
import {
  useChangeProfileRoleMutation,
  useDashboardMetadataQuery,
  useGetAllUsersQuery,
} from "@/redux/api/userApi";
import EditIcon from "@mui/icons-material/Edit";
import {
  Alert,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Pagination,
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
  id: string;
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
  const [selectedId, setSelectedId] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const query: Record<string, any> = {};
  query["page"] = page;
  query["limit"] = limit;

  const { data: dashboardMetadata } = useDashboardMetadataQuery(undefined);

  const [changeProfileRole] = useChangeProfileRoleMutation();
  const { data, isLoading } = useGetAllUsersQuery({ ...query });

  const meta = data?.meta;
  let pageCount: number;
  if (meta?.total) {
    pageCount = Math.ceil(meta?.total / limit);
  }
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const usersData = data?.users.map((item: TUser) => ({
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
    { field: "address", headerName: "Address", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "role",
      headerName: "User Role",
      flex: 1,
      renderCell: (params) => (
        <TableCell>
          <Alert severity="success">{params.value}</Alert>
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
            <IconButton aria-label="edit" onClick={(event) => handleMenuClick(event, row)}>
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  // handle role change
  const handleMenuClick = async (event: React.MouseEvent<HTMLButtonElement>, row: TUser) => {
    setOpenMenu(event.currentTarget);
    setSelectedId(row.id);
  };
  const handleMenuItemClick = async (role: string) => {
    try {
      const res = await changeProfileRole({ id: selectedId, role: role }).unwrap();
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
      <Box sx={{ maxWidth: "100%" }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ ...achievementCardStyle }}>
              <Typography variant="h4" gutterBottom>
                {dashboardMetadata?.petCount}
              </Typography>
              <Typography variant="subtitle1">Pets Available</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ ...achievementCardStyle }}>
              <Typography variant="h4" gutterBottom>
                {Object.keys(dashboardMetadata?.approvedCount).length}
              </Typography>
              <Typography variant="subtitle1">Pet Adoption</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ ...achievementCardStyle }}>
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
          <Box sx={{ width: "100%", height: "100vh", mt: 2 }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        ) : (
          <Box my={2}>
            {/* DataGrid */}
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
        {/* Menu */}
        <Menu id="edit-menu" anchorEl={openMenu} open={Boolean(openMenu)} onClose={handleCloseMenu}>
          <MenuItem onClick={() => handleMenuItemClick("ADMIN")}>Admin</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("USER")}>User</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default MetadataPage;
