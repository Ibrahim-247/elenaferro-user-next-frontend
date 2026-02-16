import Container from "@/common/Container";
import heroBg from "../assets/hero_bg.png";

export default function CommonBanner({ subtitle, title, banner_img }) {
  return (
    <div
      style={{ backgroundImage: `url(${banner_img?.src || heroBg?.src})` }}
      className="h-[50vh] md:h-175 w-full bg-cover bg-center"
    >
      <Container>
        <div className="text-white flex flex-col-reverse items-center justify-center h-[50vh] md:h-175 gap-4 md:gap-6 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold font-cormorant uppercase leading-tight">
            {title ?? "MEDLOCK REALTY"}
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl font-light uppercase tracking-[0.2em]">
            {subtitle ?? "THE BETTER BROKERAGE"}
          </p>
        </div>
      </Container>
    </div>
  );
}
