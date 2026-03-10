import { Link, NavLink } from "react-router";

export function Header({ showSidebar, setShowSidebar }) {
  return (
    <div className="flex justify-between px-4 py-3 items-center fixed bg-white w-screen">
      <Link to={"/"}>
        <p className="text-xl font-bold">MyPortfolio</p>
      </Link>
      <button onClick={() => setShowSidebar(!showSidebar)}>
        <img
          src={showSidebar ? "/close_light.svg" : "/menu_light.svg"}
          className="w-9"
        />
      </button>
    </div>
  );
}
