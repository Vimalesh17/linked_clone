import React from "react";
import "./Loginpage.css";
import RegularButton from "../../components/RegularButton/RegularButton";
import ButtonWithLogo from "../../components/ButtonWithLogo/ButtonWithLogo";
import Google from "../../assets/google.png";
import Apple from "../../assets/apple (1).png";
import LinkedInTextInput from "../../components/CustomInput/CustomInput";

function LoginPage() {
  return (
    <div className="login-maincontainer">
      <div className="login-subcontainer">    
         <LinkedInTextInput></LinkedInTextInput>
        <RegularButton></RegularButton>
        <ButtonWithLogo
          icon={Google}
          name={"Sign in with Google"}
        ></ButtonWithLogo>
        <ButtonWithLogo
          icon={Apple}
          name={"Sign in with Apple"}
        ></ButtonWithLogo>
      </div>
    </div>
  );
}

export default LoginPage;
