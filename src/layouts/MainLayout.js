import React from "react";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import ListMenu from "../components/ListMenu";
import CalculateBox from "../components/CalculateBox";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import * as theme from "../styled/theme"

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 10vh;
`

const MenuContainer = styled.div`
  width: 15%;
  padding: 0.5rem 0
  padding-right: 0.5rem;
`

const CartContainer = styled.div`
  width: 25%;
  padding: 0.5rem 0.5rem;
`

const MainLayout = props => {
  const carts = useSelector(state => state.product.carts)
  return(
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <MenuContainer>
          <ListMenu />
        </MenuContainer>
            {props.children}
        <CartContainer>
          <p>{carts ? `${carts.length} item in cart` : '0 item in cart'}</p>
          {carts.map(item => 
            <CartItem key={item.id} item={item}/>
          )}
          <CalculateBox />
        </CartContainer>
      </Container>
    </ThemeProvider>
  )
}

export default MainLayout;
