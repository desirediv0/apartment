"use client";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { icons } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer2 = ({
  logo = {
    src: "/loader.png",
    alt: "blocks for shadcn/ui",
  },

  menuItems = [
    {
      title: "EXPLORE",
      links: [
        { text: "about", url: "#" },
        { text: "property", url: "#" },
        { text: "contact", url: "#" },
      ],
    },
    {
      title: "",
      links: [
        { text: "Newz", url: "#" },
        { text: "Shop", url: "#" },
        { text: "privacy policy", url: "#" },
        { text: "Careers", url: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "30 Road Broklyn Street, 600 New York, USA", url: "#" },
        { text: "needhelp@company.com", url: "#" },
        { text: "+92 ( 8800 ) - 6780", url: "#" },
      ],
    },
  ],

  copyright = "© 2025 Copyright. All rights reserved.",

  bottomLinks = [
    { icons: <FaInstagram />, url: "#" },
    { icons:<FaFacebookF />, url: "#" },
  ]
}) => {
  return (
    (<section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start lg:px-20">
                <Link href="/">
                  <Image src={logo.src} alt={logo.alt} width={100} height={100} title={logo.title} className="w-[100px] h-[100px]" />
                </Link>
                <p className="text-xl font-semibold">{logo.title}</p>
              </div>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-primary">
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <Link href={link.url}>{link.icons}{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>)
  );
};

export { Footer2 };
