import { Component } from "react";

// class Counter extends Component {
//   // super 부모을 지정 -> 자식 Component -> Counter 상속
//   constructor(props) {
//     // 생성자 함수를 생성하는 내장함수 ==>  constructor
//     // 객체를 생성하는 것 => 생성자 1번만 호출
//     super(props);
//     //  state의 초기값을 설정하기
//     // state는 상태값
//     this.state = {
//       number: 0,
//       fixedNumber: 0,
//     };
//   }
//   // 렌더링 ==> 상태값 변화가 일어났을때 자동으로 실행
//   render() {
//     const { number, fixedNumber } = this.state;
//     // state를 조회할 때는 this.state로 조회합니다
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h2>바뀌지 않는 값: {fixedNumber}</h2>
//         <button
//           // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
//           onClick={() => {
//             // this.setState 를 사용하여 state에 새로운값을 넣을 수있음
//             this.setState({ number: number + 1 });
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            // this.setState 를 사용하여 state에 새로운값을 넣을 수있음
            // this.setState({ number: number + 1 });
            //
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState 가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
