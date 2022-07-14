import logo from "./logo.svg";
import "./App.css";
// import { Component } from "react";
// import React, { useState } from "react";
// import MyComponent from "./MyComponent";
// import Counter from "./Conuter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
import FormInput from "./FormInput";
import EventForm from "./EventForm";

// 함수 기반 컴포넌트
// function App() {
//   // const name = "React";
//   // // return name || (<h1>값이 undefind입니다.</h1>);
//   // return (
//   // <div className="react">{name}</div>
//   // );
//   const name = "리액트";
//   return (
//     <>
//       <div className="react">{name}</div>
//       <input />
//       <br />
//     </>
//   );
// }

// 클래스 기반 은 render 가 사용됨
// class App extends Component {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

// function App() {
//   // var number = 1;

//   // function onClick() {
//   //   number += 1;
//   //   console.log(number);
//   // }

//   // return (
//   //   <div>
//   //     <div>값 : {number}</div>
//   //     <button onClick={onClick}>+1</button>
//   //   </div>
//   // );
// }

// const App = () => {
//   return <MyComponent />;
// };

// const App = () => {
//   return <MyComponent name="리액트" />;
// };

// const App = () => {
//   return (
//     <MyComponent name={"리액트"} favoriteNumber={1}>
//       React
//     </MyComponent>
//   );
// };

// const App = () => {
//   return <Counter />;
// };

// const App = () => {
//   return <Say />;
// };

const App = () => {
  return <EventForm />;
};

export default App;
