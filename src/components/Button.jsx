
export default function Button({label, rounded, bg, className ,onClick}){
  return (<>
    <button onClick={onClick}
      className={`bg-${bg}-900 text-${bg ? "white" : "black"} px-4 py-3 ${rounded ? "rounded-full px-8" :"rounded-lg"} hover:cursor-pointer duration-300 ${className} hover:bg-purple-900 hover:text-white`}
    >{label}</button>
  </>)
}
