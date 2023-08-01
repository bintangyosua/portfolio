import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="flex justify-between items-center min-w-full px-4 sm:px-4 md:px-4 lg:px-40 xl:px-60 2xl:px-96 py-4 border border-gray-500 border-b-0 border-x-0 border-t-[0.5px]">
      <div className="flex flex-col text-sm text-gray-300">
        <span>minuettaro@gmail.com</span>
        <span>&copy;Minuettaro. Alright Reserved</span>
      </div>
      <div className="flex flex-col">
        <Button>Donate Me</Button>
      </div>
    </div>
  );
}
