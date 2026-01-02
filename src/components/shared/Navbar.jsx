import Container from "@/common/Container";
import logo from "../../assets/footer_logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="py-4">
      <Container>
        <div>
          <Image src={logo} alt="logo" className="w-64" />
        </div>
      </Container>
    </div>
  );
}
