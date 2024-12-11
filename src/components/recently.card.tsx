/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

interface IRecentlProps {
  categories: string;
  title: string;
  postCreated: string;
  shortDetails: string;
}
export default function RecentlyCard(props: IRecentlProps) {
  return (
    <div className="min-w-[413px] min-h-[530px] rounded-[8px] ">
      {/* <Image
        width={413}
        height={262}
        src={fullImageUrl}
        className="rounded-[8px]"
        alt=""
      /> */}
      <div className="flex flex-col mt-2">
        <p className="mt-8 p-1 bg-[#DFF1F0] w-[70px]  text-center text-[#666666]">
          {props.categories}
        </p>
        <h1 className="text-[27px] w-[391px] mt-2 font-bold leading-[140%]">
          {props.title}
        </h1>
        <div className="flex items-center gap-3 mt-4  divide-black text-sm">
          <div>{props.postCreated}</div>
        </div>

        <p className="w-[431px] mt-6 text text-[15px]">{props.shortDetails}</p>
      </div>
    </div>
  );
}
