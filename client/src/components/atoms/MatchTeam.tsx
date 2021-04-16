import styled from "styled-components"
import { TitleColor } from "../../constants/ApplicationColros"
import { FanaticTeam, ITeam } from "../../constants/Teams"
import { MultiSocialMedia } from "./MultiSocialMedia"

export interface IMatchTeamProps extends DisplayMode {
    team: ITeam;
}

interface DisplayMode {
    useRightSide?: boolean;
}

export const MatchTeam = (props: IMatchTeamProps) => {
    return (
        <Content>
            {/* top container */}
            <TeamImageAndName useRightSide={props.useRightSide}>
                <img src={props.team.img} width={90} height={90} />
                <TeamName>{props.team.name}</TeamName>
            </TeamImageAndName>

            <SocialMediaContainer useRightSide={props.useRightSide}>
                <MultiSocialMedia />
                <SocialMediaLabel>WATCH</SocialMediaLabel>
            </SocialMediaContainer>
        </Content>
    )
}

export const Content = styled.div`
    text-align: center;
    color: white;
    font-size: 3vw;
    margin: 30px;
    flex-basis: 100%;
`

export const SocialMediaContainer = styled.div<DisplayMode>`
    display: flex;
    margin-top: 8px;
    align-items: center;
    flex-direction: ${props => props.useRightSide ? 'row' : 'row-reverse'};
`

export const TeamImageAndName = styled.div<DisplayMode>`
    flex-direction: ${props => !props.useRightSide ? 'row' : 'row-reverse'};
    display: flex;
    align-content: center;
    text-align: center;
    background-color: rgba(124, 34, 34, 0.308);
    border-style: solid;
    border-color: rgba(134, 38, 38, 0.815);
    border-width: 0px 6px 0px 6px;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    /* border-radius: 7px; */
    height: 55px;
`

export const SocialMediaLabel = styled.span<DisplayMode>`
    color: ${TitleColor};
    font-size: 12px;
    margin-right: ${props => props.useRightSide ? 0 : 10}px;
    margin-left: ${props => !props.useRightSide ? 10 : 0}px;
`

export const TeamName = styled.p`
    color: white;

`