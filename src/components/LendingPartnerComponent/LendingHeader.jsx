import Container from "@/common/Container";
import partner from "../../assets/partner.png";
import Image from "next/image";
export default function LendingHeader() {
  return (
    <div className="bg-[#F8F7F4] py-10 lg:py-14">
      <Container>
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-16">
          <Image src={partner} alt="partner" />
          <p className="text-base lg:text-xl font-normal">
            We are proud to partner with Union Home Mortgage to provide our
            clients with the best homebuying experience!
          </p>
        </div>
      </Container>
    </div>
  );
}
