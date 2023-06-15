import { signOut } from "next-auth/react";
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";

interface ProfileDropDownProps {
  session: {
    expires: string;
    user: {
      name: string;
      image: string;
      email: string;
    };
  };
}

const ProfileDropDown: FC<ProfileDropDownProps> = ({ session }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuOpenBtnRef = useRef(null);

  useEffect(() => {
    const hideMenu = (e: Event) => {
      if (!menuOpenBtnRef?.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", hideMenu);

    return () => {
      document.removeEventListener("click", hideMenu);
    };
  }, []);
  return (
    <div className="flex items-center relative">
      <button
        className="relative h-[30px] w-[30px] rounded-full overflow-hidden"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        ref={menuOpenBtnRef}
      >
        <Image src={session?.user?.image} layout="fill" alt="profile-image" />
      </button>

      {showMenu ? (
        <div className="absolute top-[3.6rem] right-0 bg-[#0B0C0F] bg-opacity-70 p-[1rem] min-w-[20rem] rounded-md text-[1.6rem] z-[9999]">
          <ul className="">
            <li className="mb-5 text-center">
              <span>{session?.user?.name}</span>
            </li>
            <li className="">
              <button
                onClick={() => signOut()}
                className="flex items-center w-full gap-2 bg-green-500 text-white rounded-lg py-2 justify-center"
                type="button"
              >
                <span>Logout</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileDropDown;
