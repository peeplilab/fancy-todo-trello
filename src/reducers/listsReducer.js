import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 3;
const initialState = [
  {
    title: "Last Episode",
    id: `list-${0}`,
    cards: [
      {
        id:  `card-${0}`,
        text: "STATIC"
      },
      {
        id:  `card-${1}`,
        text: "Stateccccccccc"
      }
    ]
  },
  {
    title: "Second Episode",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${0}`,
        text: "second STATIC"
      },
      {
        id:  `card-${1}`,
        text: "swecond Stateccccccccc"
      },
      {
        id:  `card-${2}`,
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

    case CONSTANTS.ADD_CARD:
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
      return newState
    default: return state
  }
}

export default listsReducer;
