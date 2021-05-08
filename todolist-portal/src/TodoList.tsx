import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  cards: Card[];
  toggleCard: ToggleCard;
}

export const TodoList: React.FC<Props> = ({ cards, toggleCard }) => {
  return (
    <ul>
      {cards.map(card => (
        <TodoListItem key={card.id} card={card} toggleCard={toggleCard} />
      ))}
    </ul>
  );
};