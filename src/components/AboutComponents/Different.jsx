import Container from "@/common/Container";

export default function Different({ data }) {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <div className="text-center mb-10 md:mb-20">
          <p className="text-lg md:text-xl font-semibold text-secondary tracking-widest">
            {data?.title || "WE ARE"}
          </p>
          <h4 className="text-4xl md:text-6xl font-semibold font-cormorant mt-3">
            {data?.sub_title || "DIFFERENT"}
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data?.different_items?.map((item, index) => (
            <div
              key={index}
              className="bg-[#EDEAE0] p-6 md:p-8 transition-transform hover:scale-[1.02] duration-300"
            >
              <h4 className="text-5xl md:text-6xl font-bold text-secondary mb-4 md:mb-6">
                0{index + 1}
              </h4>
              <h2 className="text-2xl md:text-3xl font-semibold font-cormorant leading-tight">
                {item?.sub_title}
              </h2>
              <p className="text-base md:text-lg font-normal text-[#404A60] mt-4 leading-relaxed line-clamp-10">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
