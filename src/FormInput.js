import { useState } from "react";

const FormInput = () => {
  const [form, setForm] = useState({
    userid: "",
    pass: "",
    jumin1: "",
    jumin2: "",
    tel1: "",
    tel2: "",
    tel3: "",
  });

  const { userid, pass, jumin1, jumin2, tel1, tel2, tel3 } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    // alert(
    //   "아이디 : " +
    //     userid +
    //     "\n비밀번호 : " +
    //     pass +
    //     "\n주민번호 : " +
    //     jumin1 +
    //     " - " +
    //     jumin2 +
    //     "\n전화번호 :" +
    //     tel1 +
    //     "-" +
    //     tel2 +
    //     "-" +
    //     tel3
    // );
    var a = "";
    var ch = "";
    if (userid == "") {
      alert("아이디를 입력하세요!!!");
      // a += "아이디 : " + userid + "\n";
      return false;
    } else {
      if (userid.length < 6 || userid.length > 10) {
        alert("아이디 길이 확인(6~10자리)!!!");
        return false;
      } else {
        for (let i = 0; i < userid.length; i++) {
          ch = userid.substring(i, i + 1);
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
      a += "아이디 : " + userid + "\n";
    }
    if (pass == "") {
      // a += "비밀번호 : " + pass + "\n";
      alert("비밀번호를 입력하세요!!!");
    } else {
      if (pass.length < 6 || pass.length > 10) {
        alert("패스워드 길이 확인(6~10자리)!!!");
        return false;
      } else {
        for (let i = 0; i < pass.length; i++) {
          ch = pass.substring(i, i + 1);
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
        a += "비밀번호 : " + pass + "\n";
      }
    }
    if (jumin1.length == 0 && jumin2.length == 7) {
      a += "주민번호 : " + jumin1 + "-" + jumin2 + "\n";
    }
    if (tel1.length == 3 && tel2.length == 4 && tel3.length == 4) {
      a += "전화번호 : " + tel1 + "-" + tel2 + "-" + tel3 + "\n";
    }
    alert(a);
    setForm({
      userid: "",
      pass: "",
      jumin1: "",
      jumin2: "",
      tel1: "",
      tel2: "",
      tel3: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <table align="center" border="1">
        <tr>
          <td width="110">아이디</td>
          <td width="400">
            <input
              type="text"
              name="userid"
              size="30"
              value={userid}
              onChange={onChange}
              onKeyPress={onKeyPress}
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
              value={pass}
              onChange={onChange}
              onKeyPress={onKeyPress}
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
              value={jumin1}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            -
            <input
              type="text"
              name="jumin2"
              size="7"
              maxlength="7"
              placeholder="뒷자리7자리"
              value={jumin2}
              onChange={onChange}
              onKeyPress={onKeyPress}
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
              value={tel1}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            -
            <input
              type="tel"
              name="tel2"
              size="4"
              placeholder="4자리"
              maxlength="4"
              value={tel2}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            -
            <input
              type="tel"
              name="tel3"
              size="4"
              placeholder="4자리"
              maxlength="4"
              value={tel3}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
          </td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <input type="button" value="입력" onClick={onClick} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default FormInput;
