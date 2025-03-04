"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Header1() {
    const navigationItems = [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Property", href: "/property" },
        { title: "Contact", href: "/contact" },
    ];

    const [isOpen, setOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <header className="w-full z-40 sticky top-0 left-0 bg-background shadow-md">
            <div className="container mx-auto min-h-20 flex flex-wrap gap-6 py-4 px-6 lg:grid lg:grid-cols-3 items-center">
                {/* Navigation Items */}
                <div className="justify-start items-center gap-6 lg:flex hidden">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-6">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink href={item.href} passHref>
                                        <Button variant="ghost" className="text-base px-4 py-2">{item.title}</Button>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Logo */}
                <div className="flex lg:justify-center w-full lg:w-auto">
                    <Image
                        src={"/loader.png"}
                        alt={"property"}
                        width={100}
                        height={500}
                        className="w-[60px] h-[60px] object-cover"
                    />
                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden items-center justify-end w-full">
                        <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>

                        {isClient && isOpen && (
                            <div className="absolute top-0 border-t flex flex-col w-full right-0 bg-background shadow-lg py-6 px-6 container gap-6">
                                {navigationItems.map((item) => (
                                    <div key={item.title} className="py-2">
                                        <Link
                                            href={item.href}
                                            className="flex justify-between items-center text-lg"
                                            onClick={() => setOpen(false)}
                                        >
                                            {item.title}
                                            <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side Icons */}
                <div className="flex justify-end items-center space-x-6 w-full lg:w-auto">
                    <Button variant="ghost" className="hidden md:flex p-2"><FaSearch size={18} /></Button>
                    <div className="border-r hidden md:block h-6"></div>
                    <Button variant="outline" className="hidden md:flex p-2"><FaShoppingCart size={18} /></Button>
                    <Button className="hidden md:flex px-6 py-2">Get started</Button>
                </div>
            </div>
        </header>
    );
}

export { Header1 };
