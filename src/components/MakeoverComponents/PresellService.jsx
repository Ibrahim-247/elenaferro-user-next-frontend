import Image from "next/image";
import sellImg from "../../assets/sell.png";
import Container from "@/common/Container";

export default function PresellService() {
  return (
    <div>
      <section className="py-24 bg-white">
        <Container>
          <div className="space-y-24">
            {/* Title */}
            <h2 className="text-5xl font-semibold text-center font-cormorant">
              Pre-Sale Improvement Service
            </h2>

            {/* Block 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-[500px] w-full h-[300px] overflow-hidden rounded-xl">
                <Image
                  src={sellImg}
                  alt="Deep Cleaning"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#B7A47C]">
                  Deep Cleaning & Decluttering
                </h3>
                <p className="text-[#404A60] leading-relaxed">
                  Deep cleaning and decluttering a home before listing it for
                  sale is essential to maximize its appeal to potential buyers.
                  A clean and clutter-free environment creates a positive first
                  impression, allowing buyers to envision themselves living in
                  the space.
                </p>
                <p className="text-[#404A60] leading-relaxed">
                  By presenting a well-maintained and organized home, sellers
                  can increase their chances of attracting offers and achieving
                  a quicker sale at a desirable price.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h3 className="text-2xl font-semibold text-[#B7A47C]">
                  Landscaping & Curb Appeal
                </h3>
                <p className="text-[#404A60] leading-relaxed">
                  Landscaping a home before listing it for sale is vital as it
                  enhances curb appeal. Well-maintained gardens, manicured
                  lawns, and thoughtfully placed plants can significantly
                  increase the attractiveness of a property.
                </p>
                <p className="text-[#404A60] leading-relaxed">
                  Investing in landscaping not only improves the overall
                  aesthetic of the home but also boosts its perceived value,
                  potentially leading to a faster sale and higher offers.
                </p>
              </div>

              <div className="max-w-[500px] w-full h-[300px] overflow-hidden rounded-xl order-2">
                <Image
                  src={sellImg}
                  alt="Deep Cleaning"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Block 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-[500px] w-full h-[300px] overflow-hidden rounded-xl">
                <Image
                  src={sellImg}
                  alt="Deep Cleaning"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#B7A47C]">
                  Deep Cleaning & Decluttering
                </h3>
                <p className="text-[#404A60] leading-relaxed">
                  Deep cleaning and decluttering a home before listing it for
                  sale is essential to maximize its appeal to potential buyers.
                  A clean and clutter-free environment creates a positive first
                  impression, allowing buyers to envision themselves living in
                  the space.
                </p>
                <p className="text-[#404A60] leading-relaxed">
                  By presenting a well-maintained and organized home, sellers
                  can increase their chances of attracting offers and achieving
                  a quicker sale at a desirable price.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h3 className="text-2xl font-semibold text-[#B7A47C]">
                  Landscaping & Curb Appeal
                </h3>
                <p className="text-[#404A60] leading-relaxed">
                  Landscaping a home before listing it for sale is vital as it
                  enhances curb appeal. Well-maintained gardens, manicured
                  lawns, and thoughtfully placed plants can significantly
                  increase the attractiveness of a property.
                </p>
                <p className="text-[#404A60] leading-relaxed">
                  Investing in landscaping not only improves the overall
                  aesthetic of the home but also boosts its perceived value,
                  potentially leading to a faster sale and higher offers.
                </p>
              </div>

              <div className="max-w-[500px] w-full h-[300px] overflow-hidden rounded-xl order-2">
                <Image
                  src={sellImg}
                  alt="Deep Cleaning"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
