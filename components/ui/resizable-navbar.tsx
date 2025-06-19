"use client";
import { cn } from "../lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState, ReactNode, ComponentPropsWithoutRef } from "react";

// Define types for all components
interface NavbarProps {
  children: ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: ReactNode;
  className?: string;
  visible?: boolean;
}

interface DropdownItem {
  name: string;
  link: string;
  nested?: DropdownItem[];
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
    dropdown?: DropdownItem[];
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

interface NavbarButtonProps {
  href?: string;
  as?: React.ElementType;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
}

// DropdownMenu Component for Desktop
const DropdownMenu = ({
  items,
  className,
}: {
  items: DropdownItem[];
  className?: string;
}) => {
  const [nestedHovered, setNestedHovered] = useState<number | null>(null);

  return (
    <motion.ul
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "absolute left-0 top-full mt-2 w-56 rounded-lg bg-black/90 py-2 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05)] text-neutral-100",
        className
      )}
    >
      {items.map((item, idx) => (
        <li
          key={`dropdown-${idx}`}
          className="relative"
          onMouseEnter={() => item.nested && setNestedHovered(idx)}
          onMouseLeave={() => item.nested && setNestedHovered(null)}
        >
          <a
            href={item.link}
            className="block px-4 py-2 text-sm hover:bg-yellow-400/20"
          >
            {item.name}
          </a>
          {item.nested && nestedHovered === idx && (
            <motion.ul
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-full top-0 w-56 rounded-lg bg-black/90 py-2 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05)] text-neutral-100"
            >
              {item.nested.map((nestedItem, nestedIdx) => (
                <li key={`nested-${nestedIdx}`}>
                  <a
                    href={nestedItem.link}
                    className="block px-4 py-2 text-sm hover:bg-yellow-400/20"
                  >
                    {nestedItem.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </li>
      ))}
    </motion.ul>
  );
};

export const Navbar = ({
  children,
  className,
}: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<{ visible?: boolean }>(child)) {
          return React.cloneElement(child, { visible });
        }
        return child;
      })}
    </motion.div>
  );
};

export const NavBody = ({
  children,
  className,
  visible,
}: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        y: visible ? 10 : 0,
        backgroundColor: visible ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.4)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full px-4 py-2 lg:flex",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:space-x-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`link-${idx}`}
          className="relative"
          onMouseEnter={() => setHovered(idx)}
        >
          <a
            onClick={onItemClick}
            className={cn(
              "relative px-4 py-2 text-neutral-100",
              item.dropdown && "cursor-default"
            )}
            href={item.dropdown ? undefined : item.link}
          >
            {hovered === idx && !item.dropdown && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-yellow-400/20"
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
          {item.dropdown && hovered === idx && (
            <DropdownMenu items={item.dropdown} />
          )}
        </div>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({
  children,
  className,
  visible,
}: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        y: visible ? 10 : 0,
        backgroundColor: visible ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.4)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-2 lg:hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn("flex w-full flex-row items-center justify-between", className)}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn("w-full overflow-hidden bg-black/90", className)}
        >
          <div className="px-4 py-4 space-y-3">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: MobileNavToggleProps) => {
  return isOpen ? (
    <IconX className="w-6 h-6 text-neutral-100" onClick={onClick} />
  ) : (
    <IconMenu2 className="w-6 h-6 text-neutral-100" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a href="#" className="relative z-20 flex items-center space-x-2 px-2 py-1">
      <img src="/crown.svg" alt="logo" width={35} height={35} />
      <span className="text-2xl font-bold text-yellow-400">Luxe Banquet</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: NavbarButtonProps & ComponentPropsWithoutRef<"a">) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer transition duration-200 inline-block text-center";

  const variantStyles = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-500",
    secondary: "bg-transparent text-neutral-100 border border-yellow-400 hover:bg-yellow-400/10",
    dark: "bg-black text-white",
    gradient: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};