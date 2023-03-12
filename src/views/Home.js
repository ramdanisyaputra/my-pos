import React from "react";
import MainLayout from "../layouts/MainLayout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const ProductContainer = styled.div`
  width: 60%;
  height: 100%;
  background: ${props => props.theme.light};
  border-left: 1px solid #f7f7f7;
  border-right: 1px solid #f7f7f7;
  padding: 0.5rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Home = ({category}) => {
    const products = useSelector(state => state.product.products.filter(product => product.category === category))

    return(
        <MainLayout>
            <ProductContainer>
                {products.map(product => 
                    <ProductCard item={product} key={product.id}/> 
                )}
            </ProductContainer>
        </MainLayout>
    )
}

export default Home;
