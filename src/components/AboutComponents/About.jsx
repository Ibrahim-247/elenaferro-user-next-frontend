import Container from "@/common/Container";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import aboutImg from "../../assets/about.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#F8F7F4] py-20">
      <Container>
        <div className="flex items-center gap-12">
          <div className="max-w-200">
            <p className="text-xl font-semibold text-secondary tracking-widest">
              ABOUT
            </p>
            <h4 className="text-6xl font-semibold font-cormorant mt-3">
              MEDILOCK REALTY
            </h4>

            <p className="text-xl font-normal text-[#404A60] my-14">
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
            <Button className="bg-secondary text-white rounded-none hover:bg-secondary/90 h-11">
              SCHDULE CONSULTATION <MoveRight />
            </Button>
          </div>
          <div className="max-w-115 w-full h-107 overflow-hidden">
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
