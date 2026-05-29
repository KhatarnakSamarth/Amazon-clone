import logo from "../assets/logo.png";
import locpinIcon from "../assets/loc-pin.png";
import searchIcon from "../assets/search.png";
import cartIcon from "../assets/cart.png";

const categories = [
  "All",
  "Alexa Skills",
  "Books",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Mobiles",
  "Sports",
  "Toys",
];

const secondaryNav = [
  "Fresh",
  "MiniTV",
  "Sell",
  "Best Sellers",
  "Today's Deals",
  "Mobiles",
  "Customer Service",
  "Electronics",
  "Fashion",
  "Prime",
  "New Releases",
  "Home & Kitchen",
];

export default function Navbar({ cartCount }) {

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Top Navbar */}
      <div className="bg-[#131921] text-white">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Top Row */}
          <div className="flex items-center justify-between px-3 py-2">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src={logo} alt="Amazon" className="h-8" />
              <span className="mb-1 text-xs">.in</span>
            </a>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Account */}
              <div className="cursor-pointer">
                <span className="block text-[11px] text-gray-300">
                  Hello, Sign in
                </span>
                <span className="text-sm font-bold">Account</span>
              </div>

              {/* Cart */}

              <div className="relative flex cursor-pointer items-center rounded border border-transparent px-2 py-1 hover:border-white">
                <div className="relative flex items-center">
                  <img src={cartIcon} alt="Cart" />

                  <span className={`absolute top-1 text-md font-bold text-[#FF9900] ${cartCount > 9 ? 'left-3.75' : 'left-4.75'
                    }`}>
                    {cartCount}
                  </span>
                </div>

                <span className="-mb-1 -ml-1 text-sm font-bold">
                  Cart
                </span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="px-3 pb-2">
            <div className="flex h-11 overflow-hidden rounded-lg">
              <input
                type="text"
                placeholder="Search Amazon.in"
                className="w-full bg-white px-3 text-sm text-black outline-none"
              />

              <button className="flex w-14 items-center justify-center bg-[#FF9900]">
                <img
                  src={searchIcon}
                  alt="Search"
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 bg-[#232f3e] px-3 py-2 sm:text-sm text-sx">
            <img src={locpinIcon} alt="Location" className="w-4" />
            <span>Delivering to Delhi 110001 - Update location</span>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex h-15 items-center gap-1 px-3">
            {/* Logo */}
            <a
              href="/"
              className="rounded border border-transparent px-2 py-1 hover:border-white"
            >
              <div className="flex items-center">
                <img src={logo} alt="Amazon" />
                <span className="mb-1.5 text-xs">.in</span>
              </div>
            </a>

            {/* Delivery */}
            <div className="flex cursor-pointer items-end gap-1 rounded border border-transparent px-2 py-1 hover:border-white">
              <img src={locpinIcon} alt="" className="-mr-1" />

              <div className="flex flex-col">
                <span className="text-[11px] text-gray-300">
                  Delivering to Delhi 110001
                </span>

                <span className="text-[13px] font-bold">
                  Update location
                </span>
              </div>
            </div>

            {/* Search */}
            <div className="relative mx-2 flex h-10 flex-1 overflow-hidden rounded-md">
              <select className="w-16 border-r border-gray-200 bg-gray-100 px-2 text-xs text-black outline-none">
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Search Amazon.in"
                className="w-full bg-white px-3 text-sm text-black outline-none"
              />

              <button className="flex w-14 items-center justify-center bg-[#FF9900] hover:bg-[#f3a847]">
                <img
                  src={searchIcon}
                  alt="Search"
                  className="h-5 w-5"
                />
              </button>
            </div>

            {/* Language */}
            <div className="flex cursor-pointer items-center gap-1 rounded border border-transparent px-2 py-1 hover:border-white">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India"
                className="h-4 w-5"
              />

              <span className="text-sm">EN</span>
              <span className="text-xs">▾</span>
            </div>

            {/* Account */}
            <div className="cursor-pointer rounded border border-transparent px-2 py-1 hover:border-white">
              <span className="block text-[11px] text-gray-300">
                Hello, Sign in
              </span>

              <span className="text-[13px] font-bold">
                Account & Lists ▾
              </span>
            </div>

            {/* Orders */}
            <div className="cursor-pointer rounded border border-transparent px-2 py-1 hover:border-white">
              <span className="block text-[11px] text-gray-300">
                Returns
              </span>

              <span className="text-[13px] font-bold">
                & Orders
              </span>
            </div>

            {/* Cart */}
            <div className="relative flex cursor-pointer items-center rounded border border-transparent px-2 py-1 hover:border-white">
              <div className="relative flex items-center">
                <img src={cartIcon} alt="Cart" />

                <span className={`absolute top-1 text-md font-bold text-[#FF9900] ${cartCount > 9 ? 'left-3.75' : 'left-4.75'
                  }`}>
                  {cartCount}
                </span>
              </div>

              <span className="-mb-1 -ml-1 text-sm font-bold">
                Cart
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navbar */}
      <nav className="bg-[#232f3e] overflow-x-auto scrollbar-hide hidden md:block ">
        <div className="flex min-w-max items-center">
          <button className="whitespace-nowrap border border-transparent px-3 py-2 text-sm font-bold text-white hover:border-white">
            All
          </button>

          {secondaryNav.map((item) => (
            <a
              key={item}
              href="#"
              className={`whitespace-nowrap border border-transparent px-3 py-2 text-sm text-white hover:border-white ${item === "Prime"
                ? "font-bold text-sky-400"
                : ""
                }`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header >
  );
}