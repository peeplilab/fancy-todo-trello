import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 9;
const initialState = [
  {
    title: "Last Episode",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "STATIC ONE ONE ONE"
      },
      {
        id: `card-${1}`,
        text: "STATIC TWO TWO TWO"
      }
    ]
  },
  {
    title: "Second Episode",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${3}`,
        text: "second STATIC"
      },
      {
        id: `card-${4}`,
        text: "swecond Stateccccccccc"
      },
      {
        id: `card-${5}`,
        text: "swecond Stateccccccccc"
      },
      {
        id: `card-${6}`,
        text: "swecond Stateccccccccc"
      },
      {
        id: `card-${7}`,
        text: "swecond Stateccccccccc"
      },
      {
        id: `card-${8}`,
        text: "swecond Stateccccccccc"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      }
      listID += 1
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`
      }
      cardID += 1;
      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      })
      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload;
      const newState = [...state];
      //in the same list case
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id) ;
        //GRAB ELEMENT THAT IS DRAGGED
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card)
      } 
      return newState;

    default: return state
  }
}

export default listsReducer;
