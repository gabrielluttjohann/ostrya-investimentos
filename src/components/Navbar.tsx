import { Briefcase } from "lucide-react";
import React from "react";
import logo from "../../public/logo/logo.png";
import { officeData } from "@/data/data";
import ContactButton from "./ContactButton";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed bg-gray-900 text-white py-4 px-6 w-full top-0 z-50 backdrop-blur-sm bg-opacity-90">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src={logo.src}
              alt="Logo"
              className="h-14 brightness-0 w-32 invert"
            />
          </div>

          <ContactButton
            icon={Briefcase}
            href={officeData.whatsappLink}
            label="Fale com um especialista"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
