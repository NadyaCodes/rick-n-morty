export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<any>;
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
  toggleFavAction: (episode: IEpisode) => IAction;
  favourites: Array<IEpisode>;
}