import Container from "@/common/Container";
import { Phone } from "lucide-react";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import { LuMailOpen } from "react-icons/lu";

export default function AboutUs() {
  return (
    <div className="py-12 lg:py-20">
      <Container>
        <div className="text-center space-y-2">
          <p className="text-xl font-bold text-secondary">LEARN MORE</p>
          <h3 className="text-4xl lg:text-6xl font-semibold font-cormorant">
            ABOUT US
          </h3>
        </div>
        <div className="space-y-8 my-5 lg:my-8">
          <p>
            Medlock Realty is a boutique real estate brokerage made up of the
            most dedicated real estate experts. At Medlock Realty, we have
            cultivated a unique culture that encourages collaboration, embraces
            technology, and harnesses the power of social media through creative
            marketing techniques.
          </p>
          <p>
            This forward-thinking approach which seamlessly integrates design
            and technology, allows us to provide our clients top-notch service
            throughout their home buying or selling experience. Together, we’re
            dedicated to specialized, one-on-one guidance to all of our clients
            – whether they’re looking for a home or a new way to build wealth
            through investment properties.
          </p>
        </div>
        <div className="space-y-4 text-center flex flex-col items-center">
          <div className="text-xl font-normal flex items-center gap-2">
            <Phone />{" "}
            <span>
              <a href="tel:(404) 860-1060">(404) 860-1060</a>
            </span>
          </div>
          <div className="text-xl font-normal flex items-center gap-2">
            <LuMailOpen />{" "}
            <span>
              <a href="mailto:info@medlockrealty.com">info@medlockrealty.com</a>
            </span>
          </div>
          <Button className="h-11 bg-secondary text-white hover:bg-secondary/90 px-8! rounded-none">
            READ MORE <GoArrowRight />
          </Button>
        </div>
      </Container>
    </div>
  );
}
