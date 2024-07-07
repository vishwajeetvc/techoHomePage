import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import Button from "./Button";

function Review({ img }) {
  return (
    <div className="">
      <img src={`${img}`} />
    </div>
  );
}

export default function ThirdSection({}) {
  return (
    <div className="flex justify-center bg-[#F8FAFC] py-[100px]">
      <div className="w-5/6">
        <div className="flex flex-col items-center gap-20 pb-[50px] md:flex-row md:justify-center">
          <Review img={`${image1}`} />
          <Review img={`${image2}`} />
          <Review img={`${image3}`} />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-xl font-bold md:text-[40px] w-4/5 md:px-[20px] md:leading-tight md:mt-[20px]">
            Start building high performing website & grow your business fast.
          </p>
          <Button
            rounded={true}
            label={"Contact Us"}
            className={"bg-purple-900 text-white font-bold mt-[30px]"}
          />
        </div>
      </div>
    </div>
  );
}
