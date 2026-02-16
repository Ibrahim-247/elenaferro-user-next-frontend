import Container from "@/common/Container";
import procesImg from "../../assets/buyingProcess.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function BuyingProcess() {
  return (
    <div className="py-12 md:py-20 overflow-hidden">
      <Container>
        <div className="relative flex flex-col lg:flex-row items-center">
          <div className="lg:max-w-203 w-full bg-[#F8F7F4] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 p-6 md:p-12 border-l-4 border-l-secondary z-10 shadow-lg lg:shadow-none mb-8 lg:mb-0">
            <h4 className="text-3xl md:text-5xl font-semibold font-cormorant leading-tight">
              The Buying Process
            </h4>
            <p className="text-xl md:text-3xl font-normal text-[#343E56] mt-3">
              Your Dream Home Awaits
            </p>

            <p className="text-base md:text-xl font-normal my-6 md:my-12 leading-relaxed text-[#404A60]">
              Location, location, location. You must’ve heard that before. But
              that’s because, much of the time, that’s what real estate is all
              about. And never is it more true than when you’re buying a home.{" "}
              <br className="hidden md:block" />{" "}
              <br className="hidden md:block" />
              All our agents have the local knowledge, skills and experience to
              help you through the buying process. From property hunting and
              price negotiations to filling out paperwork, we’ll help you meet
              your goals, whatever they may be. Your dream home is waiting and
              we can’t wait to help you find it.
            </p>
            <Button className="bg-secondary text-white rounded-none hover:bg-secondary/90 h-11 px-6! w-full sm:w-auto">
              SEARCH FOR A HOME <MoveRight className="size-5 md:size-6" />
            </Button>
          </div>
          <div className="lg:ml-auto max-w-full lg:max-w-147 w-full h-80 md:h-[500px] lg:h-212 overflow-hidden rounded-lg shadow-xl">
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
