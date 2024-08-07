import Body from "../Body"
import Button from "../Button"
import Ready from "../Ready"
import about1 from "../../assets/about1.jpeg"

export default function About() {
	const sec = [
		{
			title: `Our Mission`,
			heading: `Meet intensively to discussabout the next project`,
			para: `Help facilitate personalized conversations for B2C brands. Building genuine connections by enabling personalized conversational commerce. Developing powerfull UI/ UX human interface`,
			img: 'img',
		},
		{
			title: `Our Mission`,
			heading: `Meet intensively to discussabout the next project`,
			para: `Help facilitate personalized conversations for B2C brands. Building genuine connections by enabling personalized conversational commerce. Developing powerfull UI/ UX human interface`,
			img: 'img',
		},
	]
	return (<>
		<Sections datas={sec} />
		<Ready />
	</>)
}
function Sections({ datas }) {
	return <div className="my-4">
		{
			datas.map((s, i) =>
				<Section key={i} title={s.title} para={s.para} heading={s.heading} />
			)
		}

	</div>
}
function Section({ title, heading, img, para }) {
	return <>
		<Body>
			<div className="text-[14px] sm:text-[18px]">
				<h3 className={`text-purple-900 font-bold py-2`} >{title}</h3>
				<h1 className={`font-bold text-[15px]`}>{heading}</h1>
				<p>{para}</p>
				<Button label={`Show Now`} className={'bg-purple-900 text-white'} />
			</div>
			<div className={`flex justify-center`}>
				<div className={`w-full h-[150px] overflow-hidden`}>
					<img src={about1} alt="img" />
				</div>
			</div>

		</Body>
	</>
}




