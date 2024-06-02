import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RModal from "@/components/Shared/RModal";
import { useSubmitAdoptionRequestMutation } from "@/redux/api/adoptionRequestApi";
import { getUserInfo } from "@/services/auth.services";
import sweetAlert from "@/utils/SweetAlert";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  petId: string;
};

const AdoptionRequestModal = ({ open, setOpen, petId }: TProps) => {
  const router = useRouter();
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
        sweetAlert("Adoption Request Submitted Successfully", "success");
        setOpen(false);
        router.push("/dashboard/user/adoption");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RModal open={open} setOpen={setOpen} title="Adoption Request Send Process">
      <RForm onSubmit={submitHandler}>
        <RInput
          name="petOwnershipExperience"
          label="Pet Ownership Experience Year"
          sx={{ mb: 2 }}
          fullWidth
          required
        />
        <RInput name="additionalInfo" label="Additional Information" sx={{ mb: 2 }} fullWidth />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </RForm>
    </RModal>
  );
};

export default AdoptionRequestModal;
