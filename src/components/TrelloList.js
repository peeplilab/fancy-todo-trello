import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton'

const TrelloList = ({title, cards}) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {cards.map(card => (
     <TrelloCard key={card.id} text={card.text}></TrelloCard> 

      ))}
      <TrelloActionButton />
    </div>
  )
}

const styles = {
  container: {
    backgroundColor : "pink",
    borderRadius: 2,
    width:300,
    padding: 8,
    marginRight: 8,
    background: 'linear-gradient(to right bottom,  #d3cce3, #e9e4f0)',
    height: "100%"
  }
}

export default TrelloList;

//https://uigradients.com/#Portrait
//add key property for performance optimizations