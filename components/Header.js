import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "public/Logo/peace-cloud-28ad0963.svg";
import Notification from "public/Notificationsvg.svg";
import Message from "public/message.svg";
import Seemore from "public/seemore.svg";
import PrimarySearchAppBar from "./Search";
import User from "./User";

export default function Header() {
  const router = useRouter();
  return (
    <div className="w-full bg-stone-800 fixed left-0 right-0">
      <div className="mx-auto max-w-[1240px] flex">
        <p className="bg-black px-4 py-3 flex items-center">
          <Image src={Logo}></Image>
        </p>
        <button
          type="button"
          className=" hover:bg-black flex items-center"
          onClick={() => router.push("/discover")}
        >
          <p className="text-white font-thin text-sm py-4  w-[104px]">Home</p>
        </button>
        <p className="bg-black h-13 w-[1px]"></p>
        <button
          type="button"
          className="hover:bg-black flex items-center"
          onClick={() => router.push("/layout/Stream")}
        >
          <p className="text-white font-thin text-sm  py-4  w-[104px]">
            Stream
          </p>
        </button>
        <p className="bg-black h-13 w-[1px]"></p>
        <button
          type="button"
          className="hover:bg-black flex items-center"
          onClick={() => router.push("/layout/Library")}
        >
          <p className="text-white font-thin text-sm  py-4  w-[104px]">
            Library
          </p>
        </button>
        <p className="bg-black h-13 w-[1px]"></p>

        <PrimarySearchAppBar />

        <button
          type="button"
          className="hover:bg-black flex items-center"
          onClick={() => router.push("/discover")}
        >
          <p className="text-white font-thin text-sm  py-4  w-[104px]">
            Try Pro
          </p>
        </button>
        <button
          type="button"
          className="hover:bg-black flex items-center"
          onClick={() => router.push("/discover")}
        >
          <p className="text-white font-thin text-sm  py-4  w-[104px]">
            Upload
          </p>
        </button>
        <User />
        <button
          type="button"
          onClick={() => router.push("/layout/Notification")}
        >
          <p className="p-4 hover:bg-black">
            <Image src={Notification} />
          </p>
        </button>
        <button
          type="button"
          onClick={() => router.push("/layout/Notification")}
        >
          <p className="p-4 hover:bg-black">
            <Image src={Message} />
          </p>
        </button>
        <button
          type="button"
          className="flex items-center hover:bg-black"
          onClick={() => router.push("/layout/Notification")}
        >
          <p className="p-4 flex items-center ">
            <Image src={Seemore} />
          </p>
        </button>
      </div>
    </div>
  );
}
