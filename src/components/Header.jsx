import { Link, NavLink } from "react-router";

export function Header({ showSidebar, setShowSidebar }) {
  return (
    <div className="flex justify-between items-center bg-(--primary-color) text-(--light-color) h-12 fixed w-full md:h-16 md:px-20">
      <Link to={"/"}>
        <p className="text-xl font-bold md:text-2xl">MyPortfolio</p>
      </Link>
      <button className="hover:cursor-pointer" onClick={() => setShowSidebar(!showSidebar)}>
        <img
          src={showSidebar ? "/close.svg" : "/menu.svg"}
          className="w-10"
        />
      </button>
    </div>
  );
}
