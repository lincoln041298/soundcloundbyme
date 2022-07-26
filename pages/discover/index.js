import LeftSide from "components/discoverinside/Leftside";
import RightSide from "components/discoverinside/Rightside";
import Layout from "components/Layout";
export default function Discover() {
  return (
    <div>
      <Layout>
        <section className="mx-auto max-w-[1240px] pt-20 grid grid-cols-8">
          <div className="col-span-6 bg-white ">
            <LeftSide />
          </div>
          <div className="col-span-2">
            <RightSide />
          </div>
        </section>
      </Layout>
    </div>
  );
}
