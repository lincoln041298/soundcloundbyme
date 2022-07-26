import Slider from "components/Slider";
import { Recentlies } from "data/songData";
import Image from "next/image";
export default function LeftSide() {
  return (
    <section>
      {Recentlies.map((Recently) => {
        return (
          <div>
            <Image width={500} height={500} src={Recently.src}></Image>
          </div>
        );
      })}
      <div>
        <p className="text-black">Recently Played</p>
      </div>
      <div className="">
        <Slider></Slider>
      </div>
    </section>
  );
}
