import styled from "styled-components"
import { TitleColor } from "../../constants/ApplicationColros"

export interface IMatchResultWithDate {
    leftResult: number;
    rightResult: number;
    date: string;
}

export const MatchResultWithDate = (props: IMatchResultWithDate) => {
    return (
        <Content>
            <ResultText>{props.leftResult} : {props.rightResult}</ResultText>
            <EventDate>{props.date}</EventDate>
        </Content>
    )
}

export const Content = styled.div`
    flex-basis: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const ResultText = styled.span`
    flex-basis: 100%;
    color: white;
    text-align: center;
    font-size: 5vw;
    flex-basis: unset;
`

export const EventDate = styled.span`
    color: ${TitleColor};
    text-align: center;
`
