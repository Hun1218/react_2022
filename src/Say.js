import { useState } from "react";

// const Say = () => {
//   const [message, setMessage] = useState(""); // 초기화 값 객체사용도가능함
//   const onClickEnter = () => setMessage("안녕하세요!"); // 메소드 반환 2가지 == 데이터, 변환시킬 수 있는 메서드
//   const onClickLeave = () => setMessage("안녕히 가세요!"); // set, get 값을 변경할때 set, 읽을때 get

//   return (
//     <div>
//       <button onClick={onClickEnter}>입장</button>
//       <button onClick={onClickLeave}>퇴장</button>
//       <h1>{message}</h1>
//     </div>
//   );
// };

const Say = () => {
  const [message, setMessage] = useState(""); // 초기화 값 객체사용도가능함
  const onClickEnter = () => setMessage("안녕하세요!"); // 메소드 반환 2가지 == 데이터, 변환시킬 수 있는 메서드
  const onClickLeave = () => setMessage("안녕히 가세요!"); // set, get 값을 변경할때 set, 읽을때 get

  const [color, setColor] = useState("black"); //초기화 값

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        레드
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        그린
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        블루
      </button>
    </div>
  );
};

export default Say;
