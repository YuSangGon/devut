import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [lgnId, setLgnId] = useState("");
  const [pwd, setPwd] = useState("");

  const submit = () => {
    // axios.post("", {
    //   lgnId: lgnId,
    //   pwd: pwd,
    // });
  };

  return (
    <>
      <div className="login">
        id :{" "}
        <input
          type="text"
          name="lgnId"
          onChange={(e) => setLgnId(e.target.value)}
        />
        <br />
        pw :{" "}
        <input
          type="text"
          name="pwd"
          onChange={(e) => setPwd(e.target.value)}
        />
        <br />
        <input type="button" onClick={submit} value="로그인" />
      </div>
    </>
  );
};

export default Login;
