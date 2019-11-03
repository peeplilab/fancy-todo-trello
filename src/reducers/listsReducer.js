const initialState = [
  {
    title : "Last Episode",
    id: 0,
    cards : [
      {
        id: 0,
        text: "STATIC"
      },
      {
        id:1,
        text: "Stateccccccccc"
      }
    ]
  },
  {
    title : "Second Episode",
    id: 1,
    cards : [
      {
        id: 0,
        text: "second STATIC"
      },
      {
        id:1,
        text: "swecond Stateccccccccc"
      },
      {
        id:2,
        text: "swecond Stateccccccccc"
      }
    ]
  }
]

const listsReducer = (state=initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

export default listsReducer;