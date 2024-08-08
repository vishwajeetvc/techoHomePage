

import hand from "../assets/hand.png"
import eq from "../assets/eq.png"
import eq1 from "../assets/eq1.png"
import { Link } from "./Navbar"

export default function Ready() {
  return (<>
    <div
      style={{
        backgroundImage: `url(${eq1}),url(${eq})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center right, center right'
      }}
      className="flex justify-center py-[50px] bg-[#F1F5F9]">
      <div className="w-5/6 lg:flex justify-around">

        <h1 className="text-[30px] lg:text-[40px] font-bold flex flex-col lg:flex-row items-center text-center lg:w-[700px] lg:text-start">
          <img src={`${hand}`} className="inline-block w-[50px] lg:pr-[20px] lg:w-[100px]" />
          Ready to start building new website?
        </h1>

        <div className="flex justify-center py-[50px]">
          <Link to="/contact" label="Contact Us" className={`bg-purple-900 text-white rounded-lg`} />
        </div>

      </div>
    </div>
  </>)
}

