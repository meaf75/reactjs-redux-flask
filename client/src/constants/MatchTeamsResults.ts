import { IMatchResult } from "../components/molecules/MatchComponent";
import { FanaticTeam, MadLionsTeam, G2_Esport_Team } from "./Teams";

export const MatchTeamsResutls : IMatchResult[] = [
    {
        team1: FanaticTeam,
        team2: MadLionsTeam,
        date: '20 MAY 2021, 11:00',
        resultTeam1: 0,
        resultTeam2: 3
    },
    {
        team1: MadLionsTeam,
        team2: FanaticTeam,
        date: '20 MAY 2021, 12:00',
        resultTeam1: 8,
        resultTeam2: 1
    },    
    {
        team1: G2_Esport_Team,
        team2: FanaticTeam,
        date: '20 MAY 2021, 13:00',
        resultTeam1: 1,
        resultTeam2: 1
    },
    {
        team1: FanaticTeam,
        team2: G2_Esport_Team,
        date: '20 MAY 2021, 14:00',
        resultTeam1: 0,
        resultTeam2: 1
    },    
    {
        team1: MadLionsTeam,
        team2: G2_Esport_Team,
        date: '20 MAY 2021, 15:00',
        resultTeam1: 3,
        resultTeam2: 1
    },
    {
        team1: G2_Esport_Team,
        team2: MadLionsTeam,
        date: '20 MAY 2021, 16:00',
        resultTeam1: 1,
        resultTeam2: 1
    },
]