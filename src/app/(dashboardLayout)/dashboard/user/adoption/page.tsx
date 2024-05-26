"use client";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Alert, Box, Skeleton, TableCell, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

type TAdoption = {
  id: number;
  adoptionStatus: string;
  pet: {
    name: string;
    photos: string;
    location: string;
    gender: string;
    age: number;
  };
};

const AdoptionPage = () => {
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const adoptionData = data?.adoptionRequests;

  const transformedData = adoptionData?.map((item: TAdoption) => ({
    id: item.id,
    adoptionStatus: item.adoptionStatus,
    name: item.pet.name,
    photos: item.pet.photos,
    location: item.pet.location,
    gender: item.pet.gender,
    age: item.pet.age,
  }));

  const columns: GridColDef[] = [
    { field: "name", headerName: "Pet Name", flex: 1 },
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
    { field: "location", headerName: "Location", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    {
      field: "photos",
      headerName: "Photos",
      flex: 1,
      renderCell: (params) => <Image src={params.value} width={100} height={100} alt="pet" />,
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2 }}>
        My Adoption Request
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
          <DataGrid rows={transformedData || []} columns={columns} hideFooter={true} />
        </Box>
      )}
    </Box>
  );
};

export default AdoptionPage;
