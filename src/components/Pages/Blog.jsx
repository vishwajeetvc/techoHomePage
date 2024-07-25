import Heading from "../Heading";
import Body from "../Body";
import Ready from "../Ready";
import smdevice from "../../assets/smdevice.jpeg";

export default function Blog() {
  return (
    <>
      <Heading label={`News & Blogs`} />
      <Subscribe />
      <NewsBox />
      <Ready />
    </>
  );
}

function NewsBox() {
  const news = [
    {
      img: smdevice,
      tag: "Technology",
      date: "Dec 06, 2024",
      heading:
        "Unleashing The Power Of AI: Transforming Business In The Digital Age",
      description:
        "In The Rapidly Evolving Landscape Of The Digital Age, Artificial Intelligence (AI) Is Not Just A Technological Marvel  It's A S...",
    },
    {
      img: smdevice,
      tag: "Technology",
      date: "Dec 06, 2024",
      heading:
        "Unleashing The Power Of AI: Transforming Business In The Digital Age",
      description:
        "In The Rapidly Evolving Landscape Of The Digital Age, Artificial Intelligence (AI) Is Not Just A Technological Marvel  It's A S...",
    },
    {
      img: smdevice,
      tag: "Technology",
      date: "Dec 06, 2024",
      heading:
        "Unleashing The Power Of AI: Transforming Business In The Digital Age",
      description:
        "In The Rapidly Evolving Landscape Of The Digital Age, Artificial Intelligence (AI) Is Not Just A Technological Marvel  It's A S...",
    },
    {
      img: smdevice,
      tag: "Technology",
      date: "Dec 06, 2024",
      heading:
        "Unleashing The Power Of AI: Transforming Business In The Digital Age",
      description:
        "In The Rapidly Evolving Landscape Of The Digital Age, Artificial Intelligence (AI) Is Not Just A Technological Marvel  It's A S...",
    },
    {
      img: smdevice,
      tag: "Technology",
      date: "Dec 06, 2024",
      heading:
        "Unleashing The Power Of AI: Transforming Business In The Digital Age",
      description:
        "In The Rapidly Evolving Landscape Of The Digital Age, Artificial Intelligence (AI) Is Not Just A Technological Marvel  It's A S...",
    },
    {
      img: smdevice,
      tag: "Technology",
      date: "Dec 06, 2024",
      heading:
        "Unleashing The Power Of AI: Transforming Business In The Digital Age",
      description:
        "In The Rapidly Evolving Landscape Of The Digital Age, Artificial Intelligence (AI) Is Not Just A Technological Marvel  It's A S...",
    },
    {
      img: smdevice,
      tag: "Technology",
      date: "Dec 06, 2024",
      heading:
        "Unleashing The Power Of AI: Transforming Business In The Digital Age",
      description:
        "In The Rapidly Evolving Landscape Of The Digital Age, Artificial Intelligence (AI) Is Not Just A Technological Marvel  It's A S...",
    },
    {
      img: smdevice,
      tag: "Technology",
      date: "Dec 06, 2024",
      heading:
        "Unleashing The Power Of AI: Transforming Business In The Digital Age",
      description:
        "In The Rapidly Evolving Landscape Of The Digital Age, Artificial Intelligence (AI) Is Not Just A Technological Marvel  It's A S...",
    },
  ];
  return (
    <>
      <Body innerClassName={`gap-[80px] flex-wrap justify-center flex  py-10 `}>
        {news.map((item,index) => (
          <NewsCard
            key={index}
            tag={item.tag}
            heading={item.heading}
            description={item.description}
            date={item.date}
            img={item.img}
          />
        ))}
      </Body>
    </>
  );
}

function NewsCard({ tag, heading, description, date, img }) {
  return (
    <>
      <div className="max-w-[320px] my-5 lg:my-0 lg:w-[300px] border border-gray-100 hover:shadow-xl hover:cursor-pointer hover:shadow-sky-800/15 rounded-xl">
        <div>
          <img
            src={`${img}`}
            className="rounded-tl-xl rounded-tr-xl w-full h-[190px]"
          />
        </div>

        <div className="p-3">
          <div className=" text-gray-600 py-3 flex text-[12px] items-center gap-2">
            <p className="text-purple-800 font-bold ">{tag.toUpperCase()}</p>
            <p className="">{date}</p>
          </div>
          <h1 className="font-bold leading-tight text-gray-600 text-[16px]">{heading}</h1>
          <p className="text-[12px] text-gray-600 mt-3">{description}</p>
          <div className="flex py-2 text-purple-700 font-bold text-[12px]">
            <span>View all </span>
            <span className="text-[10px] px-2 pb-2">❯</span>
          </div>
        </div>
      </div>
    </>
  );
}

function Subscribe() {
  return (
    <>
      <Body
        innerClassName={`py-2 lg:flex lg:flex-col lg:items-center lg:`}
        outerClassName={`bg-gray-100 `}
      >
        <div className="py-[30px] font-bold text-gray-600 lg:flex items-center flex-col gap-4">
          <h1 className="text-center text-[24px] lg:text-[40px]">
            Stay Informed with{" "}
            <span className="font-bold text-purple-700">Newest</span> Updates!
          </h1>
          <form className="my-3 font-thin relative lg:w-[600px]">
            <div className="">
              <input
                type="text"
                placeholder="Search"
                className="p-2 lg:p-3 rounded text-[14px] w-full border-none outline-none"
              />
              <button className="absolute top-[50%] translate-y-[-50%] right-2 rotate-[-45deg] w-[30px]">
                ⚲
              </button>
            </div>
          </form>
        </div>
      </Body>
    </>
  );
}
