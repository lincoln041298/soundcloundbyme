import Slider from "components/Slider";
import TheUpLoad from "components/TheUpload/TheUpload";
export default function LeftSide() {
  return (
    <section className="px-4">
      <div>
        <div className="mb-5">
          <h3 className="text-black text-3xl font-thin">Recently Played</h3>
        </div>
        <div>
          <div className="">
            <Slider></Slider>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="mb-5">
          <h3 className="text-black text-3xl font-thin">
            More of what you like
          </h3>
          <p>Suggestions based on what you've liked or played</p>
        </div>
        <div>
          <div className="">
            <Slider></Slider>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="mb-5">
          <h3 className="text-black text-3xl font-thin">
          For fans of Astronaut
          </h3>
        </div>
        <div>
          <div className="">
            <Slider></Slider>
          </div>
        </div>
      </div>
      <div>
        <TheUpLoad/>
      </div>
    </section>
  );
}
