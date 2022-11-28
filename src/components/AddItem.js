import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function AddItem(){

    const [nameValue, setNameValue] = useState("");
    const [imageValue, setImageValue] = useState("");
    const [priceValue, setPriceValue] = useState("");
    const [stockValue, setStockValue] = useState("");


    function insertProduct(e){
        e.preventDefault();
        const URL = "http://localhost:5000/products";

        const body = {
            name: nameValue,
            image: imageValue,
            price: priceValue,
            stock: stockValue,
        }
        const promise = axios.post(URL, body);
        promise.then((res) => {
            console.log(res.data);

        })
        promise.catch((err) => {
            console.log(err.response.data)
            alert("Ocorreu um erro, confira os campos e tente novamente!");
        })

    }

    return(
        <MainContainer>
            <AddProdContainer>
            <h1>Adicionar ao estoque</h1>
 <form onSubmit={insertProduct}>
            
            <input
              type="text"
              id="nameProduct"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder="Nome do produto"
              required
              
              />
            <input
              type="text"
              id="imageProduct"
              value={imageValue}
              onChange={(e) => setImageValue(e.target.value)}
              placeholder="Link da imagem do produto"
              required
              
              />
            <input
              type="number"
              id="priceProduct"
              value={priceValue}
              onChange={(e) => setPriceValue(e.target.value)}
              placeholder="Preço do produto"
              required
              
              />
            <input
              type="number"
              id="stockProduct"
              value={stockValue}
              onChange={(e) => setStockValue(e.target.value)}
              placeholder="Quantidade no estoque"
              required
              
              />
            <ButtonContainer type="submit">
                
               Adicionar produto
              
            </ButtonContainer>
          </form>

              </AddProdContainer>
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

const AddProdContainer = styled.div`
h1{
    font-family: 'Saira Stencil One';
font-size: 31px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0em;
text-align: center;
color:white;
margin-bottom:20px;
}
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