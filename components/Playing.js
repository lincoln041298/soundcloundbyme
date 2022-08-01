import { Recentlies } from "data/songData";
import { Songs } from "pages/context";
import { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Playing() {
  const { song, handleSetSong } = useContext(Songs);
  console.log(song.url);

  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleClickPrev = () => {
    handleSetSong(song.id - 1);
  };

  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        autoPlay={true}
        preload
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
      />
    </div>
  );
}
