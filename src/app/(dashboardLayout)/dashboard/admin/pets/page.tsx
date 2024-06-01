"use client";
import SkeletonLoader from "@/components/Shared/SkeletonLoader";
import AddPetModal from "@/components/UI/Dashboard/AddPetModal";
import { useDeletePetProfileMutation, useGetAllPetsQuery } from "@/redux/api/petApi";
import { TPet } from "@/types/pet";
import sweetAlert from "@/utils/SweetAlert";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Box, Button, IconButton, Pagination, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PetsPage = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const query: Record<string, any> = {};
  query["page"] = page;
  query["limit"] = limit;

  const { data, isLoading } = useGetAllPetsQuery({ ...query });
  const [deletePetProfile] = useDeletePetProfileMutation();

  const meta = data?.meta;
  let pageCount: number;
  if (meta?.total) {
    pageCount = Math.ceil(meta?.total / limit);
  }
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // data format for GridColDef
  const petsData = data?.pets?.map((item: TPet) => ({
    id: item.id,
    name: item.name,
    species: item.species,
    breed: item.breed,
    age: item.age,
    gender: item.gender,
    temperament: item.temperament,
    photos: item.photos,
    location: item.location,
  }));

  // handle delete
  const handleDelete = async (id: string) => {
    try {
      const res = await deletePetProfile(id).unwrap();
      if (res?.id) {
        sweetAlert("Pet Delete Successfully", "success");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Pet Name", flex: 1 },
    {
      field: "photos",
      headerName: "Photos",
      flex: 1,
      renderCell: (params) => <Image src={params.value} width={100} height={100} alt="pet" />,
    },
    { field: "species", headerName: "Species", flex: 1 },
    { field: "breed", headerName: "Breed", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box justifyContent="center">
            <IconButton aria-label="delete" onClick={() => handleDelete(row.id)}>
              <DeleteIcon color="warning" />
            </IconButton>
            <Link href={`/dashboard/admin/pets/edit/${row.id}`}>
              <IconButton aria-label="edit">
                <EditNoteIcon color="info" fontSize="large" />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2 }}>
        Pets Managements
      </Typography>
      <AddPetModal open={open} setOpen={setOpen} />
      <Button startIcon={<AddIcon />} variant="contained" onClick={() => setOpen(true)}>
        Add New Pet
      </Button>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <Box my={2}>
          <DataGrid
            rows={petsData || []}
            columns={columns}
            hideFooterPagination
            slots={{
              footer: () => (
                <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
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
    </Box>
  );
};

export default PetsPage;
