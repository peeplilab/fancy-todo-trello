import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';

//droppable id needs to be string

const TrelloList = ({ title, cards, listID }) => {
  return (
    <Droppable droppableID={String(listID)}>
      {(provided) => (
        <div 
        {...provided.droppableProps} 
        ref={provided.innerRef} 
        style={styles.container}
        >
          <h3>{title}</h3>
          {cards.map((card, index ) => (
            <TrelloCard key={card.id} index={index} text={card.text} id={card.id}></TrelloCard>
          ))}
          <TrelloActionButton listID={listID} />
          {provided.placeholder}
        </div>
      )}

    </Droppable>

  )
}

const styles = {
  container: {
    backgroundColor: "pink",
    borderRadius: 2,
    width: 300,
    padding: 8,
    marginRight: 8,
    background: 'linear-gradient(to right bottom,  #d3cce3, #e9e4f0)',
    height: "100%"
  }
}

export default TrelloList;

//https://uigradients.com/#Portrait
//add key property for performance optimizations