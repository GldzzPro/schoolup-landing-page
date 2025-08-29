import React, { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "./button";

interface HamburgerMenuProps {
  navigationItems: Array<{
    label: string;
    active: boolean;
  }>;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  navigationItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className=" fixed inset-0 z-50  p-12 bg-blue-100/40 rounded-[20px]  outline outline-1 outline-offset-[-1px] outline-white/90 backdrop-blur-xl inline-flex flex-col justify-between items-center">
          <div className="w-44 inline-flex justify-start items-center gap-2.5">
            <div className="w-8 h-10 relative">
              <div className="w-8 h-9 left-0 top-0 absolute opacity-40 bg-blue-500" />
              <div className="w-4 h-1 left-[8.06px] top-[36.30px] absolute bg-blue-500" />
              <div className="w-8 h-8 left-0 top-0 absolute bg-blue-500" />
            </div>
            <div className="text-center justify-start">
              <span className="text-zinc-800 text-xl font-normal font-['Krona_One'] leading-snug">
                School-
              </span>
              <span className="text-blue-500 text-xl font-normal font-['Krona_One'] leading-snug">
                UP
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div
              data-property-1="Selected"
              className="self-stretch p-2.5 bg-blue-500 rounded-[20px] inline-flex justify-center items-center gap-2.5"
            >
              <div className="text-center justify-start text-indigo-100 text-sm font-medium font-['Quicksand'] leading-tight">
                Acceuil
              </div>
            </div>
            <div
              data-property-1="Enabled"
              className="self-stretch opacity-70 inline-flex justify-center items-center gap-2.5"
            >
              <div className="text-center justify-start text-zinc-800 text-sm font-medium font-['Quicksand'] leading-tight">
                À Propos
              </div>
            </div>
            <div
              data-property-1="Enabled"
              className="self-stretch opacity-70 inline-flex justify-center items-center gap-2.5"
            >
              <div className="text-center justify-start text-zinc-800 text-sm font-medium font-['Quicksand'] leading-tight">
                Pourquoi nous ?
              </div>
            </div>
            <div
              data-property-1="Enabled"
              className="self-stretch opacity-70 inline-flex justify-center items-center gap-2.5"
            >
              <div className="text-center justify-start text-zinc-800 text-sm font-medium font-['Quicksand'] leading-tight">
                Fonctionnalités
              </div>
            </div>
            <div
              data-property-1="Enabled"
              className="self-stretch opacity-70 inline-flex justify-center items-center gap-2.5"
            >
              <div className="text-center justify-start text-zinc-800 text-sm font-medium font-['Quicksand'] leading-tight">
                Tarification
              </div>
            </div>
            <div
              data-property-1="Enabled"
              className="self-stretch opacity-70 inline-flex justify-center items-center gap-2.5"
            >
              <div className="text-center justify-start text-zinc-800 text-sm font-medium font-['Quicksand'] leading-tight">
                Contact
              </div>
            </div>
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
              className="self-stretch h-8 px-2.5 py-[5px] bg-blue-500 rounded-[20px] inline-flex justify-center items-center gap-2.5"
            >
              <div className="text-center justify-start text-indigo-100 text-sm font-medium font-['Quicksand'] leading-tight">
                Démo Gratuit
              </div>
              <div className="w-6 h-6 relative origin-top-left rotate-[-25deg]">
                <div className="w-2.5 h-3.5 left-[15.58px] top-[6.85px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-indigo-100" />
                <div className="w-4 h-2 left-[8.24px] top-[12.43px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-indigo-100" />
                <div className="w-8 h-8 left-[31.89px] top-[31.89px] absolute origin-top-left -rotate-180 opacity-0" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
