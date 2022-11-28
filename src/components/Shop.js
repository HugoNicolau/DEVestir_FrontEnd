import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { TokenContext } from "./TokenContext";


export default function Shop(){

    const [items, setItems] = useState([]);
    const {cartItems, setCartItems} = useContext(TokenContext);
   


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
        
    },[])


   console.log(items)
    
   console.log(cartItems, "Cart Items")

   function excludeItem(item){

    const newArray = cartItems.filter((c) => c!==item)
    setCartItems(newArray);
   }

    return(
        <ScreenContainer>
            <MainContainer>
                {items.map((i) => {
                    return(

                <Link to={`/${i._id}`}>
                        <ItemCard>
                    <img src={i.image} alt={i.name}/>
                    <h1>{i.name}</h1>
                    <h2>R$ {Number(i.price).toFixed(2).replace(".",",")}</h2>
                </ItemCard>
                </Link>
                )
                })}
                
            </MainContainer>
            <CartContainer>
                <h1>Itens no carrinho</h1>

                {cartItems.length === 0 ? <EmptyCart>Seu carrinho está vazio</EmptyCart> : cartItems.map((c) => {

                    return(

                        <CartItem>
                    <img src={c.image} alt={c.name}/>
                    <h1>{c.name}</h1>
                    <div>

                    <h1>Qtd: {c.quantity}</h1>
                    <h2>R${c.value}</h2>
                    </div>
                    <button onClick={() =>excludeItem(c)}>X</button>
                </CartItem>
                        )
            })}
                
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
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

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
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
padding:10px;
align-items:center;
border-radius:10px;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
position:relative;
img{
    
    height:100%;
    /* object-fit: cover; */
    /* border-radius:10px 0 0 10px; */
   
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
button{
    font-size:15px;
  font-family:Arial;
  border-width:1px;
  color:#fff;
  border-color:#ffffff;
  border-top-left-radius:4px;
  border-top-right-radius:4px;
  border-bottom-left-radius:4px;
  border-bottom-right-radius:4px;
  /* box-shadow:inset 0px 39px 0px -24px #e67a73; */
  text-shadow:inset 0px 1px 0px #b23e35;
  background:#e4685d;
  position:absolute;
  right:5px;
  top:5px;
 :hover{
    background: #ce2519;
    /* background-color:black; */
 }
}

`

const EmptyCart = styled.div`
width:100%;
/* height:50%; */
padding-top:50px;
color:#033249;
    font-family: 'Raleway';
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0em;
        text-align:center;
        margin-top:10px;
        margin-bottom:10px;
`