import React from 'react';
import TrelloCard from './TrelloCard';

const TrelloList = ({title, cards}) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {cards.map(card => (
     <TrelloCard text={card.text}></TrelloCard> 

      ))}
    </div>
  )
}

const styles = {
  container: {
    backgroundColor : "pink",
    borderRadius: 2,
    width:300,
    padding: 8,
    marginRight: 8
  }
}

export default TrelloList;