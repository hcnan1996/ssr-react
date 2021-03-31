import React, { useState } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";
const Home = (props) => {
  const { list, name } = props;
  const [num, setNum] = useState("");
  const setnum = () => {
    setNum("222");
  };
  const getList = () => {
    console.log(list);
    return list.map((item) => <div key={item.id}>{item.title}</div>);
  };
  return (
    <div>
      <div>This is home hcnan96</div>
      <h1>{name}</h1>
      <button onClick={() => setnum()}>click11111{num}</button>
      <button
        onClick={() => {
          alert("666");
        }}
      >
        click
      </button>
      {getList()}
    </div>
  );
};
const mapStateToProps = (state) => ({
  list: state.home.newsList,
  name: state.home.name,
});
const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
