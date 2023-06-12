import Link from "next/link";

const Nav = () => {
  return (
    <Link href="/">
      <nav className="fixed top-0 left-0 right-0 w-full z-[9999] py-10">
        <div className="max-w-[1270px] mx-auto px-4 flex items-center justify-between">
          <div className="cursor-pointer">
            <h4 className="text-[2.5rem] font-bold">
              Movie<span className="text-green-500">Flix.</span>
            </h4>
          </div>
          <div>
            <ul>
              <li>
                <span className="font-bold cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Link>
  );
};

Nav.displayName = "Nav";

export default Nav;
