import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { LoopingAnimation } from "./paralax/LoopingAnimation";
import Card from "./card";

export default function First() {
  return (
    <div className=" px-2 lg:px-20">
      <div className="w-full">
        <div className="text-gradient-animation">
          <h1>Welcome.</h1>
        </div>
        <div className="text-sm md:text-md lg:text-lg">
          <p>
            Olá! Sou um desenvolvedor Full Stack apaixonado pelo cosmos tecnológico, sempre em busca das estrelas da inovação. Explorei projetos e serviços como um destemido astronauta do design
            autônomo, estagiário em programação PHP e até mesmo adentrar nos Estúdios Flow, uma verdadeira galáxia de podcasts, conhecidos como os maiores e mais relevantes do Brasil.
          </p>
          <br />
          <p>
            Com habilidades na órbita da Adobe, posso dominar Photoshop, Illustrator, Adobe XD, After Effects e Premiere, trazendo vídeos e motion graphics de outro mundo. Além disso, sou um mestre em
            linguagens como JavaScript, TypeScript e C#, com conhecimentos em frameworks como Bootstrap 5, Angular, Next.js, Vue.js e MaterializeCSS. E não podemos esquecer minha jornada pelos bancos
            de dados, tanto relacionais quanto não relacionais.
          </p>{" "}
          <br />
          <p>
            Minha passagem pelos Estúdios Flow aprimorou minha compreensão em produção e edição de podcasts, além de me capacitar em gerenciamento de projetos e metodologias ágeis. Com minhas
            ferramentas estelares como GitHub e Bitbucket, sou capaz de colaborar em projetos intergalácticos.
          </p>{" "}
          <br />
          <p>
            Se você procura um desenvolvedor Full Stack criativo, apaixonado e dedicado, estou aqui para transformar suas ideias em constelações tecnológicas! Vamos trabalhar juntos para alcançar as
            estrelas! Conecte-se comigo pelo <a href="https://www.linkedin.com/in/nathan-soares-302065186/">LinkedIn</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Second() {
  return (
    <div className=" md:mt-36  bg-gradient-to-r  from-blue-600 ... p-10 lg:rounded-l-full flex md:flex-row flex-col">
      <img src={"./images/pl2.png"} style={{ height: "100%", objectFit: "cover" }} className="w-1/3 rounded-full animate-spin spin-slow " />
      <div className="w-full md:w-2/3 md:pl-10">
        <div className="text-gradient-animation">
          <h1 className="text:md lg:text-7xl">Projetos</h1>
        </div>
        <br />
        <Card title={"SITE DO KRITIKÊ PODCAST "} url={""} img={"./images/kritikescreen.png"} />
        <LoopingAnimation word={"| NATHAN SOARES SILVA | DESENVOLVEDOR | FRONT-END | BACK-END | C# | TYPESCRIPT | REACT | NEXTJS | SWAGGER | GIT | APIS | AZURE "} />
      </div>
    </div>
  );
}
export function Third() {
  return (
    <div className="  px-20">
      <div className="w-full">
        <div className="text-gradient-animation">
          <h1>Welcome.</h1>
        </div>
        <h4>
          I started my career studying Computer Engineering, independent design freelancers and a programming internship in Php, and soon I started working on some projects that I gained a lot of
          visibility, I always tried to improve myself, so I learned to edit videos, and create motions. After I joined the army reserve, with honors and discipline, I joined the biggest podcast
          producer in Brazil as a cutting editor, in the beginning I did everything, and it didn't take long for me to grow there inside.
          <br />
          <br />
          I never stopped my studies, so I went through positions such as head of cuts, media editor, design and programmer. <br />
          <br />
          I'm a person who loves challenges, so when a full stack vacancy appeared I accepted, where as a frontend programmer I had to learn to work with the backend, I learned a lot about project
          management, and I improved my English.
        </h4>
      </div>
    </div>
  );
}
