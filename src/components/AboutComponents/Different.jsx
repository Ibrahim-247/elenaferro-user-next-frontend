import Container from "@/common/Container";

export default function Different() {
  return (
    <div className="py-20">
      <Container>
        <div className="text-center">
          <p className="text-xl font-semibold text-secondary tracking-widest">
            WE ARE
          </p>
          <h4 className="text-6xl font-semibold font-cormorant mt-3">
            DIFFERENT
          </h4>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-20">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-[#EDEAE0] p-8">
              <h4 className="text-6xl font-bold text-secondary mb-6">
                0{index + 1}
              </h4>
              <h2 className="text-3xl font-semibold font-cormorant">
                Unmatched Support Like No One
              </h2>
              <p className="text-lg font-normal text-[#404A60] mt-4">
                At Medlock Realty, we understand that buying or selling a home
                is a significant life event. That's why our dedicated team is
                committed to providing unparalleled support throughout the
                entire process. From your initial inquiry to the closing of your
                transaction, we're here to guide you, answer your questions, and
                alleviate any concerns you may have.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
