"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Menu as MenuIcon, ChevronDown, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; 
import { Avatar, DialogTitle, Menu, MenuItem } from "@mui/material";

export default function HeroSection() {
  const [date, setDate] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
    { name: "Instagram", href: "https://instagram.com", icon: "/icons/image 25.svg" },
    { name: "Facebook", href: "https://facebook.com", icon: "/icons/image 26.svg" },
    { name: "X", href: "https://x.com", icon: "/icons/image 27.svg" },
    { name: "Pinterest", href: "https://pinterest.com", icon: "/icons/image 28.svg" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "/icons/image 29.svg" },
  ];

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bg-[#1B1B1B] text-white">
      <div className="bg-[#D32C89] text-sm px-4 py-2 flex justify-between items-center h-[43px]">
        <div className="space-x-4 hidden md:block">
          <Link href="/about" className="hover:underline nav-hover px-2 py-1 rounded">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline nav-hover px-2 py-1 rounded">
            Contact Us
          </Link>
          <Link href="/advert-rates" className="hover:underline nav-hover px-2 py-1 rounded">
            Advert Rates
          </Link>
          <Link href="/archive" className="hover:underline nav-hover px-2 py-1 rounded">
            Archive
          </Link>
          <Link href="/vip" className="hover:underline nav-hover px-2 py-1 rounded">
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
                className="hover:opacity-80 transition-opacity duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="hover:scale-110 transition-transform duration-200"
                  draggable="false"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6 hidden md:block">
        <div className="container mx-auto px-4 py-3">
          <Image
            src="/images/sample-ad.svg"
            alt="Ad banner"
            width={1000}
            height={80}
            className="mx-auto rounded-lg shadow-md"
            draggable="false"
          />
        </div>
      </div>

      <div className="shadow-md mt-10">
        <nav className="flex items-center justify-between px-4 py-3 text-sm font-semibold container mx-auto">
          {/* Mobile Layout */}
          <div className="flex items-center gap-4 md:hidden">
            <Drawer direction="left" open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <button className="text-white hover:text-[#D32C89] transition-colors duration-200">
                  <MenuIcon className="w-6 h-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent
                className="drawer-gradient text-white border border-gray-700 rounded-r-2xl w-80 h-full shadow-lg transition-all duration-500 ease-in-out"
              >
                <VisuallyHidden>
                  <DialogTitle>Navigation Menu</DialogTitle>
                </VisuallyHidden>
                <div className="mx-auto w-full p-8">
                  <div className="flex justify-between items-center mb-6">
                    <Image
                      src="/images/logo.svg"
                      alt="Logo"
                      width={80}
                      height={64}
                      className="hover:scale-105 transition-transform duration-200"
                      draggable="false"
                    />
                    <DrawerClose asChild>
                      <button className="text-white hover:text-[#D32C89] transition-colors duration-200">
                        <X className="w-6 h-6" />
                      </button>
                    </DrawerClose>
                  </div>
                  <div className="flex flex-col gap-4 text-sm font-semibold">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`hover:underline nav-hover px-2 py-1 rounded ${
                          pathname === item.href ? "border-b-2 border-red-600" : ""
                        }`}
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/photos"
                      className="hover:underline nav-hover px-2 py-1 rounded"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Photos
                    </Link>
                    <Link
                      href="/videos"
                      className="hover:underline nav-hover px-2 py-1 rounded"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Videos
                    </Link>
                    <Link
                      href="/audio"
                      className="hover:underline nav-hover px-2 py-1 rounded"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Audio
                    </Link>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
            {/* Search Icon */}
            <Link href="/search" className="hover:text-[#D32C89] transition-colors duration-200">
              <Search className="w-5 h-5" />
            </Link>
            {/* Logo */}
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={80}
              height={64}
              className="hover:scale-105 transition-transform duration-200"
              draggable="false"
            />
          </div>

          {/* Dropdown (Mobile) */}
          <div className="md:hidden relative">
            <button
              onClick={handleAvatarClick}
              className="flex items-center gap-1 text-black hover:text-[#FFFFFF] transition-colors duration-200"
            >
              <Avatar
                sx={{ width: 28, height: 28, bgcolor: "#FFFFFF", color:'black', boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                alt="User"
              />
              <ChevronDown className="w-4 h-4" />
            </button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: "#1B1B1B",
                  color: "white",
                  border: "1px solid #4B5563",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                },
              }}
            >
              <MenuItem
                onClick={handleMenuClose}
                sx={{ "&:hover": { backgroundColor: "#D32C89" } }}
              >
                <Link href="/login" className="text-sm">
                  Log in / Sign up
                </Link>
              </MenuItem>
            </Menu>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center gap-6">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={80}
              className="hover:scale-105 transition-transform duration-200"
              draggable="false"
            />
            <div className="flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`hover:underline nav-hover px-2 py-1 rounded ${
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
              className="hover:underline nav-hover px-2 py-1 rounded border-l-2 border-gray-300 pl-2"
            >
              Photos
            </Link>
            <Link
              href="/videos"
              className="hover:underline nav-hover px-2 py-1 rounded"
            >
              Videos
            </Link>
            <Link
              href="/audio"
              className="hover:underline nav-hover px-2 py-1 rounded"
            >
              Audio
            </Link>
            <Link
              href="/search"
              className="hover:underline nav-hover px-2 py-1 rounded"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              href="/login"
              className="text-sm hover:underline nav-hover px-2 py-1 rounded"
            >
              Log in / Sign up
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}