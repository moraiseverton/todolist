import React, { useState, useEffect } from 'react';
import './App.css';
import { TodoList } from './TodoList';
import axios from 'axios';

const defaultCards: Card[] = [
];

const api = "http://localhost:8080/todolist/api/cards";

function App() {
  const [cards, setCards]: [Card[], (cards: Card[]) => void] = useState(defaultCards);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    axios
        .get<Card[]>(api, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Request-Methods": "POST, GET, PUT, DELETE",
          },
          timeout : 1000
        })
        .then(response => {
          console.log(response.data);
          setCards(response.data);
          setLoading(false);
        })
        .catch(ex => {
          console.log(ex);
          setError("An unexpected error has occurred");
          setLoading(false);
        });
    }, []);

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

  return (
    <TodoList cards={defaultCards} toggleCard={toggleCard} />
    //{ error && <p className="error">{error}</p> }
    );
}

export default App;
