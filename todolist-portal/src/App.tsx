import React from 'react';
import './App.css';

type Repo = { name: string};
type MyState = { isLoading: boolean, repos: Repo[] };

class App extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      repos: []
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = 'https://api.github.com/users/hacktivist123/repos';
    fetch(url)
    .then(response => response.json())
    .then(result => {
      this.setState({isLoading: true, repos: [result]})
      result.map(a => console.log(a))
      
    }
      )

    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.fetchData}>Click me</button>
        <ul>
          {
            this.state.repos.map((name, index) => (<h1>{name}</h1>))
          }
        </ul>
      </div>
    )
  };
}

export default App;
