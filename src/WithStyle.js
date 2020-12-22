import React, { Component } from "react";
//函数返回组件
export default (DecoratedComponent, styles) => {
  return class NewComponent extends Component {
    componentWillMount() {
      if (this.props.staticContext) {
        const style = styles._getCss().toString()
        console.log(this.props.staticContext, "staticContext", style);
        this.props.staticContext.css.push(styles._getCss());
      }
    }
    render() {
      return <DecoratedComponent {...this.props} />;
    }
  };
};
