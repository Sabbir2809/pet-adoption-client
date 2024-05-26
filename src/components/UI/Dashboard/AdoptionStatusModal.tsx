import RForm from "@/components/Forms/RForm";
import RSelectField from "@/components/Forms/RSelectField";
import RModal from "@/components/Shared/RModal";
import { ADOPTION_REQUEST_STATUS } from "@/constants/common";
import { useUpdateAdoptionRequestMutation } from "@/redux/api/adoptionRequestApi";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

// type
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

const AdoptionStatusModal = ({ open, setOpen, data }: TProps) => {
  const [updateAdoptionRequest] = useUpdateAdoptionRequestMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    try {
      const res = await updateAdoptionRequest(values).unwrap();
      if (res?.id) {
        toast.success("Adoption Request Change Successfully!");
        setOpen(false);
      }
    } catch (error: any) {
      toast.success(error?.message);
    }
  };

  return (
    <>
      <Button>Change</Button>
      <RModal open={open} setOpen={setOpen} title="Update Adoption Request">
        <RForm onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <RSelectField
                items={ADOPTION_REQUEST_STATUS}
                name="adoptionStatus"
                label="Adoption Status"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button type="submit" sx={{ mt: 1 }}>
            Status Change
          </Button>
        </RForm>
      </RModal>
    </>
  );
};

export default AdoptionStatusModal;
