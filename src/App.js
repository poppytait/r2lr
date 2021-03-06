import React from "react";
import "./App.css";
import { tsConstructorType } from "@babel/types";
// import { listenerCount } from "cluster";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: ""
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    // this.onClickMe = this.onClickMe.bind(this);
  }
  onSearchChange = event => this.setState({ searchTerm: event.target.value });

  onClickMe = () => console.log(this);

  onDismiss = id => {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
    console.log(this);
  };

  render() {
    return (
      <>
        <button onClick={this.onClickMe} type="button">
          Click Me
        </button>
        <div className="App">
          <form>
            <input type="text" onChange={this.onSearchChange} />
          </form>
          {this.state.list
            .filter(isSearched(this.state.searchTerm))
            .map(item => (
              <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>
                  <button
                    onClick={() => this.onDismiss(item.objectID)}
                    type="button"
                  >
                    Dismiss
                  </button>
                </span>
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default App;
