import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { TokenContext } from "./TokenContext";

export default function Item(){

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const params = useParams()
    const {id} = params;
    const { cartItems, setCartItems } = useContext(TokenContext);

    useEffect(() => {

        const URL = `http://localhost:5000/products/${id}`

        const promise = axios.get(URL);
        promise.then((res) => {
            setProduct(res.data);
            console.log(res.data, "Res data");

        })
        promise.catch((err) => {
            console.log(err.response.data);
        })

    },[]);


    function addToCart(){

        const newItem = {
            name:product.name,
            image:product.image,
            quantity:quantity,
            value:(Number(product.price)*quantity).toFixed(2)
        }
        const newArray =[...cartItems,newItem]

        setCartItems(newArray)
    }
    return(
        <MainContainer>
            
                    <SingleItem>
                        <img src={product.image} alt={product.name}/>
                        <h1>{product.name}</h1>
                        <LowerContainer>

                        <StockDiv>

                        <h2>Estoque: {product.stock}</h2>
                        <h3>Quantidade:</h3>
                        <ChangeQuantity>

                        <button onClick={()=> setQuantity(quantity-1)}>-</button>
                        <h3>{quantity}</h3>
                        <button onClick={()=> setQuantity(quantity+1)}>+</button>
                        </ChangeQuantity>
                        </StockDiv>
                        <AddCartDiv>

                        <h2>Preço: R$ {(Number(product.price)*quantity).toFixed(2)}</h2>
                        <button onClick={addToCart}>Adicionar ao carrinho</button>
                        </AddCartDiv>
                        </LowerContainer>
                    </SingleItem>
            
        </MainContainer>
    )
}

const MainContainer = styled.div`
width:100vw;
padding-top:90px;
height:100vh;
background-color:rebeccapurple;
display:flex;
align-items:center;
justify-content:center;
`

const SingleItem = styled.div`
background-color:white;
width:auto;
height:680px;
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
        margin-bottom: 10px;
}
`

const LowerContainer = styled.div`
display:flex;
justify-content:space-around;
width:100%;
padding-top: 10px;

`

const StockDiv = styled.div`
display:flex;
flex-direction:column;

h3{
    color:#033249;
    font-family: 'Raleway';
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0em;
        text-align:center;
        margin-top:10px;
       
}
`
const ChangeQuantity = styled.div`
display:flex;
align-items:center;
button{
    border-radius:100%;
    width:30px;
    height:30px;
    border:none;
    background-color:#ff8038;
    border: 1px #99542c;
    color:#ffffff;
    font-size:25px;
    :hover{
        background-color:#ff6106;

    }
}
h3{
    color:#033249;
    font-family: 'Raleway';
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0em;
        text-align:center;
        margin-top:10px;
        margin-bottom:10px;
        margin-left:20px;
        margin-right:20px;
}
`
const AddCartDiv = styled.div`
display:flex;
flex-direction:column;
button{
    margin-top:10px;
    width:160px;
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
    :hover{
        background-color:#3be668;

    }

}
`