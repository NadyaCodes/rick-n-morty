export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string };
  name: string;
  number: number;
  rating: { average: null };
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  store: {state: IState, dispatch: any}
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction;
  favourites: Array<IEpisode>;
}