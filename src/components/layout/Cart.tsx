"use client";

import { SeparatorVertical, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/Sheet";
import { FC } from "react";
import { Separator } from "@radix-ui/react-separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const itemCount = 0;

  //   const cartTotal = items.reduce(
  //     (total, { product }) => total + product.price,
  //     0
  //   );

  const fee = 1;

  return (
    <>
      <Sheet>
        <SheetTrigger className="flex items-center p-2">
          <ShoppingCart className="flex-shrink text-gray-700" />
          <span className="bg-red-400 rounded-full w-5 h-5 font-medium mb-4 -ml-1 flex items-center justify-center text-gray-700">
            0
          </span>
        </SheetTrigger>
        <SheetContent className="flex flex-col w-full pr-0">
          <SheetHeader className="p-y-2 pr-6">
            <SheetTitle className="text-center capitalize text-2xl">
              cart (0)
            </SheetTitle>
          </SheetHeader>
          {itemCount > 0 ? (
            <>
              <div className="flex flex-col w-full capitalize font-semibold">
                cart items
              </div>
              <div className="">
                <Separator />
                <div className="pr-4 space-y-3">
                  <div className="flex">
                    <span className="flex-1">Shopping</span>
                    <span className="">Fee</span>
                  </div>
                  <div className="flex">
                    <span className="flex-1">Transaction Fee</span>
                    <span>{formatPrice(fee)}</span>
                  </div>
                  <div className="flex">
                    <span className="flex-1">Total</span>
                    <span>{formatPrice(fee)}</span>
                  </div>
                </div>
                <SheetFooter>
                  <SheetTrigger className="mt-3 mr-4" asChild>
                    <Link
                      href="/cart"
                      className={buttonVariants({ className: "w-full" })}
                    >
                      Continue to Checkout
                    </Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
            </>
          ) : (
            <>
              <div className="flex h-full flex-col items-center justify-center">
                <div className="h-60 w-60 mb-4 relative">
                  <Image
                    src="/hippo-empty-cart.png"
                    fill
                    alt="empty shopping cart hippo"
                  />
                </div>
                <div className=" font-semibold text-xl">Your cart is empty</div>
                <SheetTrigger>
                  <Link
                    href="/products"
                    className={buttonVariants({
                      variant: "link",
                      size: "sm",
                      className: "text-muted-foreground text-sm",
                    })}
                  >
                    Add items to your cart to checkup
                  </Link>
                </SheetTrigger>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Cart;
