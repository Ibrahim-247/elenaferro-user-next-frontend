import Container from "@/common/Container";
import heroBg from "../assets/hero_bg.png";

export default function CommonBanner({ subtitle, title, banner_img }) {
  return (
    <div
      style={{ backgroundImage: `url(${banner_img?.src || heroBg?.src})` }}
      className="h-175 w-full bg-cover bg-center"
    >
      <Container>
        <div className="text-white flex flex-col items-center justify-center h-175 space-y-5">
          <h1 className="text-8xl font-semibold font-cormorant uppercase">
            {title ?? "MEDLOCK REALTY"}
          </h1>
          <p className="text-4xl font-light uppercase">
            {subtitle ?? "THE BETTER BROKERAGE"}
          </p>
        </div>
      </Container>
    </div>
  );
}
