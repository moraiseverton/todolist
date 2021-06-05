import React from 'react';
import { TodoListItem } from './TodoListItem';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  cards: Card[];
  toggleCard: ToggleCard;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export const TodoList: React.FC<Props> = ({ cards, toggleCard }) => {
  const classes = useStyles();

  return (
    <>
        <Grid container direction="row"
              justify="center"
              alignItems="center"
              spacing={1}>
          <Grid container item xs={12} spacing={3}>
            {cards.map(card => (
              <Grid item xs={4}>
                <Paper variant="outlined" square className={classes.paper}>
                  <TodoListItem key={card.cardId} card={card} toggleCard={toggleCard} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
    </>
  );
};