import React from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';

class App extends React.Component {
  render() {
    const { lists } = this.props;

    return (
      <div className="App">
        <h2>Hello </h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <TrelloList key={list.id} title={list.title} cards={list.cards} />
          ))}
          <TrelloActionButton list> 

          </TrelloActionButton>
        </div>
      </div>
    )
  }

}

const styles = {
  listsContainer : {
    display:"flex",
    flexDirection: "row"
  }
}

//lists data coming from combinesredeucers
const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
