import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

// mapStateToProps와 mapDispatchToProps로부터 값을 넘겨받음
function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
    addToDo(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state }; // return값은 연결된 Home의 props로 전달된다
} // react-redux로 인해 연결된 이 함수의 첫번째 인자는 store.js의 reducer의 return값을 가져온다

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)), // dispatch 작업을 여기서 실행한 후 Home으로 넘긴다
  }; // return값은 연결된 Home의 props로 전달된다
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); // mapStateToProps(getState역할), mapDispatchToProps(dispatch역할)와 Home의 연결
