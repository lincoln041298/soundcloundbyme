import { Recentlies } from "data/songData";
import { Songs } from "pages/context";
import { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Playing() {
  const data = useContext(Songs);
  console.log(data);

  const handleClickNext = () => {
    handleRecently(Recentlies.id + 1);
  };
  const handleClickPrev = () => {
    handleRecently(Recentlies.id - 1);
  };

  return (
    <div>
      <AudioPlayer
        className="player myusic"
        src={data.song.song}
        layout="stacked-reverse"
        showSkipControl={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
      />
    </div>
  );
}
