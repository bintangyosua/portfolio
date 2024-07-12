import Link from "next/link";
import { Button } from "./ui/button";
import { PiShareNetworkBold } from "react-icons/pi";
import { FiDownload } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center min-w-full px-4 sm:px-4 md:px-4 lg:px-40 xl:px-60 2xl:px-96 py-4 border border-gray-500 border-b-[0.5px] border-x-0 border-t-0">
      <div className="text-3xl font-extrabold">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="flex flex-row items-center gap-3">
        <a href="/Resume_Panky_Bintang_Pradana_Yosua.pdf">
          <Button>
            <FiDownload className="mr-2" />
            Resume
          </Button>
        </a>
        <a href="mailto:minuettaro@gmail.com">
          <Button>
            <PiShareNetworkBold className="mr-2" />
            Hire Me
          </Button>
        </a>
      </div>
    </div>
  );
}
