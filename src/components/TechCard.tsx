import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function TechCard(props: {
  children: String;
  imageURL: String;
  docsURL: String;
  baseColor: String;
}) {
  return (
    <Card
      className={`bg-black my-1  border-[#ffffff27] border-[2px] rounded-xl flex-[1_0_21%] flex-col justify-center items-center max-w-[120px] h-[140px]`}>
      <CardContent className="py-5 h-[100px] flex items-center justify-center">
        <Link href={`${props.docsURL}`} className="block h-fit w-fit ">
          <Image
            src={`${props.imageURL}`}
            alt={`${props.children}`}
            width={70}
            height={70}
          />
        </Link>
      </CardContent>
      <CardFooter className="border-gray-600 bg-[#ffffff27] py-2 min-w-full rounded-b-xl">
        <div className="w-full text-center">
          <p className="w-full text-sm text-center">{props.children}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
