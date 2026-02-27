import Container from "@/common/Container";

export default function InsightsHeader() {
  return (
    <div className="mb-12 md:mb-30 text-center">
      <Container>
        <h1 className="text-4xl md:text-7xl font-semibold font-cormorant leading-tight">
          Local Market <span className="text-secondary">Insights</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mt-6 max-w-2xl mx-auto font-normal">
          Get the latest trends, average home prices, and sales data in your
          area.
        </p>
      </Container>
    </div>
  );
}
