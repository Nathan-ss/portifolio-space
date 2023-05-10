export const ButtonMenu = ({ text }: { text: string }) => {
  return (
    <a
      href="#_"
      className="relative px-5 py-3 overflow-hidden font-medium text-amber-500 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group hover:-translate-y-2 transition duration-300 ease-in-out active:-scale-50"
    >
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-purple-500 group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 bg-pink-500 group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-500 group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-purple-500  blur-md group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-0 group-hover:opacity-100"></span>
      <span className="relative justify-center text-center flex transition-colors duration-300 delay-200 group-hover:text-white ease">{text}</span>
    </a>
  );
};
