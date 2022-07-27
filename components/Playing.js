import AudioPlayer from 'react-h5-audio-player';
import { Recentlies } from 'data/songData'
import { useContext } from 'react';

export default function Playing()  {
    const {Recently, handleRecently} = useContext(Recentlies)
    const handleClickNext = () => {
        handleRecently(Recently.id + 1)
    }
    const handleClickPrev = () => {
        handleRecently(Recently.id - 1)
    }

    return (
        <div>
            <AudioPlayer className="player myusic" src='Recently.song' layout='stacked-reverse' showSkipControl={true} showJumpControls={false}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrev}
            />
        </div>
    )
}