import Button from "./Button";
import img from "../assets/img.png";
import line from "../assets/line.png"

function NumBox({ num, text, text2 }) {
  return (
    <div className={`flex items-center gap-3 text-gray-700`}>
      <div className="text-4xl font-bold">{num}</div>
      <div className="text-sm">
        <p>{text}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="flex justify-center md:py-[100px] ">
      <div className="w-5/6 md:w-3/4 lg:flex gap-9 items-center">
        <div left className="w-full">
          <h1 className="text-3xl font-bold py-4 md:text-[60px] md:leading-tight md:py-8">
            Empowering Businesses with Cutting-Edge IT Solution .
          </h1>
          <p className="text-sm py-3">
            Boost Efficiency, Security, and Innovation.
          </p>
          <form className="flex md:inline-block justify-between px-2 py-2 rounded-xl md:my-4  sm:w-auto border ">
            <input
              type="text"
              placeholder="Enter email address"
              className="px-4 outline-none lg:w-[300px]"
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
          <div className={`flex flex-col gap-5 py-5 md:flex-row sm:gap-8`}>
            <NumBox num="2389" text="Project" text2="Delevered" />
            <img src={`${line}`} className="hidden md:block"/>
            <NumBox num="50+" text="Successful" text2="Clients" />
          </div>
        </div>
        <div right className="w-[100%] lg:w-[60%] flex justify-center">
            <img src={`${img}`} alt="" />
        </div>
      </div>
    </div>
  );
}
