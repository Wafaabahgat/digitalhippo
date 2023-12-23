import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { FC } from "react";
import { Button } from "./ui/button";
import { DropdownMenuContent } from "./ui/dropdown-menu";

interface UserAccNavProps {}

const UserAccNav: FC<UserAccNavProps> = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Button variant="ghost" size="sm" className=" relative">
          My Account
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <div className="flex justify-center items-center gap-2 p-2"></div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccNav;
