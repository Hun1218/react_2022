import { Component } from "react";

class EventForm extends Component {
  state = {
    userid: "",
    pass: "",
    jumin1: "",
    jumin2: "",
    tel1: "",
    tel2: "",
    tel3: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClick = () => {
    let str = "";
    if (this.state.userid === "") {
      alert("아이디를 입력하세요");
      return false;
    } else {
      if (this.state.userid.length < 6 || this.state.userid.length > 10) {
        alert("아이디 길이 확인바람니다!!");
        return false;
      } else {
        for (let i = 0; i < this.state.userid.length; i++) {
          var ch = this.state.userid.substring(i, i + 1);
          if (
            !(
              (ch >= "0" && ch <= "9") ||
              (ch >= "a" && ch <= "z") ||
              (ch >= "A" && ch <= "Z")
            )
          ) {
            alert("특수문자가 포함, 다시 입력!!!");
            return false;
          }
        }
      }
      str += "아이디 : " + this.state.userid + "\n";
    }
    if (this.state.pass === "") {
      str += "비밀번호 : " + this.state.pass + "\n";
    }
    if (this.state.jumin1.length !== 0 && this.state.jumin2.length) {
      str += "주민번호 : " + this.state.jumin1 + "-" + this.state.jumin2 + "\n";
    }
    if (
      this.state.tel1.length !== 0 &&
      this.state.tel2.length !== 0 &&
      this.state.tel3.length !== 0
    ) {
      str +=
        "전화번호 : " +
        this.state.tel1 +
        "-" +
        this.state.tel2 +
        "-" +
        this.state.tel3 +
        "\n";
    }
    alert(str);
    // alert(
    //   "아이디 : " +
    //     this.state.userid +
    //     "\n비밀번호 : " +
    //     this.state.pass +
    //     "\n주민번호 : " +
    //     this.state.jumin1 +
    //     " - " +
    //     this.state.jumin2 +
    //     "\n전화번호 :" +
    //     this.state.tel1 +
    //     "-" +
    //     this.state.tel2 +
    //     "-" +
    //     this.state.tel3
    // );
    this.setState({
      userid: "",
      pass: "",
      jumin1: "",
      jumin2: "",
      tel1: "",
      tel2: "",
      tel3: "",
    });
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.onClick();
    }
  };

  render() {
    return (
      <>
        <h1 align="center">회원가입</h1>
        <table align="center" border="1">
          <tfoot>
            <tbody>
              <tr>
                <td width="110">아이디</td>
                <td width="400">
                  <input
                    type="text"
                    name="userid"
                    size="30"
                    value={this.state.userid}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    placeholder="최소6~최대10, 숫자와알파벳만 사용"
                  />
                </td>
              </tr>
              <tr>
                <td width="110">비밀번호 확인</td>
                <td width="400">
                  <input
                    type="password"
                    name="pass"
                    size="30"
                    placeholder="최소6~최대10, 숫자와알파벳만 사용"
                    value={this.state.pass}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                </td>
              </tr>
              <tr>
                <td width="110">주민번호</td>
                <td width="400">
                  <input
                    type="text"
                    name="jumin1"
                    size="6"
                    placeholder="앞자리6자리"
                    maxlength="6"
                    value={this.state.jumin1}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                  -
                  <input
                    type="text"
                    name="jumin2"
                    size="7"
                    maxlength="7"
                    placeholder="뒷자리7자리"
                    value={this.state.jumin2}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                </td>
              </tr>
              <tr>
                <td>전화번호</td>
                <td>
                  <input
                    type="tel"
                    name="tel1"
                    size="3"
                    placeholder="3자리"
                    maxlength="3"
                    value={this.state.tel1}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                  -
                  <input
                    type="tel"
                    name="tel2"
                    size="4"
                    placeholder="4자리"
                    maxlength="4"
                    value={this.state.tel2}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                  -
                  <input
                    type="tel"
                    name="tel3"
                    size="4"
                    placeholder="4자리"
                    maxlength="4"
                    value={this.state.tel3}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                </td>
              </tr>
              <tr>
                <td colspan="2" align="center">
                  <input type="button" value="입력" onClick={this.onClick} />
                </td>
              </tr>
            </tbody>
          </tfoot>
        </table>
      </>
    );
  }
}

export default EventForm;
