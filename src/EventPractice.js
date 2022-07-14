import { useState } from "react";

// class EventPractice extends Component {
// render() {
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="massage"
//         placeholder="아무거나 입력하세요"
//         onChange={(e) => {
//           // console.log(e);
//           console.log(e.target.value);
//         }}
//       />
//     </div>
//   );
// }

//   state = {
//     message: "",
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력하세요"
//           value={this.state.message}
//           onChange={(e) => {
//             // console.log(e);
//             this.setState({
//               message: e.target.value,
//             });
//           }}
//         />
//         <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({
//               message: "",
//             }); // 일회성 함수
//             console.log(this.state.message);
//           }}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

// constructor(props) {
//   super(props);
//   this.handleChange = this.handleChange.bind(this);
//   this.handleClick = this.handleClick.bind(this);
//   // bind === 맵핑
//   // 생성자 만들기 위한 목적 === 초기화하기 위해
// }
// e ==> 이벤트 객체  ---- 타겟은 이벤트객체

// state = {
//   message: "",
// };

// handleChange = (e) => {
//   this.setState({
//     message: e.target.value,
//   });
// }; // 변수에 대입하면 재사용 할 수 있음

// handleClick = () => {
//   alert(this.state.message);
//   this.setState({
//     message: "",
//   });
// };

// render() {
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="message"
//         placeholder="아무거나 입력해 보세요."
//         value={this.state.message}
//         onChange={this.handleChange}
//       />
//       <button onClick={this.handleClick}>확인</button>
//     </div>
//   );
// }

// state = {
//   id: "",
//   username: "",
//   message: "",
// };

// handleChange = (e) => {
//   this.setState({
//     // state에 있는 객체를 가져옴
//     [e.target.name]: e.target.value, // 대괄호는 형식
//   });
// }; // 변수에 대입하면 재사용 할 수 있음

// handleClick = () => {
//   alert(
//     this.state.id + " : " + this.state.username + ": " + this.state.message
//   );
//   this.setState({
//     id: "",
//     username: "",
//     message: "",
//   });
// };

// render() {
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="id"
//         placeholder="사용자 id"
//         value={this.state.id}
//         onChange={this.handleChange}
//       />
//       <input
//         type="text"
//         name="username"
//         placeholder="사용자명"
//         value={this.state.username}
//         onChange={this.handleChange}
//       />
//       <input
//         type="text"
//         name="message"
//         placeholder="아무거나 입력해 보세요."
//         value={this.state.message}
//         onChange={this.handleChange}
//       />
//       <button onClick={this.handleClick}>확인</button>
//     </div>
//   );
// }

//   state = {
//     username: "",
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       // state에 있는 객체를 가져옴
//       [e.target.name]: e.target.value, // 대괄호는 형식
//     });
//   }; // 변수에 대입하면 재사용 할 수 있음

//   handleClick = () => {
//     alert(this.state.username + ": " + this.state.message);
//     this.setState({
//       username: "",
//       message: "",
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>

//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요."
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// const EventPractice = () => {
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState("");
//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);
//   const onClick = () => {
//     alert(username + " : " + message);
//     setUsername("");
//     setMessage("");
//   };

//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick();
//     }
//   };

//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="사용자명"
//         value={username}
//         onChange={onChangeUsername}
//       />
//       <input
//         type="text"
//         name="username"
//         placeholder="사용자명"
//         value={message}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <button onClick={onClick}>확인</button>
//     </div>
//   );
// };

const EventPractice = () => {
  const [form, setForm] = useState({
    // 반환값이 하나밖에 못하기때문에 배열객체로 반환
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, //스프레드
      [e.target.name]: e.target.value, //원하는 값 덮어씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="사용자명"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
