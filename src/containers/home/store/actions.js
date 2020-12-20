import { CHANGE_LIST } from "./constants";

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = (server) => {
  return (dispatch, getState, axiosInstance) => {
    const promise = new Promise((rs, rj) => {
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
      rs(list);
    });
    return promise.then((res) => {
      dispatch(changeList(res));
    });
  };
};
