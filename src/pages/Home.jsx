import { useState } from "react";
import "./Home.css";
import { NavLink } from "react-router";

export function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="items-center flex flex-col gap-3">
        <img src="PortfolioImage.WebP" alt="" className="profile-image" />
        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl font-bold text-center">
            Hi, I'm Andrew De La Torre
          </h1>
          <h3 className="text-lg font-semibold text-center">
            Full-Stack Developer
          </h3>
          <p className="mx-5">
            Experience building front-end and back-end applications with an
            interest in creating clean and user-friendly interfaces.
          </p>
          <p className="text-center">HTML • CSS • JavaScript • Java</p>
          <p className="text-center">React • Spring Boot • TailwindCSS</p>
        </div>
      </div>
    </>
  );
}
