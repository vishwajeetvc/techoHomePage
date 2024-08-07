import Heading from "../Heading";
import Ready from "../Ready";
import Body from "../Body";
import Button from "../Button";

export default function Contact() {
  return (
    <>
      <Heading label="Contact Us" />
      <ContactInfo />
      <Ready />
    </>
  );
}

function Input({ label, type, placeholder, className }) {
  return (
    <>
      <div className={`pt-2 text-[14px] md:text-[18px] ${className}`}>
        <label>
          <span className="text-gray-500">{label}</span>
          <input
            type={`${type}`}
            placeholder={placeholder}
            autoFocus
            className="text-[16px] p-1 outline-none border-b-2 border-gray-400 w-full"
          />
        </label>
      </div>
    </>
  );
}
function ContactInfo() {
  return (
    <>
      <Body innerClassName={"w-[95%] my-5 flex justify-center"}>
        <div className="p-2 border-purple-200 bg-white rounded-xl  border md:flex md:w-[90%] 2xl:w-[70%] md:gap-5">
          {/*left*/}
          <div className="bg-purple-900 rounded-lg px-3 py-4 md:p-[50px] text-white overflow-hidden text-[14px] md:text-[20px] relative md:w-[45%]">
            <div>
              <h1 className="font-bold text-[32px] md:text-[30px]">Contact Information</h1>
              <p className="py-1 text-gray-200/90">Say something to start a live chat!</p>
            </div>
            <div className="md:mt-[50px] flex flex-col gap-5 md:gap-10">
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-phone"></i>
                <div>+918804715290</div>
              </div>
              <div className="flex gap-2 items-center ">
                <i className="fa-regular fa-envelope"></i>
                <div>vcnvim@gmail.com</div>
              </div>
              <div className="flex gap-2">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  60,Mariamman kovil street, Nallamapatti, Erode, Tamil Nadu,
                  India
                </div>
              </div>
              <div className="flex gap-3 p-4  md:pt-[100px]">
                <i className="fa-brands fa-facebook md:text-[30px]"></i>
                <i className="fa-brands fa-twitter md:text-[30px]"></i>
                <i className="fa-brands fa-instagram md:text-[30px]"></i>
              </div>
            </div>
            <div className=" bg-purple-400/50 absolute rounded-full bottom-[-15px] right-[-15px] w-[100px] h-[100px] md:w-[200px] md:h-[200px] md:bottom-[-40px] md:right-[-50px]"></div>
            <div className="bg-purple-400/50  rounded-full absolute right-[40px] bottom-[40px] w-[50px] h-[50px]  md:w-[100px] md:h-[100px] md:bottom-[70px] md:right-[70px]"></div>
          </div>
          {/*right*/}
          <div className=" px-2 mt-4 md:my-10 md:w-[55%]">
            <form>

              <div className="md:flex flex-col gap-5">
                <div className="md:flex gap-5 ">
                  <Input label="First Name" type="text" className={`md:w-[50%]`} />
                  <Input label="Last Name" type="text" className={`md:w-[50%]`} />
                </div>
                <div className="md:flex gap-5 ">
                  <Input label="Email" type="text" className={`md:w-[50%]`} />
                  <Input
                    label="Phone Number"
                    type="text"
                    className={`md:w-[50%]`}
                  />
                </div>

              </div>
              <div className="select py-4 text-[14px] text-purple-900">
                <h2 className="font-bold py-3">Select Subject?</h2>

                <div className="md:flex gap-4">
                  <label className="flex">
                    <input type="radio" />
                    <span className="inline-block pt-[4px] px-2">
                      General inquiry
                    </span>
                  </label>
                  <label className="flex">
                    <input type="radio" />
                    <span className="inline-block pt-[4px] px-2">
                      General inquiry
                    </span>
                  </label>
                  <label className="flex">
                    <input type="radio" />
                    <span className="inline-block pt-[4px] px-2">
                      General inquiry
                    </span>
                  </label>
                  <label className="flex">
                    <input type="radio" />
                    <span className="inline-block pt-[4px] px-2">
                      General inquiry
                    </span>
                  </label>
                </div>
              </div>
              <Input
                label="Message"
                type="text"
                placeholder={"Write your message"}
              />
              <div className="flex py-8 flex-row-reverse">
                <Button label="Send Message" className={'bg-purple-900 text-white'}/>
              </div>
            </form>
          </div>
        </div>
      </Body>
    </>
  );
}
