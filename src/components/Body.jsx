export default function Body({ children ,outerClassName, innerClassName}) {
  return (
      <div className={`flex justify-center md:py-[50px] ${outerClassName}`}>
        <div className={`w-5/6 lg:flex items-center ${innerClassName}`}>

          {children}

        </div>
      </div>
  );
}
