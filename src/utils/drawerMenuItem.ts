// icons
import { USER_ROLE } from "@/constants/role";
import { IDrawerMenuItem, UserRole } from "@/types/common";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import KeyIcon from "@mui/icons-material/Key";

const drawerMenuItem = (role: UserRole): IDrawerMenuItem[] => {
  const roleMenuItems: IDrawerMenuItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: AccountCircleIcon,
    },
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
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Adoption Requests",
          path: `${role}/adoption-requests`,
          icon: GroupIcon,
        }
      );
      break;
    // user
    case USER_ROLE.USER:
      roleMenuItems.push({
        title: "Adopt",
        path: `${role}/adoption-requests`,
        icon: GroupIcon,
      });
      break;

    default:
      break;
  }

  return [...roleMenuItems, ...defaultMenus];
};

export default drawerMenuItem;
