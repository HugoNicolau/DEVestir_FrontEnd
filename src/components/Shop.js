import styled from "styled-components";

export default function Shop(){

    return(
        <ScreenContainer>
            <MainContainer>

            </MainContainer>
            <CartContainer>

            </CartContainer>
        </ScreenContainer>
    );
}

const ScreenContainer = styled.div`
width:100vw;
padding-top:90px;
height:100vh;
background-color:rebeccapurple;
display:flex;
align-items:center;
justify-content:center;
`
const MainContainer = styled.div`
width:80vw;
height:100vh;
background-color:rebeccapurple;
display:flex;
align-items:center;
justify-content:center;
`

const CartContainer = styled.div`
width:20vw;
height:100vh;
background-color:whitesmoke;
display:flex;
align-items:center;
justify-content:center;
`