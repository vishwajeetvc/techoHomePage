
export default function Button({ label, rounded, className, onClick }) {
  return (<>
    <button onClick={onClick}
      className={`px-3 sm:px-4 py-2 sm:py-3 text-[14px] sm:text-[18px]
${rounded ? "rounded-full px-8" : "rounded-lg"}
hover:cursor-pointer duration-300 ${className}
hover:bg-purple-900 hover:text-white`}

    >{label}</button>
  </>)
}
