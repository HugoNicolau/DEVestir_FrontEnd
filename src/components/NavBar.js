import pinguim from "../images/pinguimQuadrado.png"
import styled from "styled-components"
import { useContext } from "react"
import { TokenContext } from "./TokenContext"
import { useNavigate } from "react-router-dom"

export default function NavBar(){

    const {token, userName, showCart, setShowCart} = useContext(TokenContext);
    const navigate = useNavigate();

    function goToLogin(){
    navigate("/login")    
    }

    function goToSignUp(){
        navigate("/cadastro")    
        }

    function openCart(){
        setShowCart(!showCart);
    }
    return(
        <NavBarContainer>
            <TitleAndLogo onClick={()=> navigate("/")}>
            <StyledLogo src={pinguim}/>
            <Title>
                DEVestir
            </Title>
            </TitleAndLogo>
            <UserRelated>
                {token.length>0 ? <><h1>Olá {userName}</h1> </>: <><h1 onClick={goToLogin}>Entrar</h1>  <h1 onClick={goToSignUp}>Cadastrar</h1>
            
            <h1 onClick={openCart}>Carrinho</h1></>}
            <h1 onClick={openCart}>Carrinho</h1>

            </UserRelated>

        </NavBarContainer>
    )
}


const NavBarContainer = styled.div`
width:100vw;
height:80px;
background-color:#033249;
display:flex;
padding: 10px;
color: #FF8038;
/* color:#033249; */
align-items:center;
justify-content:space-between;
position:fixed;
z-index:3;
`
const UserRelated = styled.div`
color:#FFffff;
font-family: 'Saira Stencil One';
font-size:20px;
display:flex;
column-gap:20px;
padding-right:50px;
h1{
    :hover{
color:#ff8038;
cursor: pointer;
}
}
`
const Title = styled.h1`
color:#FFffff;
font-family: 'Saira Stencil One';
font-size:40px;
`
const TitleAndLogo = styled.div`
display:flex;
align-items:center;
:hover{
cursor: pointer;
}
`

const StyledLogo = styled.img`
border-radius:100%;
width:70px;
height:70px;
margin-left:40px;
margin-right:20px;

`