import React from "react";

interface Props {
  card: Card;
  toggleCard: ToggleCard;
}

export const TodoListItem: React.FC<Props> = ({ card, toggleCard }) => {
  return (
    <li>
      <label
        style={{
          textDecoration:
            card.dueDate <= new Date() ? "line-through" : undefined,
        }}
      >
        <input
          type="checkbox"
          checked={card.currentStatus === "DONE"}
          onClick={() => {
            toggleCard(card);
          }}
        />{" "}
        {card.title} {card.description ?? card.description}
      </label>
    </li>
  );
};
