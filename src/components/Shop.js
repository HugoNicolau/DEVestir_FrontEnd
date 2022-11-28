import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


export default function Shop(){

    const [items, setItems] = useState([]);

    useEffect(() => {
        const URL = "http://localhost:5000/products";
        
    
        const promise = axios.get(URL);
        promise.then((res) => {
          
          setItems(res.data);
          console.log(items)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
        
    },[items])


    return(
        <ScreenContainer>
            <MainContainer>
                <ItemCard>
                    <img src="https://chicorei.imgix.net/623/001ff2b2-3064-11ed-bbbf-5363f251770f.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top" alt="imagem teste"/>
                    <h1>Camiseta O Auto da Compadecida</h1>
                    <h2>R$ 34,90</h2>
                </ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
            </MainContainer>
            <CartContainer>
                <h1>Itens no carrinho</h1>
            <CartItem>
                    <img src="https://chicorei.imgix.net/623/001ff2b2-3064-11ed-bbbf-5363f251770f.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top" alt="imagem teste"/>
                    <h1>Camiseta O Auto da Compadecida</h1>
                    <h2>R$ 34,90</h2>
                </CartItem>
                <CartItem>
                    <img src="https://chicorei.imgix.net/623/001ff2b2-3064-11ed-bbbf-5363f251770f.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top" alt="imagem teste"/>
                    <h1>Camiseta O Auto da Compadecida</h1>
                    <h2>R$ 34,90</h2>
                </CartItem>
                <CartItem>
                    <img src="https://chicorei.imgix.net/623/001ff2b2-3064-11ed-bbbf-5363f251770f.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top" alt="imagem teste"/>
                    <h1>Camiseta O Auto da Compadecida</h1>
                    <h2>R$ 34,90</h2>
                </CartItem>
                <CartItem>
                    <img src="https://chicorei.imgix.net/623/001ff2b2-3064-11ed-bbbf-5363f251770f.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top" alt="imagem teste"/>
                    <h1>Camiseta O Auto da Compadecida</h1>
                    <h2>R$ 34,90</h2>
                </CartItem>
            </CartContainer>
        </ScreenContainer>
    );
}


const ScreenContainer = styled.div`
width:100%;
padding-top:50px;
height:100%;
background-color:rebeccapurple;
display:flex;
align-items:flex-start;
justify-content:center;
`
const MainContainer = styled.div`
width:80%;
height:100%;
background-color:rebeccapurple;
display:flex;
align-items:flex-start;
justify-content:flex-start;
column-gap:15px;
row-gap:0px;
padding:40px;
flex-wrap:wrap;
`


const CartContainer = styled.div`

width:20%;
padding-top:40px;
padding-left:5px;
padding-right:5px;
height:100%;
min-height:100vh;
background-color:whitesmoke;
display:flex;
flex-direction:column;
align-items:center;
/* justify-content:center; */
h1{
    color:#033249;
    font-family: 'Raleway';
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 0em;
        text-align:center;
        margin-top:10px;
        margin-bottom:10px;
}
`

const ItemCard = styled.div`
background-color:white;
width:230px;
height:380px;
margin-top:20px;
display:flex;
flex-direction:column;
align-items:center;
border-radius:10px;
img{
    width:100%;
    height:77%;
    /* object-fit: cover; */
    border-radius:8px 8px 0 0;
   
}
h1{
    color:#033249;
    font-family: 'Raleway';
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0em;
        text-align:center;
        margin-top:10px;
        margin-bottom:10px;
}
h2{
    color:#FF8038;
    font-family: 'Raleway';
        font-size: 20px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 0em;
}
`

const CartItem = styled.div`
background-color:white;
width:19vw;
height:100px;
margin-top:10px;
display:flex;
align-items:center;
border-radius:10px;
img{
    
    height:100%;
    /* object-fit: cover; */
    border-radius:10px 0 0 10px;
   
}
h1{
    color:#033249;
    font-family: 'Raleway';
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0em;
        text-align:center;
        margin-top:10px;
        margin-bottom:10px;
}
h2{
    color:#FF8038;
    font-family: 'Raleway';
        font-size: 20px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 0em;
}
`