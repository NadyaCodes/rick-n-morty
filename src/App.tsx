import React from "react";
// @ts-ignore
import { Store } from "./Store.tsx";
import { Link } from "@reach/router";

// https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
