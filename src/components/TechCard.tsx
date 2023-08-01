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
      className={`bg-black my-1  border-[#ffffff27] border-[2px] rounded-xl flex-[1_0_21%] flex-col justify-center items-center max-w-[105px] max-h-[140px] md:max-w-[120px] md:max-h-[140px]`}>
      <CardContent className="p-2 h-[100px] ">
        <Link
          href={`${props.docsURL}`}
          className="flex items-center justify-center min-w-full min-h-full">
          <Image
            className="w-auto h-auto max-w-[80px] max-h-[80px]"
            src={`${props.imageURL}`}
            alt={`${props.children}`}
            width={80}
            height={80}
          />
        </Link>
      </CardContent>
      <CardFooter
        className={`border-[#ffffff27] bg-[#ffffff27] py-2 px-1 min-w-full rounded-b-xl`}>
        <div className="w-full text-center">
          <p className="w-full text-sm text-center">{props.children}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
