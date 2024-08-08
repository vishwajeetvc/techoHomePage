import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link } from "./Navbar";
import Button from "./Button";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center py-[100px] bg-gray-50">
        <div className="w-5/6 xl:flex xl:justify-around xl:flex-row items-center ">

          <div className="first lg:w-[400px] sm:w-[350px]">
            <div>
              <NavLink to="/">
                <img src={`${logo}`} />
              </NavLink>
            </div>
            <div>
              <p className="py-8 text-gray-500 text-[14px] sm:text-[18px] px-4">
                M24 tech space gives you the best things you need to create a
                truly professional website.
              </p>
            </div>
          </div>

          <div className="second flex lg:w-[400px] xl:justify-between text-[14px] sm:text-[18px]">
            <div className="left  flex flex-col gap-2 ">
              <h2 className="text-gray-600 p-4">Company</h2>
              <div>
                <Link to="/ourservices" label="Our Services" className={`w-full block text-left`} />
              </div>
              <div>
                <Link to="/blog" label="Blogs" className={`w-full block text-left`} />
              </div>
              <div>
                <Link to="/contact" label="Contact Us" className={`w-full block text-left`} />
              </div>
              <div>
                <Link to="/about" label="About Us" className={`w-full block text-left`} />
              </div>
            </div>
            <div className="right flex flex-col gap-2">
              <h2 className="text-gray-600 p-4">Help</h2>
              <div>
                <Button label="Customer Support" className={`w-full block text-left`} />
              </div>
              <div>
                <Button label="Delivery Details" className={`w-full block text-left`} />
              </div>
              <div>
                <Button label="Terms & Conditions" className={`w-full block text-left`} />
              </div>
              <div>
                <Button label="Privacy Policy" className={`w-full block text-left`} />
              </div>
            </div>
          </div>
          <div className="Third pt-4 sm:w-[350px] px-4">
            <h2 className="text-gray-600 py-4 px-1 text-[14px] md:text-[18px] ">NEWS LETTER</h2>
            <form className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="border p-3 rounded-lg text-[14px] md:text-[18px] "
              />
              <Button
                label="Subscribe Now"
                className={`px-8 bg-purple-800 text-[14px] md:text-[18px]  text-white`}
              />
            </form>

          </div>
        </div>
      </div>
    </>
  );
}
