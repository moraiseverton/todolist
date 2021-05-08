import React, { useState } from 'react';
import './App.css';
import { TodoList } from './TodoList';

const initialCards: Card[] = [
  {
    id: 1,
    title: 'Walk the dog',
    currentStatus: 'PENDING',
    dueDate: new Date(),
  },
  {
    id: 2,
    title: 'Write app',
    description: "Write a complete app",
    currentStatus: 'DONE',
    dueDate: new Date(),
  },
];

const api = "http://localhost:8080/todolist/api/cards";

let dbCards;

function App() {
  const [cards, setCards] = useState(initialCards);

  // dbCards = fetch(api).then(response => response.json()).then((data : Card[]) => data as )

  const toggleCard = (selectedCard: Card) => {
    const newCards = cards.map(card => {
      if (card === selectedCard) {
        return {
          ...card,
          currentStatus: (card.currentStatus === 'PENDING' ? 'DONE' : 'PENDING') as CardStatus,
        };
      }
      return card;
    });
    setCards( newCards );
  };

  return <TodoList cards={initialCards} toggleCard={toggleCard} />;
}

export default App;

/*
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
      
    }
      )

    console.log(this.state)
  }

  render() {
    const [todos, setTodos] = useState(initialCards);

    return (
      <div className="App">
        <TodoListItem todo={todos[0]} />
        <TodoListItem todo={todos[1]} />
      </div>
    )
  };
}

export default App;
*/