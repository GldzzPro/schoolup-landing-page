
import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";
import { useActiveSection } from "../../hooks/useActiveSection";
import { navigationItems, navigateToSection } from "../../config/navigation";

interface HamburgerMenuProps {}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();



  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    navigateToSection(navigate, sectionId);
  };

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-black" />
        ) : (
          <Menu className="h-6 w-6 text-black" />
        )}
      </Button>

      {isOpen && (
        <div className=" fixed inset-0 z-50  p-12 bg-[#DEEAFF66]   outline outline-1 outline-offset-[-1px] outline-white/90 backdrop-blur-xl inline-flex flex-col justify-between items-center">
          <div className="w-44 inline-flex justify-start items-center gap-2.5">
            <div className="w-8 h-10 relative">
              <img src="/Logo.svg" alt="logo" />
            </div>
            <div className="text-center justify-start text-nowrap">
              <span className="text-zinc-800 text-xl font-normal font-['Krona_One'] leading-snug">
                School-
              </span>
              <span className="text-blue-500 text-xl font-normal font-['Krona_One'] leading-snug">
                UP
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            {navigationItems.map((navItem, index) => {
              const isActive = activeSection === navItem.id;
              return (
                <div
                  onClick={() => handleNavClick(navItem.id)}
                  key={navItem.id}
                  className={`self-stretch p-2.5 ${isActive ? "bg-[#3879f0]" : "bg-transparent"} rounded-[20px] inline-flex justify-center items-center gap-2.5 cursor-pointer`}
                >
                  <div className={`text-center justify-start ${isActive ? "text-indigo-100" : "text-[#323232]"} text-sm font-medium font-['Quicksand'] leading-tight`}>
                    {navItem.label}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="self-stretch flex flex-col justify-center items-center gap-4">
            <div
              data-property-1="Default"
              className="self-stretch inline-flex justify-center items-center gap-[5px]"
            >
              <div data-property-1="linear" className="w-6 h-6 relative">
                <div className="w-2.5 h-0 left-[7.01px] top-[8.96px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-500" />
                <div className="w-0 h-[1.68px] left-[12px] top-[7.28px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-500" />
                <div className="w-2 h-2 left-[7px] top-[8.94px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-500" />
                <div className="w-1 h-[2.47px] left-[12.45px] top-[14.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-500" />
                <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-500" />
                <div className="w-6 h-6 left-[24px] top-[24px] absolute origin-top-left -rotate-180 opacity-0" />
              </div>
              <div className="text-center justify-start text-zinc-500 text-sm font-medium font-['Quicksand'] leading-tight">
                FR
              </div>
              <div className="w-5 h-5 relative">
                <div className="w-3.5 h-1.5 left-[3.57px] top-[7.83px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-500" />
                <div className="w-5 h-5 left-[21px] top-[21px] absolute origin-top-left -rotate-180 opacity-0 border border-zinc-500" />
              </div>
            </div>
            <div
              data-property-1="Selected"
              className="self-stretch h-8 px-2.5 py-[5px] bg-[#3879f0] rounded-[20px] inline-flex justify-center items-center gap-2.5"
            >
              <div className="text-center justify-start text-indigo-100 text-sm font-medium font-['Quicksand'] leading-tight">
                Démo Gratuit
              </div>
              <div className="w-6 h-6 relative origin-top-left rotate-[-25deg]">
                <img
                  className="relative w-[31.89px] h-[31.89px] mt-[3px] mb-[-3.95px]"
                  alt="Vuesax linear arrow"
                  src="/vuesax-linear-arrow-right.svg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
