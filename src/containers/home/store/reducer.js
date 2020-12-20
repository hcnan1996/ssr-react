import { CHANGE_LIST } from "./constants";

const defaultState = {
  name: "hechengnan",
  newsList: [
    {
      id: 1,
      title: "1111111",
    },
  ],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      const newState = {
        ...state,
        newsList: action.list,
      };
      return newState;
    default:
      return state;
  }
};
