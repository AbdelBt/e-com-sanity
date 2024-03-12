"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
const links = [
  { name: "Accueil", href: "/" },
  { name: "Hommes", href: "/Hommes" },
  { name: "Femmes", href: "/Femmes" },
  { name: "Enfants", href: "/Enfants" },
];

export default function Navbar() {
  const pathname = usePathname();
  const {handleCartClick} = useShoppingCart()
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-full">
        <Link href="/">
          <h1 className="text-2xl md:text-5xl font-bold">
            <span className="text-primary">Next</span>Commerce
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={()=> handleCartClick()}
            className="flex flex-col gap-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Panier
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}