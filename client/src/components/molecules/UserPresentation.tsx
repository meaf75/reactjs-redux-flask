import { useSelector } from "react-redux";
import styled from "styled-components"
import { TitleColor } from "../../constants/ApplicationColros"
import { RootState } from "../../store";

export const UserPresentation = () => {

    const user = useSelector((state: RootState) => state.app.user);

    return (
        <Content>
            Hi! <UserNameComp>{user?.username}</UserNameComp>, here there are the new top match
        </Content>
    )
}

export const Content = styled.span`
    text-align: center;
    color: white;
    font-size: 4vw;
    display: block;
    margin-top: 2vw;
    margin-bottom: 15px;
`

export const UserNameComp = styled.span`
    color: ${TitleColor}
`