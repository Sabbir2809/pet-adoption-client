// icons
import { USER_ROLE } from "@/constants/role";
import { IDrawerMenuItem, UserRole } from "@/types/common";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyIcon from "@mui/icons-material/Key";
import PetsIcon from "@mui/icons-material/Pets";
import RequestPageIcon from "@mui/icons-material/RequestPage";

const drawerMenuItem = (role: UserRole): IDrawerMenuItem[] => {
  const roleMenuItems: IDrawerMenuItem[] = [];

  const defaultMenus = [
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    // admin
    case USER_ROLE.ADMIN:
      roleMenuItems.push(
        {
          title: "Dashboard",
          path: `${role}/metadata`,
          icon: DashboardIcon,
        },
        {
          title: "Pets",
          path: `${role}/pets`,
          icon: PetsIcon,
        },
        {
          title: "Adoption Request",
          path: `${role}/adoption-requests`,
          icon: RequestPageIcon,
        }
      );
      break;
    // user
    case USER_ROLE.USER:
      roleMenuItems.push({
        title: "Adoption",
        path: `${role}/adoption`,
        icon: RequestPageIcon,
      });
      break;

    default:
      break;
  }

  return [...roleMenuItems, ...defaultMenus];
};

export default drawerMenuItem;
