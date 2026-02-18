import Container from "@/common/Container";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import aboutImg from "../../assets/about.png";
import Image from "next/image";

export default function About({ data }) {
  return (
    <div className="bg-[#F8F7F4] py-12 md:py-20 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="max-w-full lg:max-w-200 w-full">
            <p className="text-lg md:text-xl font-semibold text-secondary tracking-widest">
              {data?.sub_title}
            </p>
            <h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-cormorant mt-3 leading-tight">
              {data?.title || "MEDILOCK REALTY"}
            </h4>

            <p
              className="text-base md:text-xl font-normal text-[#404A60] my-8 lg:my-14 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></p>
            <Button className="bg-secondary text-white rounded-none hover:bg-secondary/90 h-11 w-full sm:w-auto">
              SCHDULE CONSULTATION <MoveRight />
            </Button>
          </div>
          <div className="max-w-full lg:max-w-115 w-full h-80 md:h-107 overflow-hidden rounded-lg shadow-xl">
            <Image
              src={data?.image || aboutImg}
              alt="aboutImg"
              width={460}
              height={428}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
