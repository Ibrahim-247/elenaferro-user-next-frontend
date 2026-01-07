import Container from "@/common/Container";
import before from "../../assets/before.png";
import Image from "next/image";

export default function Transformation() {
  return (
    <div className="py-20">
      <Container>
        <div>
          <h5 className="text-5xl font-semibold font-cormorant text-center">
            See the Transformation: Before & After
          </h5>
          <div className="gap-8 grid grid-cols-2 mt-16">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white">
                <div className="w-full grid grid-cols-2 gap-3 h-62 overflow-hidden">
                  <div className="relative">
                    <div className="text-xs font-normal bg-white/60 absolute py-1 px-4 rounded-lg top-4 left-4">
                      Before
                    </div>
                    <Image
                      src={before}
                      alt="before"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative">
                    <div className="text-xs font-normal bg-white/60 absolute py-1 px-4 rounded-lg top-4 left-4">
                      After
                    </div>
                    <Image
                      src={before}
                      alt="before"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-5 space-y-2 border border-t-0">
                  <div className="flex items-center justify-between text-xl font-medium">
                    <h4>As-Is Value</h4>
                    <span>$579.000</span>
                  </div>
                  <div className="flex items-center justify-between text-xl font-medium">
                    <h4>Project Cost</h4>
                    <span>$147.587</span>
                  </div>
                  <div className="flex items-center justify-between text-xl font-medium">
                    <h4>Sale Price</h4>
                    <span>$1023.547</span>
                  </div>
                  <div className="flex items-center justify-between text-xl font-medium text-secondary">
                    <h4>Profit</h4>
                    <span>$320.127</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
