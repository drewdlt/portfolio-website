import { Link, NavLink } from "react-router";

export function Header({ showSidebar, setShowSidebar }) {
  return (
    <div className="flex justify-between px-4 py-3 items-center fixed bg-white w-screen md:py-5 md:px-15">
      <Link to={"/"}>
        <p className="text-xl font-bold md:text-2xl">MyPortfolio</p>
      </Link>
      <button className="hover:cursor-pointer" onClick={() => setShowSidebar(!showSidebar)}>
        <img
          src={showSidebar ? "/close_light.svg" : "/menu_light.svg"}
          className="w-9"
        />
      </button>
    </div>
  );
}
