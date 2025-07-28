import React, { useEffect, useRef, useState } from "react";
import { Avatar, Drawer } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import { LogOut } from "lucide-react";
import { AxiosInstance } from "../Routes/axiosInstance";

const Navbar = () => {
  let email = localStorage.getItem("email");
  let [user, setUser] = useState("");
  let getUser = async (email) => {
    let res = await AxiosInstance.get(`/users/email?email=${email}`);
    let data = await res.data;
    console.log(data);
    setUser(data);
  };
  useEffect(() => {
    if (email) {
      getUser(email);
    }
  }, [email]);
  useEffect(() => {
    if (user) {
      console.log("User ID has been updated:", user);
      // Now safely use userId for API calls, routing, etc.
    }
  }, [user]);
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  let onLogout = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/")
  };
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    name = name.trim();
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children:
        name.split(" ").length === 1
          ? `${name.split(" ")[0][0].toUpperCase()}${name
              .split(" ")[0][1]
              .toUpperCase()}`
          : `${name.split(" ")[0][0].toUpperCase()}${name
              .split(" ")[1][0]
              .toUpperCase()}`,
    };
  }
  return (
    <nav className="h-[90px] flex justify-between px-20 items-center shadow">
      <aside className="h-full flex items-center justify-center gap-5">
        {token && <NavDrawer />}

        <figure className="h-[80%] ">
          <Link to={"/"}>
            <img
              src="/assets/images (1).png"
              alt="image"
              className="h-full w-full"
            />
          </Link>
        </figure>
      </aside>
      <aside className="flex gap-5 justify-center items-center">
        <Link to={"/hireform"}>
          <h1 className="cursor-pointer hover:bg-orange-500 shadow rounded-3xl px-5 py-3 bg-orange-400 text-white font-semibold">
            Hire From Us
          </h1>
        </Link>
        <a
          className="cursor-pointer hover:bg-orange-500 shadow rounded-3xl px-5 py-3 bg-orange-400 text-white font-semibold"
          href="https://jspiders.com/placements"
          target="_blank"
        >
          Placement
        </a>
        {token && user ? (
          <>
            <div className="relative inline-block text-left" ref={menuRef}>
              <button
                onClick={toggleMenu}
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
              >
                <span className="font-semibold">{user.name}</span>
                <img
                  src={`https://ui-avatars.com/api/?name=${user.name}&background=fff&color=orange`}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border"
                />
              </button>

              {isOpen ? (
                <div className="absolute right-0 mt-2  p-5 bg-white border rounded-md shadow-lg z-10 flex flex-col justify-center items-center">
                  <Avatar {...stringAvatar(user.name)} />
                  <h1>{user.name}</h1>
                  <button
                    onClick={onLogout}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-orange-50 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <>
            <ul className="flex items-center gap-5">
              <Link to={"/signup"}>
                <div>
                  <button className="cursor-pointer hover:bg-orange-500 shadow rounded-3xl px-5 py-3 bg-orange-400 text-white">
                    <li>Sign up</li>
                  </button>
                </div>
              </Link>
              <Link to={"/login"}>
                <div>
                  <button className="cursor-pointer hover:bg-orange-500 shadow rounded-3xl px-5 py-3 bg-orange-400 text-white">
                    <li>Login</li>
                  </button>
                </div>
              </Link>
            </ul>
          </>
        )}
      </aside>
    </nav>
  );
};

export default Navbar;
