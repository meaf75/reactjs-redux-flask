import { YouTube, Twitter, Facebook } from "@material-ui/icons"
import styled from "styled-components"


export const MultiSocialMedia = () => {
    return (
        <Content>
            <YouTube htmlColor='white' />
            <Twitter htmlColor='white' />
            <Facebook htmlColor='white' />
        </Content>
    )
}


export const Content = styled.div`
   display: flex;
   flex-direction: row;
`