import Container from "@/common/Container";
import procesImg from "../../assets/buyingProcess.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function SellingProcess() {
  return (
    <div className="py-20">
      <Container>
        <div className="relative">
          <div className="flex place-content-end relative">
            <div className="max-w-203 w-full bg-[#F8F7F4] absolute left-0 top-1/2 -translate-y-1/2 p-12 border-l-4 border-l-secondary">
              <h4 className="text-5xl font-semibold font-cormorant">
                The Selling Process
              </h4>
              <p className="text-3xl font-normal text-[#343E56] mt-3">
                Step to Selling
              </p>

              <p className="text-xl font-normal my-12">
                We will help you prepare, price, and market your Atlanta area
                property, using all the tools at our disposal. You can expect
                personalized and exceptional service each step of the way.
                <br /> <br />
                We realize selling your home can be a very emotional process,
                and it should be handled with utmost respect. We will personally
                show your space to qualified buyers and skillfully negotiate on
                your behalf to secure the best price and the quickest closing.
              </p>
              <Button className="bg-secondary text-white rounded-none hover:bg-secondary/90 h-11 px-6!">
                SEARCH FOR A HOME <MoveRight className="size-6" />
              </Button>
            </div>
            <div className="max-w-147 w-full h-200 overflow-hidden">
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
