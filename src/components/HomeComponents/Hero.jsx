import Container from "@/common/Container";
import heroBg from "../../assets/hero_bg.png";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${heroBg?.src})` }}
      className="h-175 w-full bg-cover bg-center"
    >
      <Container>
        <div className="text-white flex flex-col items-center justify-center h-175 space-y-5">
          <h1 className="text-8xl font-semibold font-cormorant uppercase">
            MEDLOCK REALTY
          </h1>
          <p className="text-4xl font-light uppercase">THE BETTER BROKERAGE</p>
          <div className="flex items-center gap-7 mt-5">
            <Button className="bg-secondary text-white hover:bg-secondary/90 text-lg font-light h-11 rounded-none px-7!">
              SEARCH HOMES <GoArrowRight className="size-6" />
            </Button>
            <Button
              variant="outline"
              className="text-white! hover:bg-secondary bg-transparent text-lg font-light h-11 rounded-none px-7!"
            >
              GET IN TOUCH <GoArrowRight className="size-6" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
