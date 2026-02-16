import Container from "@/common/Container";

export default function SellerHeader() {
  return (
    <div className="bg-[#F8F7F4] py-8 md:py-12">
      <Container>
        <div className="text-center space-y-2 md:space-y-4 px-4">
          <h4 className="text-3xl md:text-5xl font-semibold font-cormorant leading-tight">
            Start Your Home Selling Journey
          </h4>
          <p className="text-xl md:text-3xl font-medium font-cormorant">
            Review the information below
          </p>
        </div>
      </Container>
    </div>
  );
}
