import { ArtistsSong } from "data/songData";

export default function Artists() {
  return (
    <div>
      <p>Artists you should follow</p>
      <button>Refresh list</button>
      {ArtistsSong.map((ArtistSong)=> {
        return (
            <div key={ArtistSong.id}> {ArtistSong.name} </div>
        )
      })}
    </div>
  );
}
