import Slider from "components/Slider";
import { Recentlies } from "data/songData"
export default function LeftSide() {
  return (
    <section>
      {Recentlies.map((Recently)=> {
        return (
          <div>
            <Image src={Recently.src}></Image>
          </div>
        )
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
