import Container from "@/common/Container";
import partner from "../../assets/partner.png";
import Image from "next/image";
export default function LendingHeader() {
  return (
    <div className="bg-[#F8F7F4] py-14">
      <Container>
        <div className="flex items-center gap-16">
          <Image src={partner} alt="partner" />
          <p className="text-xl font-normal">
            We are proud to partner with Union Home Mortgage to provide our
            clients with the best homebuying experience!
          </p>
        </div>
      </Container>
    </div>
  );
}
