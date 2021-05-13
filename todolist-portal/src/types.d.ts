interface Card {
  cardId: long;
  title: string;
  description?: string;
  currentStatus: CardStatus;
  dueDate: Date = Date.now;
}

type CardStatus = 'PENDING' | 'DONE' | 'ARCHIVED'

// enum CardStatus {
//     PENDING, DONE, ARCHIVED
// }

type ToggleCard = (selectedCard: Card) => void;
