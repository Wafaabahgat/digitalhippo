"use client";
import { FC, useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { PRODUCT_CATEGORIES } from "@/config";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

interface NavItemsProps {}

const NavItems: FC<NavItemsProps> = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const isAnyOpen = activeIndex !== null;
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        //const close = () => setActiveIndex(null);
        const isOpen = i === activeIndex;

        return (
          <NavItem
            handleOpen={handleOpen}
            // close={close}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
            key={category.value}
            category={category}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
