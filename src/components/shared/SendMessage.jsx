import Container from "@/common/Container";
import Img from "../../assets/send_message.png";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import ContactForm from "../ContactComponents/ContactForm";

export default function SendMessage() {
  return (
    <div className="py-12 lg:py-20 bg-[#F8F7F4]">
      <Container>
        <div>
          <div className="space-y-3 text-center">
            <p className="text-xl font-normal text-secondary">SEND A</p>
            <h4 className="text-4xl lg:text-6xl font-semibold font-cormorant">
              MESSAGE
            </h4>
          </div>

          <div className="my-7 relative">
            <div className="max-w-135 w-full h-64 lg:h-180 overflow-hidden">
              <Image
                src={Img}
                alt="Img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-207 w-full bg-white sm:absolute top-10 right-0 shadow-xl p-5 lg:p-12">
              <div>
                <h4 className="text-3xl font-bold text-secondary font-cormorant">
                  YOUR GEORGIA BROKERAGE
                </h4>
                <p className="text-lg font-normal">
                  Ready To Make A Move With Medlock?
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
