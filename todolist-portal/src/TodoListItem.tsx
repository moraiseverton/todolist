import React from "react";

interface Props {
  card: Card;
  toggleCard: ToggleCard;
}

export const TodoListItem: React.FC<Props> = ({ card, toggleCard }) => {
  return (
    <div style={{
      textDecoration:
        card.dueDate <= new Date() ? "line-through" : undefined,
    }}>
      <h2>{card.title}</h2>
      {card.description ?? card.description}
      <button
        onClick={() => {
          toggleCard(card);
        }}
        > Mark as DONE </button>
    </div>
  );
};
