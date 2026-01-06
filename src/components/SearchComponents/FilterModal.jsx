"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { RiEqualizerLine } from "react-icons/ri";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { useState } from "react";

export default function FilterModal() {
  const MIN_PRICE = 0;
  const MAX_PRICE = 1000;
  const [range, setRange] = useState([100, 700]);

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="h-14 bg-secondary text-white hover:bg-secondary/90 rounded-none px-10!">
            <RiEqualizerLine /> All Filters
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white max-w-175! w-full h-[90vh] overflow-auto p-0 pt-6 [&>button>svg]:hidden">
          <DialogHeader className="px-6">
            <DialogTitle className="flex items-center justify-between mb-4">
              <h5>Filters</h5>
              <p className="text-lg font-normal text-[#343E56]">Reset</p>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 px-6">
            <div className="space-y-3">
              <h4 className="text-base font-normal">Price Range</h4>

              {/* INPUTS */}
              <div className="grid grid-cols-2 gap-3.5">
                <Input
                  type="number"
                  value={range[0]}
                  min={MIN_PRICE}
                  max={range[1]}
                  placeholder="Min"
                  className="bg-[#F3F3F5]"
                  onChange={(e) => setRange([Number(e.target.value), range[1]])}
                />

                <Input
                  type="number"
                  value={range[1]}
                  min={range[0]}
                  max={MAX_PRICE}
                  placeholder="Max"
                  className="bg-[#F3F3F5]"
                  onChange={(e) => setRange([range[0], Number(e.target.value)])}
                />
              </div>

              {/* SLIDER */}
              <Slider
                value={range}
                min={MIN_PRICE}
                max={MAX_PRICE}
                step={10}
                onValueChange={(value) => setRange(value)}
              />
            </div>
            <div className="py-6 border-y grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-base font-normal">Bedrooms</h4>
                <div className="grid grid-cols-6">
                  {[...Array(6)].map((_, index) => (
                    <Button className="bg-transparent text-primary border size-12 hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white">
                      Any
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-base font-normal">Bathrooms</h4>
                <div className="grid grid-cols-6">
                  {[...Array(6)].map((_, index) => (
                    <Button className="bg-transparent text-primary border size-12 hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white">
                      Any
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            {/* Home Type */}
            <div className="space-y-3 pb-6 border-b">
              <h4 className="text-base font-normal">Home Type</h4>
              <div className="flex items-center justify-between">
                {[...Array(6)].map((_, index) => (
                  <label className="flex items-center gap-1.5 text-base font-normal">
                    <input type="checkbox" className="size-4" />
                    <p>House</p>
                  </label>
                ))}
              </div>
            </div>
            {/* Square Feet */}
            <div className="space-y-3">
              <h4 className="text-base font-normal">Square Feet</h4>

              <div className="grid grid-cols-2 gap-3.5">
                <Input placeholder="Min sqft" className="bg-[#F3F3F5]" />
                <Input placeholder="Max sqft" className="bg-[#F3F3F5]" />
              </div>
            </div>
            {/* Year Built */}
            <div className="space-y-3">
              <h4 className="text-base font-normal">Year Built</h4>

              <div className="grid grid-cols-2 gap-3.5">
                <Input placeholder="Min Year" className="bg-[#F3F3F5]" />
                <Input placeholder="Max Year" className="bg-[#F3F3F5]" />
              </div>
            </div>
            {/* Lot Size */}
            <div className="space-y-3">
              <h4 className="text-base font-normal">Lot Size</h4>
              <Input placeholder="Size" className="bg-[#F3F3F5]" />
            </div>
            {/* Property Features */}
            <div className="space-y-3 ">
              <h4 className="text-base font-normal">Property Features</h4>
              <div className="flex items-center justify-between">
                {[...Array(6)].map((_, index) => (
                  <label className="flex items-center gap-1.5 text-base font-normal capitalize">
                    <input type="checkbox" className="size-4" />
                    <p>pool</p>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 left-0 bg-white px-6 py-6">
            <Button className="bg-secondary text-white w-full hover:bg-secondary/90 h-11">
              Search
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
