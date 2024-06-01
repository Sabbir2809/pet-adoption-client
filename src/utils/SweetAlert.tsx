import Swal, { SweetAlertIcon } from "sweetalert2";

const sweetAlert = (title: string, icon: SweetAlertIcon) => {
  Swal.fire({
    position: "center",
    icon,
    title,
    showConfirmButton: false,
    timer: 1000,
  });
};

export default sweetAlert;
