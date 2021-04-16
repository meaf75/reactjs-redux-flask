import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { MatchTeamsResutls } from "../../constants/MatchTeamsResults"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import { MatchComponent } from "../molecules/MatchComponent"
import { AccordionMatchElements } from "./AccordionMatchElements"

export const TrendingMatches = () => {

    const [useMobileVersion, setUseMobileVersion] = useState(false);
    const { width } = useWindowDimensions();

    // Normal version
    const matchComponents = !useMobileVersion ? MatchTeamsResutls.map((m, i) => {
        return <MatchComponent {...m} key={`m-${i}`} />
    }) : null;

    // Mobile version
    let accordionMatchsElement = useMobileVersion ? <AccordionMatchElements matchResults={MatchTeamsResutls}/> : null;


    // Handle match component version
    useEffect(() => {
        const nextState = width < 680;

        if (nextState != useMobileVersion)
            setUseMobileVersion(nextState);
    }, [width])

    return (
        <Content>
            {matchComponents}

            {accordionMatchsElement}
        </Content>
    )
}

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const UserNameComp = styled.span`
    color: #ff6d6d
`