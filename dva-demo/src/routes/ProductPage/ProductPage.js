import React from "react";
import Product from "../../components/Product";
import { connect } from "dva";

class ProductPage extends React.Component {
  render() {
    const { productList, dispatch, history } = this.props;
    return (
      <div>
        <Product
          history={history}
          dispatch={dispatch}
          title="商品类型"
          productList={productList}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productList: state.product.productList,
  };
};
export default connect(mapStateToProps)(ProductPage);
