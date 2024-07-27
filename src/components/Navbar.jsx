import { useState } from "react";
import Button from "./Button.jsx";
import image from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <nav className="pt-5 lg:pt-10 w-5/6 flex justify-between items-center gap-4">
          {/* setting log  */}
          <div
            style={{
              height: "56px",
              width: "164px",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${image})`,
            }}
          ></div>

          {/* butttons show only on bigscreen */}
          <div className={`hidden lg:flex gap-4`}>
            <Link setOpen={setOpen} to="/ourservices" label="Our Services" />
            <Link setOpen={setOpen} to="/blog" label="Blogs" />
            <Link setOpen={setOpen} to="/contact" label="Contact Us" />
            <Link setOpen={setOpen} to="/" label="About Us" />
          </div>

          {/* buttons for mid and low screen */}
          <div className={`lg:hidden flex gap-4`}>
            <Link
              className={`hidden sm:inline-block bg-purple-900 text-white rounded-lg`}
              setOpen={setOpen}
              to="/contact"
              label="Contact Us"
            />
            <Button onClick={() => setOpen(!open)} label="☰" />
          </div>
        </nav>
      </div>

      {/* right nav bar */}
      <div
        className={`${open ? "block" : "hidden"} w-[250px] p-4 absolute bg-gray-100 h-full top-0 right-0 z-10`}
      >
        <div className={`flex flex-col gap-4`}>
          <div
            className={`self-center my-5`}
            style={{
              height: "56px",
              width: "164px",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${image})`,
            }}
          />

          <Link setOpen={setOpen} to="/ourservices" label="Our Services" />
          <Link setOpen={setOpen} to="/blog" label="Blogs" />
          <Link setOpen={setOpen} to="/contact" label="Contact Us" />
          <Link setOpen={setOpen} to="/about" label="About Us" />

          <Button
            onClick={() => setOpen(!open)}
            label="✖"
            className={"right-8 absolute bottom-8 text-[40px] text-gray-400"}
          />
        </div>
      </div>
    </>
  );
}

function Link({ to, label, setOpen, className }) {
  return (
    <>
      <NavLink
        to={to}
        onClick={() => {
          setOpen(!open);
        }}
        className={({ isActive }) =>
          `${isActive ? "bg-purple-800 text-white rounded-lg" : ""} ${className}`
        }
      >
        <Button label={label} />
      </NavLink>
    </>
  );
}
