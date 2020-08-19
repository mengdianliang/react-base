import React from "react";
import { Button } from "antd";
import { withRouter, Link, routerRedux } from "dva/router";
import * as api from "../services/example";
import {
  productUpdateList,
  productUpdateListAsync,
  productUpdateListHttp,
} from "../actions";
class Product extends React.Component {
  componentDidMount() {
    api.getProduct().then((res) => {
      console.log(res);
    });
  }
  getProductList = () => {
    const currentProduct = {
      name: "大米",
    };
    this.props.dispatch(productUpdateList(currentProduct));
    // this.props.dispatch({
    //   type: "product/updateList",
    //   payload: currentProduct,
    // });
  };
  getProductListAsync = () => {
    const currentProduct = {
      name: "大米2",
    };
    this.props.dispatch({
      type: "product/updateListAsync",
      payload: currentProduct,
    });
  };
  getProductListHttp = () => {
    const currentProduct = {
      name: "大米3",
    };
    this.props.dispatch({
      type: "product/updateListHttp",
      payload: currentProduct,
    });
  };
  goHome = () => {
    // 两种方式跳转props传递history，或者withRouter
    this.props.history.push("/");
  };
  routerReduxHome = () => {
    this.props.dispatch(routerRedux.push("/"));
  };
  render() {
    const { productList } = this.props;
    return (
      <div>
        <ul>
          {productList && productList.length > 0
            ? productList.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })
            : null}
        </ul>
        <div>
          <Button type="primary" onClick={this.getProductList}>
            获取商品列表
          </Button>
          <Button type="primary" onClick={this.getProductListAsync}>
            异步获取商品列表
          </Button>
          <Button type="primary" onClick={this.getProductListHttp}>
            获取商品列表HTTP
          </Button>
        </div>
        <Link to="/">去首页</Link>
        <Button type="primary" onClick={this.goHome}>
          去首页
        </Button>
        <Button type="primary" onClick={this.routerReduxHome}>
          去首页redux
        </Button>
      </div>
    );
  }
}
export default withRouter(Product);
