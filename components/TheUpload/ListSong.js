import { TheUpLoads } from "data/songData";
import Image from "next/image";
import imglistsong from "public/imglistsong.jpg";

export default function ListSong() {
  return (
    <div className="col-span-2 flex p-5 bg-slate-300 w-full">
      <div className="flex h-52 w-full">
        <Image className="flex-shrink-0 object-cover" width={300} height={180} src={imglistsong}></Image>
        <div className="flex flex-col overflow-y-scroll overflow-hidden w-full">
          {TheUpLoads.map((TheUpLoad) => {
            return (
              <div className="flex ml-4 py-3 px-2 hover:opacity-40 hover:bg-slate-100 cursor-pointer" key={TheUpLoad.id}>
                <h3>{TheUpLoad.author}</h3>
                <p className="w-2.5 h-[0.1px] mt-2.5 mx-2 bg-black flex items-center justify-center"></p>
                <p>{TheUpLoad.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
