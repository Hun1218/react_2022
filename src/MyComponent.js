import PropTypes from "prop-types";
import { Component } from "react";

// 88p
// const MyComponent2 = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

// // 95p
// const MyComponent3 = (props) => {
//   return (
//     <div>
//       안녕하세요. 제 이름은 {props.name}
//       <br />
//       childeren 값은 {props.children} 입니다
//     </div>
//   );
// };

// // 96p
// const MyComponent = ({ name, children, favoriteNumber }) => {
//   // const { name, children, favoriteNumber } = props;
//   return (
//     <div>
//       안녕하세요. 제 이름은 {name} 입니다.
//       <br />
//       childeren 값은 {children} 입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// };

//MyComponent 자기자신의 객체
class MyComponent extends Component {
  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        안녕하세요. 제 이름은 {name} 입니다.
        <br />
        childeren 값은 {children} 입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}
MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
// export { MyComponent2, MyComponent3 };
