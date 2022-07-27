import Slider from "components/Slider";
export default function LeftSide() {
  return (
    <section className="px-4">
      <div>
        <p className="text-black text-3xl font-thin py-5">Recently Played</p>
      </div>
      <div>
        <div>
          <Slider></Slider>
        </div>
        <div>
          <Slider></Slider>
        </div>
        {/* <div>
          <Slider></Slider>
        </div>
        <div>
          <Slider></Slider>
        </div>
        <div>
          <Slider></Slider>
        </div> */}
      </div>
    </section>
  );
}
