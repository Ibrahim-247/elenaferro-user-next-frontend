import Container from "@/common/Container";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function Consultation() {
  return (
    <div className="py-20">
      <Container>
        <div className=" w-full flex flex-col items-center justify-center gap-8 text-center">
          <h2 className="text-3xl font-semibold text-secondary max-w-125 w-full">
            Welcome to Medlock Realty! A new era of real estate excellence.
          </h2>
          <p className="max-w-200 text-xl font-normal">
            We believe that every real estate transaction should be an
            exceptional experience. Whether you’re buying or selling, our focus
            is on delivering the highest level of service, support, and results.
          </p>
          <Button className="rounded-none bg-secondary text-white hover:bg-secondary/90 h-11">
            SCHDULE CONSULTATION <MoveRight className="size-6" />
          </Button>
        </div>
      </Container>
    </div>
  );
}
