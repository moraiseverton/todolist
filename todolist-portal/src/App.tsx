import React from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import axios from "axios";

const api = "http://localhost:8080/todolist/api/cards";

type MyState = { 
  cards: Card[],
  loading: boolean,
  error: string
};

type AxiosResult = {
  cards: Card[], 
  size: number
}

class App extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props)
    // const [cards, setCards]: [Card[], (cards: Card[]) => void] = useState(
    //   defaultCards
    // );
    // const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<
    //   boolean
    // >(true);
    // const [error, setError]: [string, (error: string) => void] = useState("");
    // const [open, setOpen] = useState(false); to this.state = { open: false };
    // and when setting to true just call this.setState({ open: this.state.open: true })

    this.state = {
      cards: [],
      loading: false,
      error: "",
    }

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
    .get<AxiosResult>(api, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Methods": "POST, GET, PUT, DELETE",
      },
      timeout: 1000,
    })
    .then((response) => {
      this.setState({ cards: response.data.cards, loading: false});
    })
    .catch((ex) => {
      console.log(ex);
      this.setState({ error : "An unexpected error has occurred"});
      this.setState({loading : false});
    });
  };

  toggleCard(selectedCard: Card) {
    const newCards = this.state.cards.map((card) => {
      if (card === selectedCard) {
        return {
          ...card,
          currentStatus: (card.currentStatus === "PENDING"
            ? "DONE"
            : "PENDING") as CardStatus,
        };
      }
      return card;
    });
    this.setState({ cards: newCards});
  };

  render() {
    return (
      <div className="App">
        <TodoList cards={this.state.cards} toggleCard={this.toggleCard} />
      </div>
    )
  }
}

export default App;
