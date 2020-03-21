export const initialState = {
  isSignedIn: false,
  name: "",
  email: "",
  profile_pic: ""
};

export default function reducer(state, action) {
  var newState;
  switch (action.type) {
    case "IN": {
      newState = Object.assign({}, state, action);
      return newState;
    }
    case "OUT": {
      return initialState;
    }
    default: {
      if (state === undefined) return initialState;
      else return state;
    }
  }
}
