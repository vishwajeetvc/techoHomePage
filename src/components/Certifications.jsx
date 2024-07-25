import course from "../assets/course.png";
import arrow from "../assets/arrow.png";
import Button from "./Button";
function Card({ img, mainHeading, heading, para }) {
  return (
    <div className="bg-white p-5 rounded-xl w-[280px] sm:w-[300px] shrink-0">
      <div>
        <img src={`${img}`} alt="course" />
      </div>
      <div className="">
        <p className="text-sm py-[20px] ">
          {heading}
        </p>
        <div className="font-bold py-[10px] relative">{mainHeading}
          <div className="inline-block absolute right-1 top-[-20px] w-[20px]">
            <img src={`${arrow}`} />
          </div>
        </div>
        <p className="text-[12px] pb-[30px] text-gray-600">{para}</p>
        <Button
          label="Registration Closed"
          className={`bg-purple-900 text-white w-full`}
        />
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <div className="py-[100px] flex justify-center bg-[#F8FAFC] ">
      <div className="w-7/8 sm:w-5/6">
        <div className="text-center">
          <h3 className=" text-indigo-600 py-4">Certifications</h3>
          <h1 className=" font-bold text-[18px] md:text-[36px] lg:text-[40px]">
            Featured Innovation Challenges and Hackathons
          </h1>
        </div>
        <div className="py-[50px] flex  flex-col items-center  flex-nowrap gap-10 md:flex-row overflow-scroll overflow-y-hidden [&::-webkit-scrollbar]:hidden ">
          <Card
            img={`${course}`}
            heading={`Design`}
            mainHeading={`Human-AlzeHackathon - Fintech Edition`}
            para={`Registration Ends on: Tue Jun 18 2024`}
          />
          <Card
            img={`${course}`}
            heading={`Design`}
            mainHeading={`Human-AlzeHackathon - Fintech Edition`}
            para={`Registration Ends on: Tue Jun 18 2024`}
          />
          <Card
            img={`${course}`}
            heading={`Design`}
            mainHeading={`Human-AlzeHackathon - Fintech Edition`}
            para={`Registration Ends on: Tue Jun 18 2024`}
          />
          <Card
            img={`${course}`}
            heading={`Design`}
            mainHeading={`Human-AlzeHackathon - Fintech Edition`}
            para={`Registration Ends on: Tue Jun 18 2024`}
          />
          <Card
            img={`${course}`}
            heading={`Design`}
            mainHeading={`HumanAlzeHackathon - Fintech Edition`}
            para={`Registration Ends on: Tue Jun 18 2024`}
          />
          <Card
            img={`${course}`}
            heading={`Design`}
            mainHeading={`HumanAlzeHackathon - Fintech Edition`}
            para={`Registration Ends on: Tue Jun 18 2024`}
          />
        </div>
      </div>
    </div>
  );
}
