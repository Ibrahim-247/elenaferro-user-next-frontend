import Container from "@/common/Container";
import { Input } from "../ui/input";
import { MapPin, Search } from "lucide-react";
import FilterModal from "./FilterModal";

export default function SearchHeader() {
  return (
    <div className="">
      <Container>
        <h4 className="text-6xl font-semibold text-center font-cormorant">
          PROPERTY SEARCH
        </h4>
        <div className="flex items-center w-full gap-7 my-10">
          <div className="w-full relative">
            <MapPin className="absolute top-1/2 left-7 -translate-y-1/2" />
            <Input
              placeholder="Search by Address, City, or ZIP COde"
              className="rounded-none h-14 w-full pl-15 pr-15"
            />
            <Search className="absolute top-1/2 -translate-y-1/2 right-7" />
          </div>
          <FilterModal />
        </div>
      </Container>
    </div>
  );
}
