import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface Props {
  toggleSideBar: () => void;
}

export default function TopBar({ toggleSideBar }: Props) {
  const [currentTimestamp, setCurrentTimestamp] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTimestamp(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <header className="border-b bg-white border-border z-50 w-full fixed shadow">
      <nav className="flex  items-center justify-between py-2 px-5">
        <div className="flex items-center w-full justify-start">
          <Link to="/" className="mr-14 flex items-center gap-3">
            <h1 className="text-2xl   text-primary ">
              Excel Upload
            </h1>
          </Link>
          {/* <Button
            onClick={toggleSideBar}
            className="mr-3 bg-transparent text-primary hover:bg-transparent"
          >
            <Menu size={30} />
          </Button> */}
        </div>
        <div className="flex flex-col">
          <span className="flex text-sm justify-end">{currentTimestamp}</span>
        </div>
      </nav>
    </header>
  );
}
