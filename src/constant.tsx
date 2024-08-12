import { EmailOutlined } from "@mui/icons-material";
import { LayoutDashboard } from "lucide-react";

export const leftSideBarLinks = [
    {
      label: 'Dashboard',
      to: '/dashboard',
      icon: <LayoutDashboard />,
    },
    {
      label: 'Email',
      to: '/email',
      icon: <EmailOutlined />,
    },
]
export const ITEM_PER_PAGE = 10;
