"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Search } from "lucide-react"; 
import { usePathname } from "next/navigation";

export default function HeroSection() {
  const [date, setDate] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setDate(today);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Africa", href: "/africa" },
    { name: "Politics", href: "/politics" },
    { name: "Business", href: "/business" },
    { name: "Sport", href: "/sport" },
    { name: "Health", href: "/health" },
    { name: "Tech", href: "/tech" },
    { name: "Opinion", href: "/opinion" },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <Image
          src="/icons/image 25.svg"
          alt="Instagram"
          width={20}
          height={20}
          className=""
          draggable="false"
        />
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <Image
          src="/icons/image 26.svg"
          alt="Facebook"
          width={20}
          height={20}
          className=""
          draggable="false"
        />
      ),
    },
    {
      name: "X",
      href: "https://x.com",
      icon: (
        <Image
          src="/icons/image 27.svg"
          alt="X"
          width={20}
          height={20}
          className=""
          draggable="false"
        />
      ),
    },
    {
      name: "Pinterest", 
      href: "https://pinterest.com", 
      icon: (
        <Image
          src="/icons/image 28.svg" 
          alt="Pinterest"
          width={20}
          height={20}
          className=""
          draggable="false"
        />
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <Image
        src="/icons/image 29.svg" 
        alt="LinkedIn"
          width={20}
          height={20}
          className=""
          draggable="false"
        />
      ),
    },
  ];

  return (
    <div className="bg-[#1B1B1B]">
      <div className="bg-[#D32C89] text-white text-sm px-4 py-2 flex justify-between items-center h-[43px]">
        <div className="space-x-4 hidden md:block">
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link href="/advert-rates" className="hover:underline">
            Advert Rates
          </Link>
          <Link href="/archive" className="hover:underline">
            Archive
          </Link>
          <Link href="/vip" className="hover:underline">
            VIP
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div>{date}</div>
          <div className="flex gap-2">
            {socialMedia.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6">
        <div className="container mx-auto px-4 py-3">
          <Image
            src="/images/sample-ad.svg"
            alt="Ad banner"
            width={1000}
            height={80}
            className="mx-auto"
            draggable="false"
          />
        </div>
      </div>

      <div className="shadow-md mt-10 text-white tracking-wide ">
        <nav className="flex flex-wrap items-center justify-between px-4 py-3 text-sm font-semibold container mx-auto">
          <div className="flex items-center gap-6">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={80}
              className=""
              draggable="false"
            />
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`hover:underline ${
                    pathname === item.href ? "border-b-2 border-red-600" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/photos"
              className="hover:underline border-l-2 border-gray-300 pl-2"
            >
              Photos
            </Link>
            <Link href="/videos" className="hover:underline">
              Videos
            </Link>
            <Link href="/audio" className="hover:underline">
              Audio
            </Link>
            <Link href="/search" className="hover:underline">
              <Search className="w-5 h-5" />
            </Link>
            <Link href="/login" className="text-sm hover:underline">
              Log in / Sign up
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}