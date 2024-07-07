import logo from "../assets/logo.png";
import Button from "./Button";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-5/6 py-[100px] lg:flex lg:gap-10 justify-center">
          <div first className="lg:w-[400px]">
            <div className="flex justify-center py-10 lg:justify-start ">
              <img src={`${logo}`} />
            </div>
            <div className="text-center lg:text-start">
              <p>
                M24 tech space gives you the best things you need to create a
                truly professional website.
              </p>
            </div>
          </div>

          <div second className="flex flex-col items-center lg:items-start py-4">
            <h3 className="text-gray-400 pl-4 mb-4">company</h3>
            <Button label="About US" />
            <Button label="Service" />
            <Button label="Contact" />
            <Button label="Blogs" />
          </div>
          <div second className="flex flex-col items-center lg:items-start py-4">
            <h3 className="text-gray-400 mb-4 pl-4">Helps</h3>
            <Button label="Customer Support" />
            <Button label="Delivery Details" />
            <Button label="Terms & Conditions" />
            <Button label="Privacy & Policy" />
          </div>
          <div second className="flex flex-col items-center py-4">
            <h3 className="text-gray-400 mb-4">News Letter</h3>
            <form className="flex md:inline-block justify-between px-2 py-2 my-2 rounded-xl md:my-4 w-full sm:w-auto border ">
              <input
                type="text"
                placeholder="Enter email address"
                className="px-4 outline-none"
              />
              <Button
                label={`Contact`}
                className={`hidden  sm:inline-block bg-purple-900 text-white`}
              />
              <Button
                label={`+`}
                className={`sm:hidden bg-purple-900 text-white`}
              ></Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
