import Container from "@/common/Container";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import aboutImg from "../../assets/about.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#F8F7F4] py-12 md:py-20 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="max-w-full lg:max-w-200 w-full">
            <p className="text-lg md:text-xl font-semibold text-secondary tracking-widest">
              ABOUT
            </p>
            <h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-cormorant mt-3 leading-tight">
              MEDILOCK REALTY
            </h4>

            <p className="text-base md:text-xl font-normal text-[#404A60] my-8 lg:my-14 leading-relaxed">
              Medlock Realty is a boutique real estate brokerage made up of the
              most dedicated real estate experts. At Medlock Realty, we have
              cultivated a unique culture that encourages collaboration,
              embraces technology, and harnesses the power of social media
              through creative marketing techniques. <br /> <br />
              This forward-thinking approach which seamlessly integrates design
              and technology, allows us to provide our clients top-notch service
              throughout their home buying or selling experience. Together,
              we’re dedicated to specialized, one-on-one guidance to all of our
              clients – whether they’re looking for a home or a new way to build
              wealth through investment properties.
            </p>
            <Button className="bg-secondary text-white rounded-none hover:bg-secondary/90 h-11 w-full sm:w-auto">
              SCHDULE CONSULTATION <MoveRight />
            </Button>
          </div>
          <div className="max-w-full lg:max-w-115 w-full h-80 md:h-107 overflow-hidden rounded-lg shadow-xl">
            <Image
              src={aboutImg}
              alt="aboutImg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
