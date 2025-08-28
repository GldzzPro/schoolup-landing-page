import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { HamburgerMenu } from "../../../../components/ui/hamburger-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const GroupSubsection = (): JSX.Element => {
  const navigationItems = [
    { label: "Accueil", active: true },
    { label: "À Propos", active: false },
    { label: "Pourquoi nous ?", active: false },
    { label: "Fonctionnalités", active: false },
    { label: "Tarification", active: false },
    { label: "Contact", active: false },
  ];

  return (
    <div className="w-full h-auto md:h-[61px] relative flex items-center justify-between px-0 py-2.5">
      <div className="flex items-center gap-2.5">
        <div className="relative w-8 h-10">
          <div className="absolute w-8 h-[34px] top-0 left-0 bg-[url(/vector-1.svg)] bg-[100%_100%]">
            <img
              className="absolute w-8 h-8 top-0 left-0"
              alt="Vector"
              src="/vector-4.svg"
            />
          </div>

          <img
            className="absolute w-4 h-1 top-9 left-2"
            alt="Vector"
            src="/vector.svg"
          />
        </div>

        <div className="relative w-fit mr-[-1.15px] [font-family:'Krona_One',Helvetica] font-normal text-transparent text-xl text-center leading-5 whitespace-nowrap">
          <span className="text-[#323232] tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] leading-[var(--mysticgrove-whisperingxs-line-height)] font-mysticgrove-whisperingxs [font-style:var(--mysticgrove-whisperingxs-font-style)] font-[number:var(--mysticgrove-whisperingxs-font-weight)] text-[length:var(--mysticgrove-whisperingxs-font-size)]">
            School-
          </span>

          <span className="text-[#3879f0] tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] leading-[var(--mysticgrove-whisperingxs-line-height)] font-mysticgrove-whisperingxs [font-style:var(--mysticgrove-whisperingxs-font-style)] font-[number:var(--mysticgrove-whisperingxs-font-weight)] text-[length:var(--mysticgrove-whisperingxs-font-size)]">
            UP
          </span>
        </div>
      </div>

      <HamburgerMenu navigationItems={navigationItems} />

      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList className="gap-2 lg:gap-5 px-3 lg:px-5 py-2.5 bg-[#dee9ff66] rounded-[50px] shadow-drop-shadow-100 flex items-center justify-center">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className={`gap-1 lg:gap-2.5 p-1.5 lg:p-2.5 flex items-center justify-center rounded-[20px] ${
                  item.active ? "bg-blue" : "opacity-70"
                }`}
              >
                <div
                  className={`relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-xs lg:text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap ${
                    item.active ? "text-light-blue" : "text-black"
                  }`}
                >
                  {item.label}
                </div>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="inline-flex items-center gap-3 md:gap-[18px]">
        <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto] hidden md:flex">
          <img
            className="relative w-6 h-6"
            alt="Language circle"
            src="/language-circle.svg"
          />

          <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
            FR
          </div>

          <ChevronDownIcon className="relative w-[21px] h-[21px]" />
        </div>

        <Button className="inline-flex h-[34px] items-center justify-center gap-1.5 md:gap-2.5 px-2 md:px-2.5 py-[5px] bg-blue rounded-[20px] h-auto">
          <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-medium text-light-blue text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
            Démo Gratuit
          </div>

          <ArrowRightIcon className="relative w-6 h-6 md:w-[31.89px] md:h-[31.89px] md:mt-[-3.95px] md:mb-[-3.95px]" />
        </Button>
      </div>
    </div>
  );
};
