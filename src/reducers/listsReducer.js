import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 4;
const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "STATIC"
      },
      {
        id: 1,
        text: "Stateccccccccc"
      }
    ]
  },
  {
    title: "Second Episode",
    id: 1,
    cards: [
      {
        id: 0,
        text: "second STATIC"
      },
      {
        id: 1,
        text: "swecond Stateccccccccc"
      },
      {
        id: 2,
        text: "swecond Stateccccccccc"
      }
    ]
  },
  {
    title: "third Episode",
    id: 2,
    cards: [
      {
        id: 0,
        text: "third STATIC"
      },
      {
        id: 1,
        text: "third Stateccccccccc"
      },
      {
        id: 2,
        text: "third Stateccccccccc"
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
        id: listID
      }
      listID += 1
      return [...state, newList];

      case CONSTANTS.ADD_CARD : 
      const newCard = {
        text : action.payload.text,
        id: cardID
      }
      cardID +=1;
      const newState = state.map((list) => {
        if(list.id === action.payload.listID) {
          return {
            ...list,
            cards : [...list.cards, newCard]
          }
        } else {
          return list
        }
      })
      return newState
    default: return state
  }
}

export default listsReducer;
