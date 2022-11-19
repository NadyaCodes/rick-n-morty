import React from "react";
import { IEpisodeProps } from "./interfaces";
// @ts-ignore
import { Store } from "./Store.tsx";
// @ts-ignore
import { toggleFavAction } from "./Actions.tsx";
// @ts-ignore
const EpisodeList = React.lazy<any>(() => import("./EpisodesList.tsx"));

export default function FavPage() {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
}
