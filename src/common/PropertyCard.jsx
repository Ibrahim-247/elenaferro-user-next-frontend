import Image from "next/image";
import house from "../assets/house.png";
import { Bath, BedDouble, Heart, SquareArrowOutUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PropertyCard() {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full rounded-xl overflow-hidden border bg-white hover:shadow-2xl h-full flex flex-col"
    >
      <div className="relative">
        <div className="w-full h-72 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <Image
              src={house}
              alt="house"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="bg-green-600 text-white font-normal text-xs py-1 px-2 rounded-full absolute top-4 left-4">
          House For Sale
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#928B7C] text-white border-white border size-10 rounded-full absolute top-4 right-4 flex items-center justify-center cursor-pointer"
        >
          <Heart />
        </motion.div>
      </div>

      <div className="p-5 space-y-3 flex-grow">
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
    </motion.div>
  );
}
