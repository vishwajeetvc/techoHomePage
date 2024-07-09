import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

function Service({ img, heading, children,className }) {
  return (
    <>
      <div className={`flex items-center flex-col sm:w-[470px] text-center bg-white p-[10px] sm:p-[50px] py-[40px]  w-[280px] ${className}`}>
        <div className="">
          <img src={`${img}`} />
        </div>
        <h2 className="text-[24px] p-8 font-bold text-gray-800">{heading}</h2>
        <p className="text-[16px] text-gray-600">{children}</p>
      </div>
    </>
  );
}

const Services = () => {
  return (
    <div className="w-full  flex justify-center py-[100px]">
      <div className="w-3/4 ">
        <div top className="text-center ">
          <h1 className="font-bold text-2xl md:text-[50px] mb-10 leading-tight">
            Our Services : Make every step user-centric
          </h1>
          <p className="text-gray-600 mb-20">
            Lorem ipsum dolor sit amet, consectetur adipis elit
          </p>
        </div>
        <div bottom>
          <div className="flex flex-wrap justify-center">
            <Service img={`${img1}`} heading={"web Development"} className={`border-r-gray-300  lg:border-r border-b-gray-300 border-b`}>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </Service>
            <Service img={`${img2}`} heading={"web Development"}className={`border-r-gray-300 lg:border-r border-b-gray-300 border-b`}>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </Service>
            <Service img={`${img5}`} heading={"web Development"} className={`border-b-gray-300 border-b`}>
              Lorem 2 ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </Service>
            <Service img={`${img3}`} heading={"web Development"} className={`border-r-gray-300 lg:border-r border-b lg:border-b-white `}>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </Service>
            <Service img={`${img4}`} heading={"web Development"} className={`border-r-gray-300 lg:border-r `}>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </Service>
            <Service img={`${img6}`} heading={"web Development"} className={`border-t md:border-t-white`}>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </Service>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
