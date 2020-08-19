import * as api from "../services/example";
export default {
  namespace: "product",
  state: {
    productList: [
      {
        name: "豆子",
      },
      {
        name: "玉米",
      },
    ],
  },
  reducers: {
    updateList(state, action) {
      let currentProductList = deepClone(state);
      currentProductList.productList.push(action.payload);
      return currentProductList;
    },
  },
  effects: {
    *updateListAsync({ payload }, { call, put }) {
      yield put({
        type: "updateList",
        payload: payload,
      });
    },
    *updateListHttp({ payload }, { call, put }) {
      // 网络请求
      const result = yield call(api.getProduct, payload);
      if (result && result.data) {
        yield put({
          type: "updateList",
          payload: result.data,
        });
      }
    },
  },
};

function deepClone(arr) {
  let objClone = JSON.parse(JSON.stringify(arr));
  return objClone;
}
