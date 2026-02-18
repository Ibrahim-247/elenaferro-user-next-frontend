import Container from "@/common/Container";
import feature from "../../assets/feature.png";
import Image from "next/image";
export default function Features() {
  return (
    <div className="py-12 lg:py-20">
      <Container>
        <div className="space-y-3 text-center">
          <p className="text-xl font-normal text-secondary">EXPLORE</p>
          <h4 className="text-4xl lg:text-6xl font-semibold font-cormorant">
            FEATURED AREAS
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-full h-75 overflow-hidden relative">
              <Image
                src={feature}
                alt="feature"
                className="w-full h-full object-cover"
              />
              <h5 className="text-xl font-normal uppercase absolute top-1/2 left-1/2 -translate-1/2 text-white">
                JOHNS CREEK
              </h5>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
