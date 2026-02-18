import Container from "@/common/Container";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function Consultation({ data }) {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <div className="w-full flex flex-col items-center justify-center gap-6 md:gap-8 text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary max-w-full lg:max-w-125 w-full leading-tight">
            {data?.title}
          </h2>
          <p
            className="max-w-full lg:max-w-200 text-lg md:text-xl font-normal text-[#404A60] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></p>
          <Button className="rounded-none bg-secondary text-white hover:bg-secondary/90 h-11 px-8 w-full sm:w-auto">
            SCHDULE CONSULTATION <MoveRight className="size-5 md:size-6" />
          </Button>
        </div>
      </Container>
    </div>
  );
}
