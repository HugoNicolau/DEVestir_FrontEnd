import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp(){
    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function trySignUp(e){
        e.preventDefault();

    }

    return(
        <SignUpContainer>
            {/* <Link to={"/"}>
          <img src={logo} alt="logo" />
            </Link> */}
          <LoginContainer>
            <form onSubmit={trySignUp}>
            <input
                type="text"
                id="nameField"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                placeholder="Nome"
                required
              />
              <input
                type="email"
                id="emailField"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                placeholder="Email"
                required
                
              />
              <input
                type="password"
                id="passwordField"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                placeholder="Senha"
                required
                
              />
               <input
                type="password"
                id="confirmField"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirme a senha"
                required
                
              />
             
              
              <ButtonContainer type="submit">
                
                  Cadastrar
                
              </ButtonContainer>
            </form>
            <StyledLink to="/login">
              <h1>Já tem uma conta? Faça login!</h1>
            </StyledLink>
          </LoginContainer>
        </SignUpContainer>
    );
}

const SignUpContainer = styled.div`
width:100vw;
padding-top:90px;
height:100vh;
background-color:rebeccapurple;
display:flex;
align-items:center;
justify-content:center;
`

const LoginContainer = styled.div`
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 6px;
      }
    
      input {
        height: 45px;
        width: 303px;
        border-radius: 5px;
        font-family: 'Raleway';
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        border: 1px solid #d4d4d4;
        padding-left: 11px;
        box-sizing: border-box;
    
        &::placeholder {
          color: #dbdbdb;
        }
      }
    
    `;

const ButtonContainer = styled.button`
height: 45px;
width: 303px;
left: 36px;
top: 381px;
border-radius: 4.636363506317139px;
font-family: 'Saira Stencil One';
font-size: 21px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0em;
text-align: center;
background-color: #52b6ff;
/* opacity: ${(props) => (props.clickedToLogin === false)?"1" :"0.7"}; */
align-items: center;
color: #ffffff;
display: flex;
justify-content: center;
margin-bottom: 25px;
border-color:#52b6ff;
box-shadow:none;
`;

const StyledLink = styled(Link)`
text-align: center;
text-decoration:none;
color:white;
`;