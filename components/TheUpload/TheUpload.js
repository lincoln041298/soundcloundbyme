import ListSong from "./ListSong";
import { useRouter } from "next/router";
export default function TheUpLoad() {
  const router = useRouter()
  return (
    <div>
      <div className="mb-5">
        <h3 className="text-black text-3xl font-thin">The Upload</h3>
        <p>Newly posted tracks. Just for you</p>
      </div>
      <ListSong />
      <div className="flex justify-between my-5 items-center">
        <p>
          Based on your listening history
        </p>
        <button className="p-1 border border-black rounded-lg" type="button" onClick={() => router.push('discover/sets')}>Go to playlist</button>
      </div>
    </div>
  );
}
