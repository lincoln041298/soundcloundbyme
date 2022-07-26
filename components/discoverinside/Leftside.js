import Slider from "components/Slider";

export default function LeftSide() {
  return (
    <section>
      <div>
        <p className="text-black">Recently Played</p>
      </div>
      <div className="">
        <Slider></Slider>
      </div>
    </section>
  );
}
