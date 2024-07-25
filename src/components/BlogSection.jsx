import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"

function Blog({img, content,tag}){
  return (<>
    <div className="w-[300px] p-4 lg:w-[400px]">
      <div>
        <img src={`${img}`} className="rounded-xl mb-5 lg:w-full"/>
      </div>
      <div>
        <p className="text-[18px] font-bold leading-tight py-4">{content}</p>
        <p className="text-indigo-800 text-[12px]">{tag}</p>
      </div>
    </div>
  </>)
}

export default function Blogs(){
  return (<>
    <div className="flex justify-center bg-[#F8FAFC] py-[100px]">
      <div className="w-5/6">

          <div className="text-center pb-10">
            <h3 className=" text-indigo-600 py-4">
              Learn new technology
            </h3>
            <h1 className=" font-bold text-[24px] md:text-[36px] lg:text-[40px]">
              Read our blogs
            </h1>
          </div>

        <div className="flex flex-col items-center lg:flex-row justify-center md:gap-20">
          <Blog  img={`${blog1}`}tag="System Design" content="Most popular design systems to learn from in 2022"/>
          <Blog  img={`${blog2}`}tag="Accessibility" content="Understanding accessibility makes you a better"/>
          <Blog  img={`${blog3}`}tag="Tech" content="15 best tools that will help you build your website"/>
        </div>

      </div>
    </div>
  </>)
}

