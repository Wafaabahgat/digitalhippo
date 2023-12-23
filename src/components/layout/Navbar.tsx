"use client";

import { FC, useEffect, useState,useClient } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "../icons";
import NavItems from "./NavItems";
import { buttonVariants } from "../ui/button";
import Cart from "./Cart";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import UserAccNav from "../UserAccNav";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  // const nextCookies = cookies();
  // const { user } = await getServerSideUser(nextCookies);

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const nextCookies = cookies();
      const { user } = await getServerSideUser(nextCookies);
      setUser(user);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white h-16 z-50 top-0 inset-x-0 sticky">
        <header className="bg-white relative">
          <MaxWidthWrapper>
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                {/* logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    <Icons.logo className="h-10 w-10" />
                  </Link>
                </div>

                {/* icons */}
                <div className="md:block hidden">
                  <NavItems />
                </div>

                {/* sign */}
                <div className="flex items-center ml-auto">
                  <div className="md:flex hidden md:items-center md:flex-1 md:justify-end">
                    {user ? null : (
                      <Link
                        href="/signin"
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        Sign In
                      </Link>
                    )}

                    {user ? null : (
                      <span
                        className="h-6 w-px bg-gray-300"
                        aria-hidden="true"
                      />
                    )}

                    {user ? (
                      <UserAccNav />
                    ) : (
                      <Link
                        href="/sign-up"
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        Create Account
                      </Link>
                    )}

                    {user ? (
                      <span
                        className="h-6 w-px bg-gray-300"
                        aria-hidden="true"
                      />
                    ) : null}

                    {user ? null : (
                      <span
                        className="h-6 w-px bg-gray-300"
                        aria-hidden="true"
                      />
                    )}

                    <div className="ml-4 flow-root">
                      <Cart />
                    </div>
                  </div>
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
