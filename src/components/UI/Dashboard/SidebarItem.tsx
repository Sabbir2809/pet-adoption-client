import { IDrawerMenuItem } from "@/types/common";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

// type
type TProps = {
  item: IDrawerMenuItem;
};

const SidebarItem = ({ item }: TProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathname = usePathname();

  return (
    <Typography
      component={Link}
      href={linkPath}
      style={{
        textDecoration: "none",
        color: "black",
      }}>
      <ListItem
        disablePadding
        sx={{
          ...(pathname === linkPath
            ? {
                borderRight: "3px solid #1586FD",
                "& svg": { color: "#1586FD" },
              }
            : {}),
          mt: 2,
          textDecoration: "none",
        }}>
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Typography>
  );
};

export default SidebarItem;
