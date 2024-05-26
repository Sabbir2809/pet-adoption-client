import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RModal from "@/components/Shared/RModal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AdoptionRequestModal = ({ open, setOpen }: TProps) => {
  const submitHandler = async (values: FieldValues) => {
    console.log(values);

    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RModal open={open} setOpen={setOpen} title="Adoption Request">
      <RForm onSubmit={submitHandler}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <RInput name="name" label="Name" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RInput name="description" label="Description" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RInput name="age" label="Age" sx={{ mb: 2 }} fullWidth />
          </Grid>
        </Grid>
        <Button type="submit" variant="outlined">
          Adaption Request
        </Button>
      </RForm>
    </RModal>
  );
};

export default AdoptionRequestModal;
