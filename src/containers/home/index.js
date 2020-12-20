import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";
import { Helmet } from "react-helmet";
const Home = (props) => {
  const { list, name, getHomeList } = props;
  useEffect(() => {
    getHomeList();
  }, []);
  const getList = () => {
    return list.map((item) => <div key={item.id}>{item.title}</div>);
  };
  return (
    <>
      <Helmet>
        <title>分享前端知识</title>
        <meta name="description" content="分享前端知识" />
      </Helmet>
      <div>This is home hcnan96</div>
      <h1>{name}</h1>
      <button
        onClick={() => {
          alert("666");
        }}
      >
        click
      </button>
      {getList()}
    </>
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
Home.loadData = (store) => {
  return store.dispatch(getHomeList());
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
