import { FC } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "../icons";
import NavItems from "./NavItems";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <>
      <div className="bg-white h-16 z-50 top-0 inset-x-0 sticky">
        <header className="bg-white relative">
          <MaxWidthWrapper>
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    <Icons.logo className="h-10 w-10" />
                  </Link>
                </div>

                <div className="md:block hidden">
                  <NavItems />
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </header>
      </div>
    </>
  );
};

export default Navbar;
