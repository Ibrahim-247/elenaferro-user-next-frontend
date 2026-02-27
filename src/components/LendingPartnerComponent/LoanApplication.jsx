import Container from "@/common/Container";
import diana from "../../assets/diana.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function LoanApplication({ data }) {
  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <div className="max-w-137 w-full h-80 lg:h-225 overflow-hidden shrink-0">
            <Image
              src={diana}
              alt="diana"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h4 className="text-4xl lg:text-6xl font-semibold font-cormorant">
              {data?.title}
            </h4>
            <p
              className="text-xl font-normal text-[#404A60]"
              dangerouslySetInnerHTML={{ __html: data?.description || "" }}
            ></p>
            <Button className="bg-transparent text-secondary border-secondary rounded-none border hover:bg-secondary hover:text-white h-11 px-5!">
              START MY LOAN APPLICATION <MoveRight className="size-6" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
