import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { TokenContext } from "./TokenContext";

export default function SignIn(){
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const navigate = useNavigate();
    const { setToken } = useContext(TokenContext);


    function trySignUp(e){
        e.preventDefault();
        const body = {
            name:nameValue,
            email: emailValue,
            password: passwordValue,
        }

        const URL = "http://localhost:5000/sign-in";

        const promise = axios.post(URL, body)
        promise.then((res) => {
            console.log(res.data)
            setToken(res.data.token)
            navigate("/");
        })
        promise.catch((err) => {
            console.log(err.response.data)
            alert("Ocorreu um erro, tente novamente!");
        })

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
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder="Nome"
                required
              />
              <input
                type="email"
                id="emailField"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="Email"
                required
                
              />
              <input
                type="password"
                id="passwordField"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="Senha"
                required
                
              />
             
             
              
              <ButtonContainer type="submit">
                
                  Entrar
                
              </ButtonContainer>
            </form>
            <StyledLink to="/cadastro">
              <h1>Não possui uma conta? Cadastre-se!</h1>
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