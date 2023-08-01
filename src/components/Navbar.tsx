import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center min-w-full px-4 sm:px-4 md:px-4 lg:px-40 xl:px-60 2xl:px-96 py-4 border border-gray-500 border-b-[0.5px] border-x-0 border-t-0">
      <div className="font-extrabold text-3xl">Home</div>
      <div>
        <Button>Hire Me</Button>
      </div>
    </div>
  );
}
