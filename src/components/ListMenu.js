import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components"

const Menu = styled.li`
    height: 2rem;
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    position: relative;
    color: ${props => props.theme.grey};
    cursor: pointer;
    &:not(:last-child){
        margin-botton: 0.5rem;
    }
`

const StyledLink = styled(Link)`
    ${(props) =>
        props.selected && css`
        background: ${props => props.theme.primary};
        color: ${props => props.theme.light};
    `};
    text-decoration: none;
`;

const ListMenu = () => {
    const [menu] = useState([
        { name: "Favorite", category: "favorite" },
        { name: "Makanan", category: "makanan" },
        { name: "Minuman", category: "minuman" },
        { name: "Cemilan", category: "cemilan" },
    ]);
    
    const { pathname } = useLocation();
    const currentCategory = pathname.slice(1) === '' ? 'makanan' : pathname.slice(1);

    return (
        <ul>
            {menu.map((item, index) =>  
                <Menu key={index}>
                    <StyledLink to={"/" + item.category} selected={item.category === currentCategory} >{item.name}</StyledLink>
                </Menu>
            )}
        </ul>
    )
}

export default ListMenu