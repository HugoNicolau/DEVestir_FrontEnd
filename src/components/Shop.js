import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TokenContext } from "./TokenContext";


export default function Shop(){

    const [items, setItems] = useState([]);
    const {cartItems, setCartItems, showCart, setShowCart, token} = useContext(TokenContext);
    const [totalValue, setTotalValue] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const URL = "http://localhost:5000/products";
        
    
        const promise = axios.get(URL);
        promise.then((res) => {
          
          setItems(res.data);
          console.log(items);
          
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
        
    },[])


  

   function excludeItem(item){

    const newArray = cartItems.filter((c) => c!==item)
    setCartItems(newArray);
   }

   function backToMainScreen(){
    if(showCart){
        setShowCart(!showCart)
    }

   }
   let totalSum = 0;
   cartItems.map((c) => totalSum+= Number(c.value));
  
   function buyItems(){
    if(!token){
        navigate("/login")
    }
    else{
        const URL = "http://localhost:5000/products";
        const body = cartItems;

        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        };

        const promise = axios.put(URL, body, config);
        promise.then((res) => {
            console.log(res.data)
            alert("Items comprados com sucesso!")
            setCartItems([]);
        })
        promise.catch((err) => {
            console.log(err.response.data);
        })
    }
   }


    return(
        <ScreenContainer >
            {showCart ? <BlockContainer onClick={backToMainScreen}>
            {items.map((i) => {
                    return(
                        
                        <>
                        <ItemCard>
                    <img src={i.image} alt={i.name}/>
                    <h1>{i.name}</h1>
                    <h2>R$ {Number(i.price).toFixed(2).replace(".",",")}</h2>
                </ItemCard>
                </>
                )
            })}
            </BlockContainer> : 
            <MainContainer onClick={backToMainScreen} showCart={showCart}>
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
        }
                {showCart && 
            <CartContainer>
                <h1>Itens no carrinho</h1>

                {cartItems.length === 0 ? <EmptyCart>Seu carrinho está vazio</EmptyCart> : cartItems.map((c) => {
                    
                    return(
                        
                        <CartItem>
                    <img src={c.image} alt={c.name}/>
                    <h1>{c.name}</h1>
                    <div>

                    <h1>Qtd: {c.quantity}</h1>
                    <h2>R${Number(c.value).toFixed(2).replace(".",",")}</h2>
                    </div>
                    <button onClick={() =>excludeItem(c)}>X</button>
                </CartItem>
                        )
                    })}
                <BuyButton onClick={buyItems}>Realizar compra  {totalSum > 0.01 ? ` R$ ${totalSum.toFixed(2).replace(".",",")}` : ""} </BuyButton>
            </CartContainer>
                }
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
width:100%;
height:100%;
background-color:rebeccapurple;
display:flex;
align-items:flex-start;
justify-content:flex-start;
column-gap:15px;
row-gap:0px;
padding:40px;
flex-wrap:wrap;
opacity: ${props => props.showCart ? "0.5" : "1"};
`
const BlockContainer = styled.div`
width:100%;
height:100%;

background-color:black;
opacity:0.5;
display:flex;
align-items:flex-start;
justify-content:flex-start;
column-gap:15px;
row-gap:0px;
padding:40px;
flex-wrap:wrap;
padding-bottom:80px;
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
position:fixed;
right:0;
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
const BuyButton = styled.button`
 margin-top:10px;
    width:160px;
    width:19.9%;
    background-color:#19b442;
	border-radius:28px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:6px 21px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
    position:fixed;
    right:0px;
    bottom:30px;
    :hover{
        background-color:#3be668;

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