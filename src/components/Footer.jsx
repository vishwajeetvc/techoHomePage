import logo from "../assets/logo.png";
import Button from "./Button";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center py-[100px]">
        <div className="w-5/6 xl:flex xl:justify-around xl:flex-row items-center ">
          <div className="first lg:w-[400px] sm:w-[350px]">
            <div>
              <img src={`${logo}`} />
            </div>
            <div>
              <p className="py-8 text-gray-500 px-4">
                M24 tech space gives you the best things you need to create a
                truly professional website.
              </p>
            </div>
          </div>

          <div className="second flex lg:w-[400px] xl:justify-between">
            <div className="left  ">
              <h2 className="text-gray-600 p-4">Company</h2>
              <div>
                <Button label="About Us" className={``} />
              </div>
              <div>
                <Button label="Contact" className={``} />
              </div>
              <div>
                <Button label="Services" className={``} />
              </div>
              <div>
                <Button label="Blogs" className={``} />
              </div>
            </div>
            <div className="right  ">
              <h2 className="text-gray-600 p-4">Help</h2>
              <div>
                <Button label="Customer Support" className={``} />
              </div>
              <div>
                <Button label="Delivery Details" className={``} />
              </div>
              <div>
                <Button label="Terms & Conditions" className={``} />
              </div>
              <div>
                <Button label="Privacy Policy" className={``} />
              </div>
            </div>
          </div>
          <div className="Third pt-4 sm:w-[350px] px-4">
            <h2 className="text-gray-600 py-4 px-1">NEWS LETTER</h2>
            <form className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="border p-3 rounded-lg"
              />
              <Button
                label="Subscribe Now"
                className={`px-8 bg-purple-800 text-white`}
              />
            </form>

          </div>
        </div>
      </div>
    </>
  );
}
