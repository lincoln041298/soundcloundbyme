import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export default function Searchbar() {
  return (
    <div className="flex items-center mx-3 flex-[0_0_27%]">
      <input
        className="py-1 pl-2 pr-6 rounded-lg -mr-6 placeholder:font-thin w-full"
        type="text"
        name="search"
        placeholder="search"
      ></input>
      <SearchIcon className="z-10" />
    </div>
  );
}
