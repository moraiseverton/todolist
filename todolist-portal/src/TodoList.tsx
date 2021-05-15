import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  cards: Card[];
  toggleCard: ToggleCard;
}

export const TodoList: React.FC<Props> = ({ cards, toggleCard }) => {
  return (
    <div className="TodoList">
    {cards.map(card => (
        <TodoListItem key={card.cardId} card={card} toggleCard={toggleCard} />
      ))}
    </div>
  );
};