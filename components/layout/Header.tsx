"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Beranda", href: "/" },
  { label: "Berita", href: "/blog" },
  { label: "Galeri", href: "/galeri" },
  {
    label: "PPDB",
    href: "/ppdb",
    dropdown: [
      { label: "Formulir Pendaftaran", href: "/ppdb" },
      { label: "Hasil Seleksi", href: "/ppdb/hasil" },
    ],
  },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [dropdownOpenMobile, setDropdownOpenMobile] = useState<string | null>(
    null
  );

  // Desktop hover handlers
  const handleDropdownEnter = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredDropdown(label);
  };

  const handleDropdownLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
    }, 200); // delay
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MTs Bustanul Huda Dawuhan
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`pb-1 hover:border-b-2 transition ${
                    pathname.startsWith(item.href)
                      ? "border-b-2 border-green-500"
                      : "hover:border-green-500"
                  }`}
                >
                  {item.label}
                </button>
                {hoveredDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded p-2 z-50 w-48">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-3 py-1 hover:bg-gray-100"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`pb-1 hover:border-b-2 transition ${
                  isActive(item.href)
                    ? "border-b-2 border-green-500"
                    : "hover:border-green-500"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity ${
          mobileMenuOpen ? "opacity-30" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setDropdownOpenMobile(
                      dropdownOpenMobile === item.label ? null : item.label
                    )
                  }
                  className="w-full text-left font-medium text-gray-700"
                >
                  {item.label}
                </button>
                {dropdownOpenMobile === item.label && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block text-sm text-gray-600 hover:text-black"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
