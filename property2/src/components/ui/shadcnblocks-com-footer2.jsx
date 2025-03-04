"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer2 = ({
  logo = {
    src: "/loader.png",
    alt: "Company Logo",
    title: "Company Name",
  },

  menuItems = [
    {
      title: "EXPLORE",
      links: [
        { text: "About", url: "/about" },
        { text: "Property", url: "/property" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "SERVICES",
      links: [
        { text: "News", url: "/news" },
        { text: "Shop", url: "/shop" },
        { text: "Privacy Policy", url: "/privacy-policy" },
        { text: "Careers", url: "/careers" },
      ],
    },
    {
      title: "CONTACT",
      links: [
        { text: "30 Road Brooklyn Street, NY, USA", url: "#" },
        { text: "needhelp@company.com", url: "mailto:needhelp@company.com" },
        { text: "+92 ( 8800 ) - 6780", url: "tel:+9288006780" },
      ],
    },
  ],

  copyright = "© 2025 Copyright. All rights reserved.",

  bottomLinks = [
    { icon: <FaInstagram size={20} />, url: "https://instagram.com" },
    { icon: <FaFacebookF size={20} />, url: "https://facebook.com" },
  ],
}) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <footer>
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo & Company Name */}
            <div className="flex flex-col items-center lg:items-start">
              <Link href="/">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="w-[80px] h-[80px] object-contain"
                />
              </Link>
              <p className="mt-3 text-lg font-semibold">{logo.title}</p>
            </div>

            {/* Menu Sections */}
            {menuItems.map((section, index) => (
              <div key={index}>
                <h3 className="mb-4 text-lg font-bold text-gray-800">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.url}
                        className="text-gray-600 hover:text-gray-900 transition duration-200"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <p className="text-center md:text-left">{copyright}</p>
            <ul className="flex gap-5 mt-4 md:mt-0">
              {bottomLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.url} className="hover:text-gray-900 transition duration-200">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
