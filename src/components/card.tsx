interface cardStyle {
  title: string;
  url: string;
  img: string;
}

const Card = ({ title, url, img }: cardStyle) => {
  return (
    <div className="container mx-auto justify-center items-center">
      <div className="flex flex-col px-4 py-12 w-1/3 mx-auto">
        <a className="flex flex-col flex-1 w-full rounded overflow-hidden shadow-lg" href="#">
          <div className="relative w-full h-64 overflow-hidden">
            <div className="bg-black w-full h-full opacity-80 absolute" />
            <img className="object-cover w-full h-full" style={{ objectPosition: "80% 50%" }} src={img} />
            <div className="flex justify-between items-center w-full absolute bottom-0 text-white p-4 font-bold border-b-8 border-yellow-400">
              <h2 className="">{title}</h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
