import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { links } from "@/data/links";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((link) => {
          // const Icon = link.icon;
          return (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuLink asChild>
                  <Link href={link.path}>
                    {/* <Icon className="mr-2 h-4 w-4" /> */}
                    {link.name}
                  </Link>
              </NavigationMenuLink>

            </NavigationMenuItem>

          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
