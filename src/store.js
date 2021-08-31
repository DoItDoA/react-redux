import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit"; // 기존의 REDUX에서 코드수를 줄인방식이다

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  }, // createReducer에서는 새로 배열을 구성하지 않고 바로 삽입이 가능하다
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type /*ADD*/:
//       return [
//         { text: action.payload /*text: action.text*/, id: Date.now() },
//         ...state,
//       ]; // dispatch(actionCreators.addToDo(text))에서 값을 넣어 createAction사용 시 기본적으로 payload에 저장이 된다. 값을 여러개 넣을 때는 객체를 이용하여 넣는다
//     case deleteToDo.type /*DELETE*/:
//       return state.filter((toDo) => toDo.id !== action.payload /*action.id*/);
//     default:
//       return state;
//   }
// };

// const toDos = createSlice({
//   name: "toDosReducer",
//   initialState: [],
//   reducers: {
//     add: (state, action) => {
//       state.push({ text: action.payload, id: Date.now() });
//     },
//     remove: (state, action) =>
//       state.filter((toDo) => toDo.id !== action.payload),
//   },
// }); // createAction과 createReducer를 합쳐서 줄인 코드이다

const store = configureStore({ reducer }); // F12하여 탭에 REDUX에서 정보를 확인할수 있다
// const store = createStore(reducer);

export default store;

export const actionCreators = {
  addToDo,
  deleteToDo,
};
