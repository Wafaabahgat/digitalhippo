import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 md:text-6xl">
            Your marketplace for high-quality
            <span className=" text-blue-600"> digital assets</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-prose">
            Welcome to DigitalHippo. Every asset on our platform is verified by
            our team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link className={buttonVariants()} href="/products">
              Browse Trending
            </Link>
            <Button variant="ghost"> Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section>
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 sm:gap-y-6 sm:grid-cols-2">
            {perks.map((e) => (
              // md:flex md:items-start md:text-left
              <div
                key={e.name}
                className="text-center block"
              >
                <div className="flex justify-center md:flex-grow-0">
                  <div className="rounded-full h-14 w-14 flex justify-center items-center bg-blue-100 text-blue-600">
                    {<e.Icon className=" w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-3 lg:ml-1 ml-4">
                  <h3 className="text-base font-medium text-gray-900">
                    {e.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
