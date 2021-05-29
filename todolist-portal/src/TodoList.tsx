import React from 'react';
import { TodoListItem } from './TodoListItem';
import { Container, Row, Col } from 'react-bootstrap';

interface Props {
  cards: Card[];
  toggleCard: ToggleCard;
}

export const TodoList: React.FC<Props> = ({ cards, toggleCard }) => {
  return (
    <>
<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
      <Container fluid>
        <Row className="show-grid">
          {cards.map(card => (
            <Col xs={4} md={3}>
              <TodoListItem key={card.cardId} card={card} toggleCard={toggleCard} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};