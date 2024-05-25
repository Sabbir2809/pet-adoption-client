// icons
import { USER_ROLE } from "@/constants/role";
import { IDrawerMenuItem, UserRole } from "@/types/common";
import KeyIcon from "@mui/icons-material/Key";
import PeopleIcon from "@mui/icons-material/People";
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
          title: "User Management",
          path: `${role}/user-managements`,
          icon: PeopleIcon,
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
