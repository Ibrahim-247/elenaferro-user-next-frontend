import Container from "@/common/Container";
import procesImg from "../../assets/buyingProcess.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function SellingProcess() {
  return (
    <div className="py-12 md:py-20 overflow-hidden">
      <Container>
        <div className="relative flex flex-col lg:flex-row items-center">
          <div className="lg:max-w-203 w-full bg-[#F8F7F4] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 p-6 md:p-12 border-l-4 border-l-secondary z-10 shadow-lg lg:shadow-none mb-8 lg:mb-0">
            <h4 className="text-3xl md:text-5xl font-semibold font-cormorant leading-tight">
              The Selling Process
            </h4>
            <p className="text-xl md:text-3xl font-normal text-[#343E56] mt-3">
              Step to Selling
            </p>

            <p className="text-base md:text-xl font-normal my-6 md:my-12 leading-relaxed text-[#404A60]">
              We will help you prepare, price, and market your Atlanta area
              property, using all the tools at our disposal. You can expect
              personalized and exceptional service each step of the way.
              <br className="hidden md:block" /> <br className="hidden md:block" />
              We realize selling your home can be a very emotional process,
              and it should be handled with utmost respect. We will personally
              show your space to qualified buyers and skillfully negotiate on
              your behalf to secure the best price and the quickest closing.
            </p>
            <Button className="bg-secondary text-white rounded-none hover:bg-secondary/90 h-11 px-6! w-full sm:w-auto">
              SEARCH FOR A HOME <MoveRight className="size-5 md:size-6" />
            </Button>
          </div>
          <div className="lg:ml-auto max-w-full lg:max-w-147 w-full h-80 md:h-[500px] lg:h-200 overflow-hidden rounded-lg shadow-xl">
            <Image
              src={procesImg}
              alt="procesImg"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
