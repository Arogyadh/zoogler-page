import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Dark from "../icons/Dark";
import Light from "../icons/Light";

export default function Navbar() {
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={"/"}>
              <span className="mr-20 font-bold">Zoogler</span>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold hover:text-green-300 hidden md:flex ">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid grid-cols-3 w-[500px] gap-3 p-4 md:w-[750px] lg:w-[1000px] ">
                <li className="row-span-3">
                  <NavigationMenuLink href="/ACH">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Dark className="w-4 h-4" />
                        ACH
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/zoogler">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Light className="w-4 h-4" />
                        Zoogler
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/ads-manager">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Dark className="w-4 h-4" />
                        Ads Manager
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/analytics">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Light className="w-4 h-4" />
                        Analytics
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/cloud">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Dark className="w-4 h-4" />
                        Cloud
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold hover:text-green-300 hidden md:flex">
              Developers
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid grid-cols-3 w-[500px] gap-3 p-4 md:w-[750px] lg:w-[1000px]">
                <li className="row-span-3">
                  <NavigationMenuLink href="/developer-tools">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Dark className="w-4 h-4" />
                        Developer Tools
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/api-docs">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Light className="w-4 h-4" />
                        API Documentation
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/code-samples">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Dark className="w-4 h-4" />
                        Code Samples
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/developer-community">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Light className="w-4 h-4" />
                        Developer Community
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/developer-resources">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Dark className="w-4 h-4" />
                        Developer Resources
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold hover:text-green-300 hidden md:flex">
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid grid-cols-3 w-[500px] gap-3 p-4 md:w-[750px] lg:w-[1000px]">
                <li className="row-span-3">
                  <NavigationMenuLink href="/blog">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Light className="w-4 h-4" />
                        Blog
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/support">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Dark className="w-4 h-4" />
                        Support
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/community">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Light className="w-4 h-4" />
                        Community
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/learning">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Dark className="w-4 h-4" />
                        Learning
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/case-studies">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="flex items-center gap-2 font-bold">
                        <Light className="w-4 h-4" />
                        Case Studies
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/pricing"}>
              <span className="text-sm font-semibold hover:text-green-300 hidden md:flex">
                Pricing
              </span>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
