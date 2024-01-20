import tracksList from "../../assets/tracksList";
import Track from "../../components/Track/Track";
import style from "./mainPage.module.scss";
import { Input } from "@mui/material";
import { useState } from "react";

const runSearch = (query) => {
  if (!query) {
    return tracksList;
  }
  const lowerCaseQuery = query.toLowerCase();
  return tracksList.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  );
};
const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList);
  const handlerChange = (event) => {
    const foundtraks = runSearch(event.target.value);
    setTracks(foundtraks);
  };
  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Поиск треков"
        onChange={handlerChange}
      />
      <div className={style.list}>
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};
export default MainPage;
