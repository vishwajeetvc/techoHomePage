import boy from "../assets/boy.png";
import girl from "../assets/girl.png";
import review from "../assets/review.png";

function Comment({ img, para, name }) {
  return (
    <>
      <div className=" p-4 sm:w-[600px]">
        <div className="sm:flex sm:items-center">

          <div className="sm:pr-5 ">
            <img src={`${img}`} className="w-full sm:w-[500px]" />
          </div>

          <div>
            <div className="flex sm:justify-start w-[80px] sm:w-[150px] py-4 lg:py-0 lg:pb-4 sm:px-0">
              <img src={`${review}`} />
            </div>
            <div>
              <p className="text-sm text-gray-600 sm:text-sm py-4">{para}</p>
            </div>
            <p className=" font-bold  pt-3 sm:pt-7">{name}</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default function Comments() {
  return (
    <>
      <div className="flex justify-center py-[100px]">
        <div className={`w-4/6 `}>

          <div text className="text-center">
            <h3 className=" text-indigo-600 py-4">
              3940+ Happy M24 Techspace Clients
            </h3>
            <h1 className=" font-bold text-[24px] md:text-[36px] lg:text-[40px]">
              Don’t just take our words
            </h1>
          </div>

          <div className="my-5 lg:mt-20 2xl:flex-row lg:gap-10 gap-5 flex flex-col items-center">
            <Comment
              img={`${girl}`}
              name={"- Vishwajeet"}
              para={`"We love M24 ! Our designers were using it for their projects, so we already knew what kind of design they want."`}
            />
            <Comment
              img={`${boy}`}
              name={"- Vishwajeet"}
              para={`"We love M24 ! Our designers were using it for their projects, so we already knew what kind of design they want."`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
