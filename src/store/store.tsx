import { createStore } from "redux";

const initialState = {
  language: "English",
};

const reducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "TO_JAPANESE":
      return {
        language: "Japanese",
      };
    case "TO_ENGLISH":
      return {
        language: "English",
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
