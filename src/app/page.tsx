import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import TechCard from "@/components/TechCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { GrContact } from "react-icons/gr";

import {
  languages,
  libsFworks,
  hostingPlatform,
  softwares,
} from "@/data/techs";
import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoLinkedinSquare,
  BiMailSend,
} from "react-icons/bi";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaMailBulk,
  FaMailchimp,
} from "react-icons/fa";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar />
      {/* Contents */}
      <div className="max-w-full lg:min-w-full bg-base-img">
        <div className="flex flex-col items-center justify-center px-6 py-20 lg:px-80">
          <div className="bg-[url('/brush/white-brush.png')]">
            <h1 className="font-extrabold text-[4.2rem] lg:text-8xl sm:text-8xl font-gloria-haleluyah">
              Bintang <span className="text-[#068FFF]">Yosua</span>
            </h1>
          </div>
          <div className="flex flex-col max-w-3xl gap-5 py-10 text-xl text-center text-gray-400">
            <p className="leading-7 text-[#9b9b9b] sm:text-2xl">
              Hey, I&apos;m Bintang. I create machine learning models and
              visuallize it through website with appealing UI.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a href="https://linkedin.com/in/bintangyosua">
                <BiLogoLinkedinSquare size={34} />
              </a>
              <a href="https://instagram.com/itzbintangyosua">
                <FiInstagram size={30} />
              </a>
              <a href="https://github.com/bintangyosua">
                <FaGithubSquare fontSize={30} />
              </a>
              <a href="mailto:itzbintangyosua@gmail.com">
                <FiMail fontSize={30} />
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center space-y-5 lg:space-y-0 lg:space-x-5 lg:min-w-[100px] sm:min-w-full md:space-y-0 md:space-x-5 md:min-w-fit py-2 min-w-full">
            <Link href="#projects">
              <Button
                size={"lg"}
                className="min-w-full px-10 py-6 text-xl sm:min-w-full md:min-w-fit lg:min-w-fit">
                My Projects
              </Button>
            </Link>
            <a href="mailto:itzbintangyosua@gmail.com">
              <Button
                variant={"outline"}
                size={"lg"}
                className="min-w-full px-10 py-6 text-xl border-white hover:bg-white hover:text-black sm:min-w-full md:min-w-fit lg:min-w-fit">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 py-10 text-center">
        <h2 className="text-4xl text-center font-gloria-haleluyah">
          Gateway to Endless Innovation
        </h2>
        <div>
          <h3 className="text-2xl text-center text-gray-300">
            Known Languages
          </h3>
          <CardsContainer>
            <>
              {languages.map((item, i) => (
                <TechCard
                  key={i}
                  docsURL={item.docsURL}
                  imageURL={item.imageURL}
                  baseColor={item.baseColor}>
                  {item.name}
                </TechCard>
              ))}
            </>
          </CardsContainer>
        </div>
        <div>
          <h3 className="text-2xl text-center text-gray-300">
            Known Libraries/Frameworks
          </h3>
          <CardsContainer>
            <>
              {libsFworks.map((item, i) => (
                <TechCard
                  key={i}
                  docsURL={item.docsURL}
                  imageURL={item.imageURL}
                  baseColor={item.baseColor}>
                  {item.name}
                </TechCard>
              ))}
            </>
          </CardsContainer>
        </div>
        <div>
          <h3 className="text-2xl text-gray-300">Platforms</h3>
          <CardsContainer>
            <>
              {hostingPlatform.map((item, i) => (
                <TechCard
                  key={i}
                  docsURL={item.docsURL}
                  imageURL={item.imageURL}
                  baseColor={item.baseColor}>
                  {item.name}
                </TechCard>
              ))}
            </>
          </CardsContainer>
        </div>
        <div>
          <h3 className="text-2xl text-gray-300">Softwares Used</h3>
          <CardsContainer>
            <>
              {softwares.map((item, i) => (
                <TechCard
                  key={i}
                  docsURL={item.docsURL}
                  imageURL={item.imageURL}
                  baseColor={item.baseColor}>
                  {item.name}
                </TechCard>
              ))}
            </>
          </CardsContainer>
        </div>
      </div>
      <div className="min-w-full bg-noise-img">
        <div className="flex flex-col items-center justify-center w-full px-6 py-20">
          <h2
            className="pb-8 text-4xl text-center font-gloria-haleluyah"
            id="projects">
            Showcasing my creative journey
          </h2>
          {/* <h3 className="py-8 text-2xl text-gray-300" id="projects">
            Projects owned by me
          </h3> */}
          <div className="grid items-center justify-center grid-cols-1 gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {projects.map((item, i) => (
              <ProjectCard
                key={i}
                imageURL={item.imageURL}
                webURL={item.webURL}
                name={item.name}
                category={item.category}
                enable={item.enable}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function CardsContainer(props: { children: React.ReactElement }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 justify-center items-center gap-5 lg:gap-x-8 lg:gap-y-10 flex-wrap py-5 max-w-[600px] px-4 lg:max-w-[800px]">
      {props.children}
    </div>
  );
}
