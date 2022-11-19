import React from "react";
import { Store } from "./Store.tsx";
import { IAction, IEpisode, IEpisodeProps } from "./interfaces";
import { fetchDataAction, toggleFavAction } from "./Actions.tsx";

// @ts-ignore
const EpisodeList = React.lazy<any>(() => import("./EpisodesList.tsx"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
