// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const sum = (a: number, b: number): number => {
//     return a + b;
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           {sum(14, 33)}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
// @ts-ignore
import { Store } from "./Store.tsx";

// https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

  const fetchDataAction = async () => {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!!!</p>
      <section>
        {state.episodes.map((episode: any) => {
          return (
            <section key={episode.id}>
              <div>{episode.name}</div>
              <section>
                Season: {episode.season} Number: {episode.number}
              </section>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}
