import Container from "@/common/Container";
import SearchHeader from "./SearchHeader";
import PropertyCard from "@/common/PropertyCard";

export default function SearchResult() {
  return (
    <div className="py-20 mt-20">
      <SearchHeader />
      <div>
        <Container>
          <h4 className="text-3xl font-semibold">6 Properties Found</h4>
          <div className="grid grid-cols-3 gap-7 my-8">
            {[...Array(6)].map((_, index) => (
              <PropertyCard key={index} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
