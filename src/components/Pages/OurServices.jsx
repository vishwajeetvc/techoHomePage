import Heading from "../Heading";
import Body from "../Body";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/ser3.png";
import ser4 from "../../assets/ser4.png";
import Ready from "../Ready";

export default function OurServices() {
  return (
    <>
      <Heading label="Our Services" />
      <OsCardCont className={`p-2`}>
        {ser.map((item, index) => (
          <OsCard
            index={index}
            heading={item.heading}
            description={item.description}
            li={item.li}
            img={item.img}
            key={`${index}`}
          />
        ))}
      </OsCardCont>
      <Ready/>
    </>
  );
}

{
  /*OurServicesCard*/
}

function OsCard({ index, heading, description, li, img }) {
  return (
    <div
      className={`md:flex md:items-center md:gap-5 md:px-3 pb-[20px] md:pb-[100px] 2xl:px-[100px]  rounded-xl ${(index & 1) == 0 ? "flex-row-reverse" : ""}`}
    >
      <div className={`flex-1 flex ${(index & 1) == 0 ? "justify-end" : ""}`}>
        <img src={`${img}`} alt={"img"} className="w-[600px]"/>
      </div>
      <div className="flex-1">
        <h1 className="text-purple-700 py-4 font-bold md:text-[36px]">{heading}</h1>
        <p className="text-[16px] text-gray-700 md:text-[24px]">{description}</p>
        <ul className="text-[14px] py-4  text-purple-800 md:text-[18px]">
          {li.map((item, i) => (
            <li key={i}>{" ✔ " + item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

{
  /*OurServicesCard container*/
}
function OsCardCont({ children, className }) {
  return (
    <Body innerClassName={`${className} md:gap-[100px] flex-col `}>
      {children}
    </Body>
  );
}

const ser = [
  {
    img: ser1,
    heading: "UI UX Design",
    description:
      "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
    li: [
      "Market and competitive research",
      "Automation",
      "CRM & sales funner strategy",
      "UX consulting",
      "Brand positioning  messaging",
      "Marketing strategy",
    ],
  },
  {
    img: ser2,
    heading: "Digital Marketing services",
    description:
      "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
    li: [
      "Market and competitive research",
      "Automation",
      "CRM & sales funner strategy",
      "UX consulting",
      "Brand positioning  messaging",
      "Marketing strategy",
    ],
  },
  {
    img: ser3,
    heading: "Web & App Design services",
    description:
      "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
    li: [
      "Market and competitive research",
      "Automation",
      "CRM & sales funner strategy",
      "UX consulting",
      "Brand positioning  messaging",
      "Marketing strategy",
    ],
  },
  {
    img: ser4,
    heading: "UI UX Design",
    description:
      "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
    li: [
      "Market and competitive research",
      "Automation",
      "CRM & sales funner strategy",
      "UX consulting",
      "Brand positioning  messaging",
      "Marketing strategy",
    ],
  },
];
