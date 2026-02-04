import React from "react";
import { useEffect } from "react";
import { BsChatSquareHeart } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    localStorage.setItem("chit-chatTheme", event.target.value);
    document.documentElement.setAttribute("data-theme", event.target.value);
  };
  useEffect(() => {
    const currentTheme = localStorage.getItem("chatKaroTheme");
    document.documentElement.setAttribute("data-theme", currentTheme);
    setTheme(currentTheme);
  }, []);
  return (
    <>
      <div className="bg-primary flex justify-between px-5 py-2  z-99">
        <h1 className="text-xl font-bold">
          <div className="flex  gap-1">
            <span>Chit-Chat</span>
            <span  ><BsChatSquareHeart className="h-8" /></span>
          </div>
        </h1>
        <div className="flex gap-3 font-bold text-lg ms-40">
          <span>Home</span>
          <span>About</span>
        </div>

        <div className="flex gap-3">
          <button
            className="btn btn-secondary btn-gradient"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="btn btn-secondary btn-gradient"
            onClick={() => navigate("/register")}
          >
            Register
          </button>

          <select
            name="theme"
            id="theme"
            className="select"
            onChange={handleThemeChange}
            value={theme}
          >
            <option value="">Default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="claude">Claude</option>
            <option value="spotify">Spotify</option>
            <option value="vscode">VSCode</option>
            <option value="black">Black</option>
            <option value="corporate">Corporate</option>
            <option value="ghibli">Ghibli</option>
            <option value="gourmet">Gourmet</option>
            <option value="luxury">Luxury</option>
            <option value="mintlify">Mintlify</option>
            <option value="pastel">Pastel</option>
            <option value="perplexity">Perplexity</option>
            <option value="shadcn">Shadcn</option>
            <option value="slack">Slack</option>
            <option value="soft">Soft</option>
            <option value="valorant">Valorant</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default NavBar;
