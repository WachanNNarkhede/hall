"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../../../components/ui/resizable-navbar";
import { useState } from "react";

const colors = {
  darkNavy: "#0A1428",
  navy: "#1A2A44",
  gold: "#D4A017",
  lightGold: "#E6B422",
  cream: "#F8F4E8",
  champagne: "#F5E6C8",
};

export default function Navbarr() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);

const navItems = [
  { name: "Home", link: "/home" },
  { name: "About", link: "/about" },
  {
    name: "Services",
    link: "/",
    dropdown: [
      { name: "Birthday Party", link: "birthdayparty" },
      { name: "Marriage", link: "marriage" },
      { name: "Engagement", link: "engagement" },
      { name: "Anniversary", link: "anniversary" },
    ],
  },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact", link: "/contact" },
];
  return (
    <div className="relative w-full">
      <Navbar className="fixed top-0 left-0 right-0 z-50" style={{ background: colors.darkNavy }}>
        {/* Desktop Navigation */}
        <NavBody className="max-w-7xl mx-auto px-6">
          <NavbarLogo />
          <NavItems
            items={navItems}
            className="text-lg"
            style={{ color: colors.champagne }}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="primary"
              style={{ background: colors.gold, color: colors.darkNavy }}
            >
             <a href="https://wa.me/919762302055?text=I%20would%20like%20to%20book%20a%20marriage%20lawn
">Book a Call</a> 
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="max-w-7xl mx-auto px-6">
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: colors.gold }}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => {
              setIsMobileMenuOpen(false);
              setOpenDropdown(null);
              setOpenNestedDropdown(null);
            }}
            style={{ background: colors.navy }}
          >
            {navItems.map((item, idx) => (
              <div key={`mobile-link-${idx}`} className="w-full">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        setOpenDropdown(openDropdown === idx ? null : idx);
                        setOpenNestedDropdown(null);
                      }}
                      className="flex items-center justify-between w-full text-lg py-2"
                      style={{ color: colors.champagne }}
                    >
                      <span>{item.name}</span>
                      <span>{openDropdown === idx ? "▲" : "▼"}</span>
                    </button>
                    {openDropdown === idx && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem, dropdownIdx) => (
                          <li key={`mobile-dropdown-${dropdownIdx}`}>
                            {dropdownItem.nested ? (
                              <div>
                                <button
                                  onClick={() =>
                                    setOpenNestedDropdown(
                                      openNestedDropdown === dropdownIdx
                                        ? null
                                        : dropdownIdx
                                    )
                                  }
                                  className="flex items-center justify-between w-full text-sm py-2"
                                  style={{ color: colors.champagne }}
                                >
                                  <span>{dropdownItem.name}</span>
                                  <span>
                                    {openNestedDropdown === dropdownIdx ? "▲" : "▼"}
                                  </span>
                                </button>
                                {openNestedDropdown === dropdownIdx && (
                                  <ul className="pl-4 mt-2 space-y-2">
                                    {dropdownItem.nested.map(
                                      (nestedItem, nestedIdx) => (
                                        <li key={`mobile-nested-${nestedIdx}`}>
                                          <a
                                            href={nestedItem.link}
                                            onClick={() => {
                                              setIsMobileMenuOpen(false);
                                              setOpenDropdown(null);
                                              setOpenNestedDropdown(null);
                                            }}
                                            className="block text-sm py-2"
                                            style={{ color: colors.champagne }}
                                          >
                                            {nestedItem.name}
                                          </a>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </div>
                            ) : (
                              <a
                                href={dropdownItem.link}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenDropdown(null);
                                  setOpenNestedDropdown(null);
                                }}
                                className="block text-sm py-2"
                                style={{ color: colors.champagne }}
                              >
                                {dropdownItem.name}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setOpenDropdown(null);
                      setOpenNestedDropdown(null);
                    }}
                    className="block text-lg py-2"
                    style={{ color: colors.champagne }}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="mt-4">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setOpenDropdown(null);
                  setOpenNestedDropdown(null);
                }}
                variant="primary"
                className="w-full"
                style={{ background: colors.gold, color: colors.darkNavy }}
              >
                 <a href="https://wa.me/919762302055?text=I%20would%20like%20to%20book%20a%20marriage%20lawn
">Book a Call</a> 
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}