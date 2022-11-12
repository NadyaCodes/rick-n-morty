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
  const store = React.useContext(Store);
  return (
    <React.Fragment>
      {console.log(store)}
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!!!</p>
    </React.Fragment>
  );
}
