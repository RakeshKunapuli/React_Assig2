import logo from './logo.svg';
import "./App.css"
import React from "react"
import TopBar from"./TopBar"
import Latest from "./LatestPosts"
import Main from "./Main"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <Latest/>
        <Main  />
      </div>
    );
  }
}

export default App;


