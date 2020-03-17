export const initialState = {
  isSignedIn: false,
  name: "",
  email: "",
  profile_pic: ""
};

export default function reducer(state = initialState, action) {
  var newStore;
  switch (action.type) {
    case "IN": {
      newStore = Object.assign({}, state, action);
      return newStore;
    }
    default:
      return state;
  }
}
