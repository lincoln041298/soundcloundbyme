import Slider from "components/Slider";
export default function LeftSide() {
  return (
    <section className="px-4">
      <div>
        <p className="text-black">Recently Played</p>
      </div>
      <div>
        <div className="">
          <Slider></Slider>
        </div>
        <div>
          <Slider></Slider>
        </div>
      </div>
    </section>
  );
}
