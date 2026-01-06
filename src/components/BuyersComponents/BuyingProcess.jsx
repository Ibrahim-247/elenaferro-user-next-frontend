import Container from "@/common/Container";
import procesImg from "../../assets/buyingProcess.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function BuyingProcess() {
  return (
    <div className="py-20">
      <Container>
        <div className="relative">
          <div className="flex place-content-end relative">
            <div className="max-w-203 w-full bg-[#F8F7F4] absolute left-0 top-1/2 -translate-y-1/2 p-12 border-l-4 border-l-secondary">
              <h4 className="text-5xl font-semibold font-cormorant">
                The Buying Process
              </h4>
              <p className="text-3xl font-normal text-[#343E56] mt-3">
                Your Dream Home Awaits
              </p>

              <p className="text-xl font-normal my-12">
                Location, location, location. You must’ve heard that before. But
                that’s because, much of the time, that’s what real estate is all
                about. And never is it more true than when you’re buying a home.{" "}
                <br /> <br />
                All our agents have the local knowledge, skills and experience
                to help you through the buying process. From property hunting
                and price negotiations to filling out paperwork, we’ll help you
                meet your goals, whatever they may be. Your dream home is
                waiting and we can’t wait to help you find it.
              </p>
              <Button className="bg-secondary text-white rounded-none hover:bg-secondary/90 h-11 px-6!">
                SEARCH FOR A HOME <MoveRight className="size-6" />
              </Button>
            </div>
            <div className="max-w-147 w-full h-212 overflow-hidden">
              <Image
                src={procesImg}
                alt="procesImg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
