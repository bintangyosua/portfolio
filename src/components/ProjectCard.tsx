import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

export default function ProjectCard(props: {
  imageURL: String;
  webURL: String;
  name: String;
  category: String;
  enable: boolean;
}) {
  return (
    <Card className="bg-black my-1  border-[#ffffff27] border-[2px] rounded-xl flex flex-[1_0_21%] flex-col justify-between items-center pt-4 mx-auto">
      <CardContent className="flex items-center justify-center">
        <div className={``}>
          <Image
            src={`${props.imageURL}`}
            alt=""
            height={197}
            width={389}
            className="w-[389px] h-[197px]"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between w-full px-7">
        <div className="flex-col">
          <span className="block text-sm text-gray-500">{props.category}</span>
          <span className="block text-gray-300">{props.name}</span>
        </div>
        <Link href={`${props.webURL}`}>
          <Button
            variant={"outline"}
            disabled={props.enable}
            size={"sm"}
            className="px-5 py-3 text-[0.75rem] text-black bg-custblue-500 hover:bg-custblue-600 hover:text-black sm:min-w-fit md:min-w-fit lg:min-w-fit">
            <div className="flex flex-row items-center justify-between">
              <AiOutlineLink className="mr-2" /> Link
            </div>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
