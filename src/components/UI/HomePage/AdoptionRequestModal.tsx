import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RModal from "@/components/Shared/RModal";
import { useSubmitAdoptionRequestMutation } from "@/redux/api/adoptionRequestApi";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  petId: string;
};

const AdoptionRequestModal = ({ open, setOpen, petId }: TProps) => {
  const { userId } = getUserInfo();

  const [submitAdoptionRequest] = useSubmitAdoptionRequestMutation();

  const submitHandler = async (values: FieldValues) => {
    const adoptionRequestBody = {
      petId: petId,
      userId: userId,
      ...values,
    };

    try {
      const res = await submitAdoptionRequest(adoptionRequestBody).unwrap();
      if (res?.id) {
        toast.success("Adoption Request Successfully Submitted");
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RModal open={open} setOpen={setOpen} title="Send Adoption Request">
      <RForm onSubmit={submitHandler}>
        <RInput
          name="petOwnershipExperience"
          label="Pet Ownership Experience"
          sx={{ mb: 2 }}
          fullWidth
        />
        <RInput name="additionalInfo" label="Additional Information" sx={{ mb: 2 }} fullWidth />
        <Button type="submit" variant="outlined">
          Adaption Request
        </Button>
      </RForm>
    </RModal>
  );
};

export default AdoptionRequestModal;