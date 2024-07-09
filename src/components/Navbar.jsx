import {useState} from "react"
import Button from "./Button.jsx"
import image from "../assets/logo.png"

export default function Navbar(){

  const [open, setOpen] = useState(false);

  return <>
    <div className="flex justify-center">
      <nav className="pt-5 lg:pt-10 w-5/6 flex justify-between items-center gap-4" >

        {/* setting log  */}
        <div style={{
          height:"56px",
          width:"164px",
          backgroundRepeat:"no-repeat",
          backgroundImage : `url(${image})`
          }}>
        </div>

        {/* butttons show only on bigscreen */}
        <div className={`hidden lg:flex gap-4`}>
            <Button label={"About Us"} />
            <Button label={"Services"}/>
            <Button label={"Contacts"}/>
            <Button label={"Blogs"}/>
            <Button label={"Contact US"} className={`bg-purple-900 text-white`}/>
        </div>

        {/* buttons for mid and low screen */}
        <div className={`lg:hidden flex gap-4`}>
            <Button label={"Contact US"} className={`hidden sm:inline-block bg-purple-900 text-white`}/>
            <Button onClick={()=>{
                setOpen(!open);
            }} label="☰"/>
        </div>
      </nav>
    </div>

    {/* right nav bar */}
    <div className={`${open ? "block" :"hidden" } w-[250px] p-4 absolute bg-purple-100 h-full top-0 right-0 z-10`}>
      <div className={`flex flex-col gap-4`}>
        <div className={`self-center my-5`} 
          style={{
          height:"56px",
          width:"164px",
          backgroundRepeat:"no-repeat",
          backgroundImage : `url(${image})`
          }}>
        </div>
        <Button label={"About Us"}/>
        <Button label={"Services"}/>
        <Button label={"Contacts"}/>
        <Button label={"Blogs"}/>
        <Button label={"Contact US"} className={`bg-purple-900 text-white`}/>
        <Button onClick={()=>{
            setOpen(!open);
        }} label="x"/>
      </div>
    </div>
  </>
}
