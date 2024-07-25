import chat from "../assets/chat.png";
import puzzle from "../assets/puzzle.png";
import lock from "../assets/lock.png";
function Card({ img, heading, para }) {
  return (
    <div className="w-[250px] sm:w-[320px]">
      <div className={`p-4`}>
        <div className="my-8 flex md:block justify-center">
          <img src={`${img}`} className="w-[40px]"/>
        </div>
        <div>
          <h2 className="font-bold py-4 text-center md:text-left">{heading}</h2>
          <p className="text-sm text-gray-600 text-center md:text-left">{para}</p>
        </div>
      </div>
    </div>
  );
}

export default function FourthSection() {
  return (
    <div className={` flex justify-center py-[100px] `}>
      <div className={`w-4/5 flex justify-center items-center flex-col  lg:flex-row lg:justify-around`}>
        <Card
          img={`${chat}`}
          heading={`24/7 Customer Support`}
          para={`Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.`}
        />
        <Card
          img={`${lock}`}
          heading={`Solve Problems Real Times`}
          para={`Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.`}
        />
        <Card
          img={`${puzzle}`}
          heading={`Solve Problems Real Times`}
          para={`Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.`}
        />
      </div>
    </div>
  );
}
