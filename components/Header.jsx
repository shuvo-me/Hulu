import headerIcons from "@/assets/json/headerIcons";
import HeaderIcons from "./HeaderIcons";


export default function Header() {
  return (
    <header className=" flex flex-col gap-2 h-auto sm:flex-row justify-between items-center m-5">
        <div className="header-left flex justify-evenly flex-grow max-w-2xl">
          {headerIcons.map((item) =>  <HeaderIcons key={Math.random()} title={item.title} Icon={item.icon}/>)}
        </div>
        <div>
           <h1 className=" text-[50px] font-bold text-gray-50 text-center m-0">hulu</h1>
        </div>
    </header>
  )
}

