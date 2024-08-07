import { LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/ui/button";
import AlertConfirmation from "../common/AlertConfirmation";
import { leftSideBarLinks } from "../../constant";

interface Props {
  isSideBarOpen: boolean;
}

export default function LeftSideBar({ isSideBarOpen }: Props) {
    const location = useLocation();
    
    const handleLogout = () => {
        localStorage.clear();
        window.location.replace("/");
    };
    const isLinkActive = (subLink: any) => location.pathname.includes(subLink.to);
  return (
    <aside
      className={`sticky left-0 top-0 z-20 flex h-screen min-w-fit w-64 flex-col justify-between overflow-auto border-r pt-20 pb-5 px-5 ${
        isSideBarOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="flex w-full flex-1 flex-col gap-4">
        {leftSideBarLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`relative flex justify-start p-2.5 gap-4 rounded-lg ${
                isLinkActive(link)
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:text-primary transition-all'
              }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </div>

      <AlertConfirmation onConfirm={handleLogout} title="Are you sure logout?">
        <Button className="w-full justify-start inline-flex gap-4 items-start bg-transparent hover:text-destructive transition-all text-muted-foreground hover:bg-transparent">
          <LogOut /> Log Out
        </Button>
      </AlertConfirmation>
    </aside>
  );
}
