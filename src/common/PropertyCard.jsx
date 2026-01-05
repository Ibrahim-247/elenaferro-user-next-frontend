import Image from "next/image";
import house from "../assets/house.png";
import { Bath, BedDouble, Heart, SquareArrowOutUpRight } from "lucide-react";

export default function PropertyCard() {
  return (
    <div className="w-full rounded-xl overflow-hidden border">
      <div className="relative">
        <div className="w-full h-72 overflow-hidden">
          <Image
            src={house}
            alt="house"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-600 text-white font-normal text-xs py-1 px-2 rounded-full absolute top-4 left-4">
          House For Sale
        </div>
        <div className="bg-[#928B7C] text-white border-white border size-10 rounded-full absolute top-4 right-4 flex items-center justify-center">
          <Heart />
        </div>
      </div>

      <div className="p-5 space-y-3">
        <h4 className="text-xl font-semibold">$725,000</h4>
        <p className="text-base font-normal text-[#5B6477]">
          456 Buckhead Ave, Atlanta, GA 30305
        </p>
        <div className="flex items-center justify-between">
          <div className="text-base font-normal flex items-center gap-2">
            <BedDouble />
            <span>3 Beds</span>
          </div>
          <div className="text-base font-normal flex items-center gap-2">
            <Bath />
            <span>3 Bath</span>
          </div>
          <div className="text-base font-normal flex items-center gap-2">
            <SquareArrowOutUpRight />
            <span>1520 ft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
