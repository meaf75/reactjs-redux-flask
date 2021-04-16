import { Button, Menu } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import apex_logo from '../../assets/apex-logo.webp'
import { HeaderMenuElement } from "../atoms/HeaderMenuElement";
import { Menu as MenuIcon } from '@material-ui/icons'
import { OnUserLogout } from "../../services/auth.service";
import { useDispatch } from "react-redux";

export interface IHeaderMenuElementProps {
    title: string;
    options: string[];
}

const genericOptions = ['Main home', 'Esports home', 'Bosting hoome', 'Shop', 'Streaming home', 'Games'];

const HeaderOptions: IHeaderMenuElementProps[] = [
    {
        title: 'home',
        options: genericOptions
    },
    {
        title: 'pages',
        options: genericOptions
    },
    {
        title: 'tournament',
        options: genericOptions
    },
    {
        title: 'shop',
        options: genericOptions
    },
    {
        title: 'blog',
        options: genericOptions
    },
    {
        title: 'contact',
        options: genericOptions
    },
]

export const HomeHeader = () => {

    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsOpen(true);
        setAnchorEl(event.currentTarget);
    };

    const handleRequestClose = (event: any) => {
        setIsOpen(false);
    };

    const onClickLogOut = () => {
        OnUserLogout(dispatch)
    }

    const categories = HeaderOptions.map((h, i) => {
        return <HeaderMenuElement title={h.title} options={h.options} key={`${i}`} />
    })

    return (
        <MainContainer>
            {/* Page icon */}
            <LogoImg src={apex_logo} />

            {/* Center categories */}
            <CategoriesContainer>
                {categories}
            </CategoriesContainer>

            {/* right buttons */}
            <AccountContainer>
                <Button color="secondary" onClick={onClickLogOut}>Logout</Button>

                <ButtonCategories>
                    <Button aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon htmlColor='white' />
                    </Button>
                </ButtonCategories>
            </AccountContainer>

            <Menu
                open={isOpen}
                onClose={handleRequestClose}
                anchorEl={anchorEl}
                onMouseLeave={handleRequestClose}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {categories}
            </Menu>
        </MainContainer>
    )
}

const LogoImg = styled.img`
    src: ${props => props.src};
    border-width: 2px;
    border-style: solid;
    width: 64px;
`

const ButtonCategories = styled.div`
    @media (min-width: 640px) {
        display: none;
    }
`

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    background-color: #4e4e4e;
    box-shadow: 1px 10px 2px black;
    padding: 5px;
    justify-content: space-between;
    top: 0;
    position: sticky;
    z-index: 1;
`;

const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 640px) {
        display: none;
    }
`;

const AccountContainer = styled.div`
    display: flex;
    flex-direction: row
`;