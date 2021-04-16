import React from "react"
import styled from "styled-components"
import { ITeam } from "../../constants/Teams"
import { MatchResultWithDate } from "../atoms/MatchResultWithDate"
import { MatchTeam } from "../atoms/MatchTeam"

export interface IMatchResult {
    team1: ITeam;
    team2: ITeam;
    resultTeam1: number;
    resultTeam2: number;
    date: string;
}

export const MatchComponent = (props: IMatchResult) => {
    return (
        <Content>
            <MatchTeam team={props.team1} />
            <MatchResultWithDate leftResult={props.resultTeam1} rightResult={props.resultTeam2} date={props.date} />
            <MatchTeam team={props.team2} useRightSide />
        </Content>
    )
}

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.432);    
`

export const BigCard = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.432);    
`

export const UserNameComp = styled.span`
    color: #ff6d6d
`