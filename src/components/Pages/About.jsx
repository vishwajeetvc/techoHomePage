import Body from "../Body"
import Button from "../Button"
import Ready from "../Ready"
import about1 from "../../assets/about1.jpeg"
import Heading from "../Heading"

export default function About() {
	const sec = [
		{
			title: `Our Mission`,
			heading: `Meet intensively to discussabout the next project`,
			para: `Help facilitate personalized conversations for B2C brands. Building genuine connections by enabling personalized conversational commerce. Developing powerfull UI/ UX human interface`,
			img: about1,
		},
		{
			title: `Our Mission`,
			heading: `Meet intensively to discussabout the next project`,
			para: `Help facilitate personalized conversations for B2C brands. Building genuine connections by enabling personalized conversational commerce. Developing powerfull UI/ UX human interface`,
			img: about1,
		},
	]
	return (<>

		<Heading label={`About Us`} />
		<Sections datas={sec} />
		<Ready />
	</>)
}
function Sections({ datas }) {
	return <div className="flex flex-col my-2 xl:px-20">
		{
			datas.map((s, i) =>
				<Section key={i} index={i} img={s.img} title={s.title} para={s.para} heading={s.heading} />
			)
		}
	</div>
}
function Section({ title, heading, img, para, index }) {
	return <>
		<Body>
			<div className={`flex flex-col-reverse  ${index % 2 == 0 ? "md:flex-row" : " md:flex-row-reverse"} sm:justify-between items-center`}>
				<div className={`text-[14px] sm:text-[20px] ${index % 2 != 0 ? "md:w-[48%]  md:pl-[50px]" : "md:w-[45%]"}`}>
					<h3 className={`text-purple-900 sm:text-[28px] font-bold  my-2`} >{title}</h3>
					<h1 className={`font-bold text-[20px] my-3 md:text-[32px]`}>{heading}</h1>
					<p className={`my-2 text-gray-700 sm:my-5`}>{para}</p>
					<Button label={`Show Now`} className={'bg-purple-900 text-white'} />
				</div>
				<div className={`flex justify-center md:w-[50%]`}>
					<div className={`w-full h-[250px] my-4 sm:h-[450px]  overflow-hidden relative`}
						style={{
							borderTopLeftRadius: "14px",
							borderBottomRightRadius: "14px",
						}}
					>
						<img src={img} alt="img" className={`relative w-full top-[-100px]`} />
					</div>
				</div>
			</div>
		</Body>
	</>
}




