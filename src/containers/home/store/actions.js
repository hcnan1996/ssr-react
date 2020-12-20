import { CHANGE_LIST } from "./constants";

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = (server) => {
  return (dispatch, getState, axiosInstance) => {
    const list = [
      {
        id: 1,
        title: "1111111",
      },
      {
        id: 2,
        title: "2222222",
      },
      {
        id: 3,
        title: "3333333",
      },
    ];
    dispatch(changeList(list));
  };
};
