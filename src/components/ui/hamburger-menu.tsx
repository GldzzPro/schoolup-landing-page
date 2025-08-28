import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";

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
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg border-t z-50">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex flex-col gap-0 p-4 w-full">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index} className="w-full">
                  <NavigationMenuLink
                    className={`w-full p-3 flex items-center justify-center rounded-lg ${
                      item.active ? "bg-blue text-white" : "text-black hover:bg-gray-100"
                    }`}
                  >
                    <div className="font-medium text-sm">
                      {item.label}
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </div>
  );
};