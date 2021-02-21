import React from "react";
import "./App.scss";
import { useHistory } from "react-router-dom";
import galaxy from "../assets/img/galaxy.jpg";

const App: React.FC = () => {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <h1 id="app-name">Organizen</h1>
      <p>Let&apos;s organize it</p>
      <p>Let&apos;s organize it once again</p>
      <img src={galaxy} alt="galaxy" />
    </div>
  );
};

export default App;
