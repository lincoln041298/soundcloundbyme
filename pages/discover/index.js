import LeftSide from "components/discoverinside/Leftside";
import RightSide from "components/discoverinside/Rightside";
import Layout from "components/Layout";
import Playing from "components/Playing";
import { Songs } from "pages/context";
import { useState } from "react";
import { Recentlies } from "data/songData";
export default function Discover() {
  const [song, setSong] = useState(Recentlies[0]);
  const handleSetSong = (idSong) => {
    const song = Recentlies.find((song) => song.id === idSong);
    if (!song) setSong(Recentlies[0]);
    else setSong(song);
  };
  console.log(Recentlies);
  return (
    <Songs.Provider value={{ song, Recentlies, handleSetSong }}>
      <div>
        <Layout>
          <section className="mx-auto max-w-[1240px] pt-14 grid grid-cols-8">
            <div className="col-span-6 bg-white ">
              <LeftSide />
            </div>
            <div className="col-span-2">
              <RightSide />
            </div>
          </section>
        </Layout>
        <Playing />
      </div>
    </Songs.Provider>
  );
}
