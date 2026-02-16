import Container from "@/common/Container";
import diana from "../../assets/diana.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function LoanApplication() {
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
              DIANA ROYBAL-LAMMERS
            </h4>
            <p className="text-xl font-normal text-[#404A60]">
              Diana Roybal-Lammers began her mortgage career in Jacksonville, FL
              specializing in high-net worth clients supporting Merrill Lynch
              advisors and HSBC private banking. In 2017, she relocated to
              Nashville, TN to be Bank of America’s direct mortgage support for
              Merrill Lynch’s financial advising group, Webb & Associates. She
              was awarded President’s Club in 2020. In early 2021, the team
              moved to Wells Fargo Advisors and built Keystone Private Wealth.
              Financing in all 50 states, Diana built an extensive portfolio
              serving wealth management clients along with realtor and builder
              partnerships. <br /> <br /> Now with a big enthusiasm and a drive
              to serve her industry partners, Diana is taking her decade of
              experience in assisting client’s purchase and refinance needs to
              Union Home Mortgage. UHM’s platform will support The Lammers
              Lending Group with client’s mortgage financial needs in achieving
              homeownership! Diana is licensed in TN, GA, FL, TX, NC, and CA and
              has UHM referral partners in every other state. In 2023, her team
              was a finalist in Nashville Scene for Best Mortgage Lender and was
              the winner for Best of Music City Community Choice Award by the
              Tennessean for Best Mortgage Lending Company. <br /> <br /> Click
              below to start your loan application process
            </p>
            <Button className="bg-transparent text-secondary border-secondary rounded-none border hover:bg-secondary hover:text-white h-11 px-5!">
              START MY LOAN APPLICATION <MoveRight className="size-6" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
