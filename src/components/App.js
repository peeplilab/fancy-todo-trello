import React from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';

class App extends React.Component {

  onDragEnd = (result) => {
    //reordering logic
    const { destination, source, draggableId } = result;
    if (!destination) {
      return
    }
    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      draggableId
    ))
  }

  render() {
    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <div style={styles.listsContainer}>
            {lists.map(list => (
              <TrelloList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards} />
            ))}
            <TrelloActionButton list>

            </TrelloActionButton>
          </div>
        </div>
      </DragDropContext>

    )
  }

}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
}

//lists data coming from combinesredeucers
const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
