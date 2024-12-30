
"use client";


import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSearch } from "../context/searchContext";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/" },
  { name: "Users", href: "#" },
  { name: "Merchants", href: "#" },
  { name: "Transactions", href: "/sales" },
  { name: "Vouchers", href: "#" },
  { name: "Coins", href: "#" },
  { name: "Assets", href: "#" },
  { name: "Settings", href: "#" },
];

const Navbar = () => {
  const { setSearchTerm } = useSearch();
  const currentPath = usePathname();

  return (
    <nav className="bg-[#333333] text-white flex flex-col md:flex-row items-center justify-between px-10 py-3 shadow-md">
      {/* Navigation Items */}
      <div className="flex flex-wrap justify-center md:justify-start gap-10 items-center w-full md:w-auto">
        {navItems.map((item) => (
          <button
            key={item.name}
            className="px-2 py-1 text-base font-medium hover:opacity-100 text-white"
            style={{ borderRadius: 100 }}
          >
            <Link href={item.href}>{item.name}</Link>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-3 md:mt-0">
        {currentPath !== "/sales" && (
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 bg-white border border-[#dadada] rounded-xl text-black text-sm w-full md:w-auto bg-[url('/images/search.svg')] bg-no-repeat bg-[left_10px_bottom_8px] pl-10 focus:outline-0"
          />
        )}

        <img
          src="/images/avatar.svg"
          alt="avatar"
          className="w-12 h-12 rounded-full  flex items-center justify-center"
        />
      </div>
    </nav>
  );
};

export default Navbar;